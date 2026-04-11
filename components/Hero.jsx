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
  const editTask = () => {
    if(!selectedTask) return
    setEditedDescription(selectedTask.description)
    setEditedTitle(selectedTask.title)
    setEditMode(true)
  } 
  const saveTask = () => {
    console.log(selectedTask.title)
    console.log(selectedTask.description)
    setEditMode(false)
    setTaskList( prev => prev.map(task => task.id===selected? {...task,title:EditedTitle,description:EditedDescription} : task) )
  }
  const [editMode, setEditMode] = useState(false)
  const selectedTask = taskList.find(task => task.id === selected)
  const [EditedTitle, setEditedTitle] = useState("")
  const [EditedDescription, setEditedDescription] = useState("")

  
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
      <div className=' right-side bg-zinc-700 h-full w-[70%] rounded-2xl p-6 flex flex-col'>
        <> {editMode? (
        <div className='edit-div flex flex-col gap-3 '>
          <input type="text" className=' border-2 p-2 rounded-md text-3xl font-semibold' onChange={(e) => {setEditedTitle(e.target.value)}} value={EditedTitle}/>
          <textarea className=' border-2 p-2 text-md rounded-md max-h-60 h-60 min-h-60' onChange={(e)=> {setEditedDescription(e.target.value)}} value={EditedDescription}></textarea>
        </div>) :
        (<div className=' display-div flex flex-col gap-3 '>
          <div className='text-3xl font-semibold'>
            {selectedTask ? selectedTask.title : "Good Morning"}
          </div>

          <div className='text-md'>
            {selectedTask ? selectedTask.description : ""}
          </div>
        </div>)
}
        </>

        <div className='mt-auto flex justify-end'>
          <div className={`${selectedTask? 'flex gap-2' : 'hidden'}`}> 
            <button
            
            onClick={editMode? saveTask : editTask}
            disabled={selected === null}
            className='px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 disabled:opacity-50'
          >
            {editMode? "Save" :"Edit"}
          </button>
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