import React from 'react'
import Card from './Card'

const Hero = ({ taskList }) => {
  return (
    <div className='bg-zinc-800 absolute top-[57%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10 rounded-md h-[33vw] w-[60vw] flex items-center justify-between gap-4 '>
      <div className='bg-red-950 h-full w-[30%] rounded-2xl'>
<Card title={taskList[0].title}/>
      </div>
      <div className='bg-red-950 h-full w-[70%] rounded-2xl'>
{taskList[0].description}
      </div>  
    </div>
  )
}

export default Hero
