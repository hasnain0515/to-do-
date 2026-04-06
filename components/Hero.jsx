import React, { useState } from 'react'
import Card from './Card'

const Hero = ({ taskList, setTaskList , updatedone
}) => {
  const [selected, setSelected] = useState(null)
  const deleteTask = () => {
    if (selected === null) return

    const updatedList = taskList.filter(task => task.id !== selected)
    setTaskList(updatedList)
    setSelected(null)
  }

  const selectedTask = taskList.find(task => task.id === selected)

  return (
    <div className='bg-zinc-800 absolute top-[57%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10 rounded-md h-[33vw] w-[79vw] flex items-center justify-between gap-4'>
      <div className='bg-zinc-700 h-full w-[30%] rounded-2xl flex flex-col gap-2 p-4'>
        {taskList.map((task) => (
          <Card
            done={task.done}
            key={task.id}
            title={task.title}
            number={task.id}
            setselected={setSelected}
            updatedone = {updatedone} 
          />
        ))}
      </div>
      <div className='bg-zinc-700 h-full w-[70%] rounded-2xl p-6 flex flex-col'>
        
        <div className='flex flex-col gap-3'>
          <div className='text-3xl font-semibold'>
            {selectedTask ? selectedTask.title : "Good Morning"}
          </div>

          <div className='text-md'>
            {selectedTask ? selectedTask.description : ""}
          </div>
        </div>

        <div className='mt-auto flex justify-end'>
          <div className={`${selectedTask? 'flex' : 'hidden'}`}> 
          <button
            onClick={deleteTask}
            disabled={selected === null}
            className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50'
          >
            Delete
          </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero