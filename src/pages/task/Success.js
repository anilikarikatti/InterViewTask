import Image from 'next/image'
// import Success from '../../public/images/success.png' 
import { useState } from 'react'

function SuccessMessage({action,setData,setStatus,setEditableTask}){
    return(
        <div className={" h-screen w-screen absolute flex justify-center items-center z-[100] "}>
            <div className='bg-white p-10 rounded-lg'>
                <div className='flex justify-center '></div>
                <p className='text-center p-3'>{action}</p>
                <p className='rounded-lg bg-blue-100/60 p-2 text-center'></p>
                <div className='flex justify-center p-3'>
                    <button className='rounded-lg bg-blue-800 text-white py-2 px-10' onClick={()=>{(setStatus) ? setStatus("") : "";
                        setEditableTask("");
                    (setData) ? setData("") : "";
                    }}>Okay</button>
                </div>
            </div>
        </div>
    )
}
export default SuccessMessage