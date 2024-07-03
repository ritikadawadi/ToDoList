import React, { useEffect, useRef, useState } from 'react'
import TD from '../assets/TD.png'
import Todoitems from './todoitems'

const Todo = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): []);
    /* array to store the ToDo list 
    since it is a small scale application, array works. 
    */


    const inputRef = useRef(); /*this is also from the react package */
    
    const add = ()=> {

        const inputText = inputRef.current.value.trim(); /* trim removes the extra space from the start to the end*/

        if (inputText === "")
        {
            return null;
        }
        
        const newTodo = {
            id: Date.now(), /* generates one unique number */
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev)=>[...prev, newTodo]);
        /* to store the todo in the array, and then it is important to clear 
        the fiels */
        inputRef.current.value = ""; /* so that the imput field is empty again */

    };

    const deleteTodo = (id)=> {
        setTodoList((prevTodos)=>{
            return prevTodos.filter((todo)=>todo.id !== id);
            });
        };

    const toggle = (id)=> {
        setTodoList((prevTodos)=>{
            return prevTodos.map((todo)=>{
                if (todo.id == id){
                    return {
                        ...todo, isComplete: !todo.isComplete}}
                    return todo;
            })
        })
    }

    useEffect(()=>{localStorage.setItem("todos", JSON.stringify(todoList))}, [todoList]);



      return (
    <div className='bg-white place-self-center w-1/2 max-1-md
    flex flex-col p-7 min-h-[690px] rounded-xl'>

        {/*------ TITLE */}
        <div className='flex items-center ml-10 mt-7 gap-2'>
            <img className='w-8' src={TD} alt=""/>
        <h1 className='text-3xl font font-semibold'>To-Do List</h1>

        </div>

        {/* ---- INPUT BOX */}

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input  ref={inputRef} className="bg-transparent border-0 outline-none flex-grow h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder = "Add your task"/>
            <button onClick= {add} className='border-none rounded-full bg-sky-600 w-32 h-14 text-white text-sm font-light cursor-pointer'>ADD +</button>
        </div>


        {/* ---- To Do list */}

        <div>
            {todoList.map((item, index)=>{
                return <Todoitems 
                key = {index}
                text= {item.text} 
                id = {item.id} 
                isComplete={item.isComplete}
                deleteTodo= {deleteTodo}
                toggle={toggle}/>

            })}
            
        </div>    
    </div>
  );
};
    
export default Todo
