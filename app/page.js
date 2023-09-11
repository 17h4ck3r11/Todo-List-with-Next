"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title,desc}])
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between mt-8 mb-8'>
          <div className='flex items-center'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
          </div>
          <div className='flex items-center'>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
        <button 
          onClick={() => {
            deleteHandler(i)
          }}
          className='bg-orange-500 hover:bg-orange-700 text-white py-2 w-1/4 rounded focus:outline-none'
        >Delete</button>
      </li>
    )})
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='p-4 flex flex-col'>
        <h1 className='text-center text-3xl'>TODO LIST</h1>
        <form onSubmit={submitHandler} className='flex flex-col m-5 px-52 py-5'>
          <label for='task' className='mr-2'>Task Name</label>
          <input 
            type='text' 
            id='task'
            className='py-2 rounded pl-2 input focus:outline-none '
            placeholder='Please enter your task'
            value={title}
            onChange={(e)=> {
              settitle(e.target.value)
            }}
            autoFocus
          ></input>
          <label for='desc' className='mr-2 mt-5'>Description</label>
          <textarea 
            id='desc' 
            rows='2'
            className='py-2 rounded pl-2 input focus:outline-none '
            placeholder='Add description for the task'
            value={desc}
            onChange={(e)=> {
              setdesc(e.target.value)
            }}
          ></textarea>
          <button 
            type='submit' 
            className='bg-orange-500 hover:bg-orange-700 text-white mt-5 py-2 rounded focus:outline-none '
          >Add Task!</button>
        </form>
      </div>
      <ul>
            {renderTask}
      </ul>
    </div>
  )
}

export default page