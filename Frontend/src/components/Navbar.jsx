import React, { useContext } from 'react'
import { context } from '../context/myContext'
import { LayoutGrid, List } from 'lucide-react'
import Toggle from './Toggle'

const Navbar = () => {

    const {setIsModelOpen, setSearch, setFilter, filter} = useContext(context)

  return (
        <nav className='p-4 flex flex-col items-center justify-center gap-4'>
          <div className='flex justify-between items-center w-full'>
            <h1 className='text-2xl uppercase text-orange-500'>Kanban Board</h1>
            <div className='flex items-center justify-center'>
              <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search Task' className='w-70 border px-4 py-1 rounded-2xl'/>
            </div>
            <div className='flex gap-2 h-fit'>
              <span onClick={()=>setFilter("all")} className={`cursor-pointer rounded-2xl ${filter && filter=="all" ? "bg-orange-900" : "bg-orange-500"} text-white text-sm px-2 py-1`}>All Tasks</span>
              <span onClick={()=>setFilter("todo")} className={`cursor-pointer rounded-2xl ${filter && filter=="todo" ? "bg-orange-900" : "bg-orange-500"} text-white text-sm px-2 py-1`}>Todo Tasks</span>
              <span onClick={()=>setFilter("progress")} className={`cursor-pointer rounded-2xl ${filter && filter=="progress" ? "bg-orange-900" : "bg-orange-500"} text-white text-sm px-2 py-1`}>In Progress Tasks</span>
              <span onClick={()=>setFilter("completed")} className={`cursor-pointer rounded-2xl ${filter && filter=="completed" ? "bg-orange-900" : "bg-orange-500"} text-white text-sm px-2 py-1`}>Completed Tasks</span>
            </div>
            <div className='flex justify-end'>
              <button onClick={()=>setIsModelOpen(true)} className='w-fit px-4 py-2 bg-orange-500 text-white rounded-3xl cursor-pointer'>Add Task</button>
            </div>
          </div>
          <Toggle />
        </nav>
  )
}

export default Navbar