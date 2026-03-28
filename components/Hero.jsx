import React, { useState } from 'react'
import Card from './Card'

const Hero = ({ taskList }) => {
  const [selected,setselected]=useState(null)
  return (
    <div className='bg-zinc-800 absolute top-[57%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10 rounded-md h-[33vw] w-[60vw] flex items-center justify-between gap-4 '>
      <div className='bg-red-950 h-full w-[30%] rounded-2xl flex flex-col gap-2 '>
        {taskList.map((task,key)=> (<Card title={task.title} key={key} setselected={setselected} number={key}/>))}
      </div>
      <div className='bg-red-950 h-full w-[70%] rounded-2xl'>
{selected!=null ? taskList[selected].description : "Good Morning" }
      </div>  
    </div>
  )
}

export default Hero
