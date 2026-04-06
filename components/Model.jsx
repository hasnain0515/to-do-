import React, { useState } from 'react'

const Model = ({isModelOpen, setisModelOpen, setTaskList}) => { 
    const [inputTitle, setinputTitle] = useState("")
    const [inputdesc, setinputdesc] = useState("")
    const handlesubmit = (e) => {
        e.preventDefault()
        const newTask = {
            done : false,
            id: crypto.randomUUID(),
            title : inputTitle, 
            description : inputdesc
        }
        console.log(newTask)
        setinputTitle("")
        setinputdesc("")
        setTaskList( (previous) => [...previous , newTask])
        setisModelOpen(false)
    }
  return (
    <div className={`${isModelOpen?'flex': 'hidden'}`}>
      <div className='overlay bg-black/50 absolute w-screen h-screen top-0 ' onClick={() => {setisModelOpen(false)}}></div>
        <form action="" onSubmit={handlesubmit} className=' absolute top-[50%] left-[50%] translate-[-50%] h-[69vh] w-[60vw] bg-gray-400 px-5 py-4 flex flex-col gap-4'>
        <input type="text" className='w-full text-xl bg-white text-black px-2 rounded ' placeholder='Title'  value={inputTitle} onChange={(e) => {setinputTitle(e.target.value)}}/>
        <textarea name="" id="" className='w-full text-xl bg-white text-black px-2 rounded h-[50vh] ' placeholder='Description' value={inputdesc} onChange={ (e)=> {setinputdesc(e.target.value)}}></textarea>
        <button className='border px-3.5 py-2 rounded-xl bg-green-800 w-fit ml-auto ' type='submit' >Submit</button>
        </form>
      </div>
  )
}

export default Model
