import Edit from "/public/edit1.svg"
import Image from "next/image";

import { useRouter } from "next/router";
export default function TaskList(props){

    let {data,setStatus,setEditableTask} = props

    console.log("data",data);

    let headers = Object.keys(data[0])

    // for description not needed

    headers = headers.filter(elem=>elem!="description" && elem != "index")

    headers.reverse()

    let edit = (elem,index)=>{
console.log(elem);

        setStatus({save:true})
        setEditableTask({...elem,index : index+1})
    }

    return(
        <>
<div className="relative ">

        <table className="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                {headers.map(elem=>
                (
                    <th scope="col" className="px-6 py-3 text-center" key = {elem}>
                        {elem}
                    </th>)
                )}
                </tr>
            </thead>
            <tbody >

            
                    
                    {data.map((elem,index)=>(
                        
                        <tr className="bg-white border-b  dark:border-gray-700" key={elem}>
                    { headers.map(value=>{
                        
                        if(value == "edit"){
                            return <td key={1}  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex justify-center" onClick={()=>{edit(elem,index)}}><Image src = {Edit} height={20} width={20} alt= "edit" /></td>
                        }
                            return <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap   text-center" key={value}>
                                {elem[value] ?  elem[value] : ""}
                            </td>
                                
                        })
                        }
                            </tr>
                                    
                        )
                    )}
                    
            
                
            </tbody>
    </table>
    </div>
        </>
    )
}