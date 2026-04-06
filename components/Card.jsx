import React from 'react'

const Card = ({title,setselected,number,updatedone,done
}) => { 
  return (
    <div className={`border p-2 rounded-2xl flex gap-1 ${done? "line-through text-zinc-500" : ""}`} onClick={() => {setselected(number)}}>
        <input type="checkbox" name="" id="" onClick={ () => {
          updatedone(number)
          console.log(number)
        }}/>
        {title}
    </div>
  )
}

export default Card
