import React from 'react'

const Button = ({setisModelOpen}) => {
  return ( 
    <div className='absolute bottom-5 right-5 border px-3.5 py-2 rounded-xl bg-green-800' onClick={ ()=> {setisModelOpen(true)}}>
      Add Task
    </div>
  )
}

export default Button
