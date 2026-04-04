import React from 'react'

const Card = ({title,setselected,number,done}) => { 
  return (
    <div className='border p-2 rounded-2xl flex gap-1' onClick={() => {setselected(number)}}>
        <input type="checkbox" name="" id="" />
        {title}
    </div>
  )
}

export default Card
