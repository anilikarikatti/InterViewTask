import { useEffect, useState } from "react"
import SuccessMessage from "./Success";
// import { useRouter } from "next/router";

export default function AddTask({tasks, setTasks,setStatus,status, timer,editableTask,setEditableTask,setTimer}){

        // let router = useRouter()

        

        let [task,setTask ]  =useState({})

        // let [status,setStatus] = useState({})

        

        useEffect(()=>{
            let {hour,minutes,seconds} = timer
            setTask({...task,edit:"edit","HH:MM:SS" : `${hour} : ${minutes} : ${seconds}`})
            
            if(editableTask){
                console.log(editableTask,"addff");
                
                setTask({...editableTask})
            }
        },[setTask])

        console.log(task);

        let [buttons,setButtons] = useState([
            {name:"save" },
            {name:"cancel" },
    
        ])

        let taskChange = (e)=>{
            setTask({...task,[e.target.name] : e.target.value})    
        }

        let taskAdd = (e)=>{
            let name = e.target.innerText;
            switch(name){
                case "Save":
                    onSave()
                    break;
                case "Cancel":
                    onCancel();
                    break
               
                }
        }

        let onSave = ()=>{
            let arr =[]
            if(task.title && task.description){
                let {index} = task;
                
                console.log(index,"index");
                if(index ){
                    // console.log(tasks);
                   let  arr1 = [...tasks]
                    arr= arr1.filter((elem,ind)=>ind != index-1)

                    
                }
                else{
                    arr = [...tasks]
                }
                    console.log(arr);
                    setTasks([...arr,task])

                
                setStatus({...status, success : true})
                setTimer(0)
                
                // setParentStatus({...parentStatus,success:false})    
             }
             else{
                alert("please fill all the fields")
             }
        }

        let onCancel = ()=>{
            
            setStatus({...status , failure : true})
            setTimer(0)
            // alert("are you sure")
        }


    return (
        <>
            {status.success ? <SuccessMessage  action = "task added successfully" setData={setTask} setStatus={setStatus}  setEditableTask={setEditableTask}/> :  status.failure ? <SuccessMessage  action = "you cancel the task" setData={setTask} setStatus={setStatus}  setEditableTask={setEditableTask}/>  :
                <div className="flex justify-center">
                    <div className="border-2 border-white h-80 w-[60%] top-20 relative flex justify-center  flex-col items-center gap-2">
                        <label htmlFor="title" className="capitalize">title</label>
                        <input type="text" name="title" className="p-2 rounded-lg" onChange={taskChange} value={task.title}/>

                        <label htmlFor="title" className="capitalize ">description</label>
                        
                        <textarea name="description" onChange={taskChange} rows={10} cols={50} className="p-4 rounded-lg " value={task.description}></textarea>
                        
                        <div className="h-10 relative top-10 w-[90%] flex justify-around ">
                            {buttons.map(elem=>{
                                let {name,isActive} = elem;
                                return (
                                    <button className="text-white bg-green-800 w-40 rounded-lg capitalize h-10 relative top-10 " onClick={taskAdd} > {name}</button>
                                )
                            })}
                        </div>
                    </div>

                </div>
}
        </>
    )

}