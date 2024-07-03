import React from 'react'
import check from '../assets/check.png'
import check1 from '../assets/check1.png'
import deleteitem from '../assets/trash-can.png'

const Todoitems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

      <div onClick={()=>{toggle(id)}} className='flex flex-1 ml-3 items-center cursor-pointer'>
        <img src ={isComplete ? check: check1} alt="" className='w-7'></img>
        <p className={` text-slate-900 ml-4 text-[17px] decoration-slate-500
        ${isComplete ? "line-through": ""}`}>{text}</p>
      </div>

      <img onClick={()=> {deleteTodo(id)}} 
      src= {deleteitem} 
      alt="" 
      className='w-7 cursor-pointer'/> 

    </div>
  )
}

export default Todoitems
