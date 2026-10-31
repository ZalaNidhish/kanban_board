import { useContext } from "react"
import { context } from "../context/MyContext"
import { useTask } from "../hooks/TaskHook"

const TaskCard = ({task, color="none"}) => {

    const {setTargetTask} = useContext(context)
    const {deleteTask, openModelForUpdate} = useTask()

    const bgColor =  color=="completed" ? "bg-green-500/40" : color=="todo" ? "bg-blue-500/40" : color=="progress" ? "bg-amber-500/40" : "bg-white"

  return (
    <div 
        id={task.id}
        className={`task w-full h-35 p-2 ${bgColor} rounded-lg flex flex-col justify-around`}
        draggable
        onDragStart={()=>setTargetTask(task)}
    >
        <div className='flex justify-between w-full gap-1 mb-2'>
            <button className='py-1 px-2 bg-neutral-500 text-white text-[12px] rounded'>{task.dueDate}</button>
            <button className='py-1 px-2 bg-orange-500 text-white text-[12px] rounded'>{task.priority}</button>
        </div>
            <h2 className='text-lg'>{task.title}</h2>
            <p className='h-15 text-sm'>{task.description}</p>
        <div className='flex justify-end w-full gap-1'>
            <button onClick={()=>openModelForUpdate(task)} className='py-1 px-2 cursor-pointer bg-amber-500 text-white text-[12px] rounded'>Edit</button>
            <button onClick={()=>deleteTask(task.id)} className='py-1 px-2 cursor-pointer bg-red-500 text-white text-[12px] rounded'>Delete</button>
        </div>
    </div>
  )
}

export default TaskCard