import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Button from '../components/Button'
import Model from '../components/Model'

const App = () => { 
  function updatedone (id) {
    setTaskList((taskL) => {
      taskL.map((task) => {task.id === id? {...task, done :!task.done} : task })
    })
    }
  const [isModelOpen, setisModelOpen] = useState(false)
  const [taskList,setTaskList ] = useState([
  {
    done: false,
    id: crypto.randomUUID(),
    title: "Do the thing you’ve been avoiding",
    description: "You know exactly which one. Don’t pretend you don’t."
  },
  {
    done: false,
    id: crypto.randomUUID(),
    title: "Reply to messages",
    description: "Yes, even the awkward ones you opened and ignored."
  },
  {
    done: false,
    id: crypto.randomUUID(),
    title: "Fix your sleep schedule",
    description: "Scrolling at 2AM is not a personality trait."
  }
])
  return (
    <div className='text-white bg-zinc-600 w-screen h-screen '>
      <Navbar/>
      <Hero taskList={taskList} setTaskList={setTaskList} updatedone = {updatedone} />
      <Button setisModelOpen={setisModelOpen}/>
      <Model isModelOpen={isModelOpen} setisModelOpen={setisModelOpen} setTaskList={setTaskList}/>
    </div>
  )
}

export default App
