
import Image from "next/image";

import Edit from "../../public/images/edit.svg"
export default function Table1(props){

    let {data} = props
    let headers = Object.keys(data[0])

   return(
    <>

<div className="relative overflow-x-auto top-10 h-full">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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

           
                
                {data.map(elem=>(
                      
                      <tr className="bg-white border-b  dark:border-gray-700" key={elem}>
                   { headers.map(hea=>{
                      
                      if(hea == "edit"){
                        return <td key={hea}  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex justify-center" ><Image src = {Edit} height={20} width={20} alt= "edit" /></td>
                      }
                        return <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap   text-center" key={hea}>
                            {elem[hea].length > 30 ? elem[hea].slice(0,30) + "...." : elem[hea]}
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

// testing data

//  const data=[{
//     id:1,
//     name:'Indian Institute of Technology Bombay',
//     username: 'iitBombay',
//     password:12341,
    
// },{
//     id:2,
//     name:'Indian Institute of Technology Surat',
//     username: 'iitSurat',
//     password:12342,
    
// },
// {
//     id:3,
//     name:'Indian Institute of Technology Dharwad',
//     username: 'iitDharwad',
//     password:12343,
    
// },
// {
//     id:4,
//     name:'R V College Banglore',
//     username: 'rv',
//     password:12344,
//     active:false
// },{
//     id:5,
//     name:'New Sheford Institute',
//     username: 'newsheford',
//     password:12345,
    
// },
// {
//     id:1,
//     name:'Indian Institute of Technology Bombay',
//     username: 'iitBombay',
//     password:12341,
    
// },{
//     id:2,
//     name:'Indian Institute of Technology Surat',
//     username: 'iitSurat',
//     password:12342,
    
// },
// {
//     id:3,
//     name:'Indian Institute of Technology Dharwad',
//     username: 'iitDharwad',
//     password:12343,
    
// },
// {
//     id:4,
//     name:'R V College Banglore',
//     username: 'rv',
//     password:12344,
//     active:false
// },{
//     id:5,
//     name:'New Sheford Institute',
//     username: 'newsheford',
//     password:12345,
    
// }
// ]
