import React from 'react'

const Card = ({title,setselected,number}) => { 
  return (
    <div className='border p-2 rounded-2xl' onClick={() => {setselected(number)}}>
        {title}
    </div>
  )
}

export default Card
