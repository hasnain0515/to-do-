import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const App = () => { 
  const taskList = [
  {
    title: "Do the thing you’ve been avoiding",
    description: "You know exactly which one. Don’t pretend you don’t."
  },
  {
    title: "Reply to messages",
    description: "Yes, even the awkward ones you opened and ignored."
  },
  {
    title: "Fix your sleep schedule",
    description: "Scrolling at 2AM is not a personality trait."
  }
];
  return (
    <div className='text-white bg-zinc-600 w-screen h-screen '>
      <Navbar/>
      <Hero taskList={taskList}/>
    </div>
  )
}

export default App
