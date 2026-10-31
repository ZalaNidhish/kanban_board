import { useContext } from 'react'
import { context } from '../context/MyContext'
import Toggle from './Toggle'

const Navbar = () => {

    const {setIsModelOpen, setSearch, setFilter, filter, priority, setPriority} = useContext(context)

  return (
        <nav className='p-4 flex flex-col items-center justify-center gap-4'>
          <div className='flex flex-col xl:flex-row justify-between items-center w-full gap-4 xl:gap-0'>
            <h1 className='text-2xl uppercase text-orange-500'>Kanban Board</h1>
            <div className='flex items-center justify-center w-full xl:w-auto'>
              <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search Task' className='w-full sm:w-70 border px-4 py-1 rounded-2xl'/>
            </div>
            <div className='grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 text-center gap-2 h-fit w-full sm:w-auto'>
                <span onClick={()=>setFilter("all")} className={`cursor-pointer rounded-2xl ${filter && filter=="all" ? "bg-orange-900" : "bg-orange-500"} text-white text-sm px-2 py-1`}>All Tasks</span>
                <span onClick={()=>setFilter("todo")} className={`cursor-pointer rounded-2xl ${filter && filter=="todo" ? "bg-orange-900" : "bg-orange-500"} text-white text-sm px-2 py-1`}>Todo Tasks</span>
                <span onClick={()=>setFilter("progress")} className={`cursor-pointer rounded-2xl ${filter && filter=="progress" ? "bg-orange-900" : "bg-orange-500"} text-white text-sm px-2 py-1`}>In Progress Tasks</span>
                <span onClick={()=>setFilter("completed")} className={`cursor-pointer rounded-2xl ${filter && filter=="completed" ? "bg-orange-900" : "bg-orange-500"} text-white text-sm px-2 py-1`}>Completed Tasks</span>
                <span onClick={()=>setPriority("all")} className={`cursor-pointer rounded-2xl ${priority && priority=="all" ? "bg-orange-900" : "bg-orange-500"} text-white text-sm px-2 py-1`}>All Priority</span>
                <span onClick={()=>setPriority("low")} className={`cursor-pointer rounded-2xl ${priority && priority=="low" ? "bg-orange-900" : "bg-orange-500"} text-white text-sm px-2 py-1`}>Low Priority</span>
                <span onClick={()=>setPriority("moderate")} className={`cursor-pointer rounded-2xl ${priority && priority=="moderate" ? "bg-orange-900" : "bg-orange-500"} text-white text-sm px-2 py-1`}>Moderate Priority</span>
                <span onClick={()=>setPriority("high")} className={`cursor-pointer rounded-2xl ${priority && priority=="high" ? "bg-orange-900" : "bg-orange-500"} text-white text-sm px-2 py-1`}>High Priority</span>
            </div>
            <div className='flex justify-center xl:justify-end w-full xl:w-auto'>
              <button onClick={()=>setIsModelOpen(true)} className='w-fit px-4 py-2 bg-orange-500 text-white rounded-3xl cursor-pointer'>Add Task</button>
            </div>
          </div>
          <Toggle />
        </nav>
  )
}

export default Navbar