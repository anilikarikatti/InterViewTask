import { useEffect, useState ,useRef} from "react"

import AddTask from "./addTask";
import TaskList from "./taskList";

export default function Timer(){


    let [tasks,setTasks] = useState("")

    let [editableTask,setEditableTask] = useState("")
   
    let [buttons,setButtons] = useState([
        {name:"start" , isActive:true},
        {name:"pause" , isActive:true},
        {name:"save" , isActive:false},

    ])

    let [timer,setTimer] = useState({
        hour:0,
        minutes:0,
        seconds:0
    })

    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);

    const [status , setStatus] = useState({})
    const timerIdRef = useRef(null);


    let btnClicked = (e)=>{
        console.log(e.target.innerText);
        let name = e.target.innerText;
        switch(name){
            case "Start":
                onStart()
                break;
            case "Pause":
                onStop();
                break
            case "Save":
                onSave();
                break

            case "Tasks List":
                onTasks();
                break
            }

    }
   
    useEffect(() => {
      if(start){

        timerIdRef.current = setTimeout(() => {

            let min = Math.floor(count / 60 );
            let sec = count % 60 ;
            let hours =0 ;
            if(min >= 60){
                hours = Math.floor(min / 60) ;
                min = min % 60
            }

            setTimer({hour:hours , minutes : min , seconds:sec})
          setCount(count + 1);


        }, 1000);
      }
      
      () => {
        clearTimeout(timerIdRef.current);
      }
    }, [count, start])
    
    const onStart = () => {
      setStart(true);
      btnDisabled("start")
    
    };
    
    const onStop = () => {
      clearTimeout(timerIdRef.current);
      setStart(false);
      btnDisabled("pause")
    };

    const onSave = () => {
        if(buttons[2].isActive){
        clearTimeout(timerIdRef.current);
        setStart(false);
        btnDisabled("save")
        setStatus({...status,save:true,tasks:false})
        }

      };

      const onTasks = () => {
       console.log("calles");
        setStatus({...status,tasks:true})
      };
      

    let btnDisabled = (btn)=>{
        setButtons(buttons.map(elem=>{
            let {isActive} = elem
                if(elem.name == btn){
                    return {...elem,isActive:false}
                }
                else{
                    return  {...elem,isActive:true}
                }
          }))
    }

    return (
        <>
           <div className="h-screen bg-blue-400 overflow-y-scroll">
                <div className="capitalize text-center text-[30px] relative top-10 "><h1>{status.save ? "Add task " : "timer"}</h1></div>
                {status.save ? <AddTask tasks={tasks} setTasks={setTasks} setStatus = {setStatus} status={status} timer={timer} setTimer = {setCount} editableTask={editableTask} setEditableTask={setEditableTask} /> : 
                <div className="flex justify-center">
                    <div className="border-2 border-white h-80 w-[60%] top-20 relative flex justify-center  flex-col items-center">
                        <h2 className=" border-2 border-white w-80 text-center h-10 p-2">{timer.hour + " : " + timer.minutes + " : " + timer.seconds }</h2>

                        {/* <h2>{count}</h2> */}

                        <div className="h-10 relative top-10 w-[90%] flex justify-around ">
                            {buttons.map(elem=>{
                                let {name,isActive} = elem;
                                return (
                                    <button className={isActive ? "text-white bg-green-800 w-40 rounded-lg capitalize" : "text-black bg-green-300 w-40 rounded-lg capitalize"}  onClick={btnClicked}> {name}</button>
                                )
                            })}
                        </div>

                        <div className="h-10 relative top-20 w-[90%] flex justify-around ">
                            <button className="text-white bg-green-800 w-40 rounded-lg capitalize "  onClick={btnClicked}> tasks list</button>
                        </div>
                    </div>

                </div>}

               {status.tasks? <div className="h-96  relative top-40 flex justify-center ">
               {tasks ?
                   <div className=" w-[80%] h-80 overflow-y-scroll border-2 border-black     ">
                   <TaskList  data = {tasks} setStatus = {setStatus} setEditableTask={setEditableTask} />
                   </div>:""}
                </div> : ""}
           </div>
        </>
    )
}