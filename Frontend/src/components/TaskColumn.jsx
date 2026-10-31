import React, { useContext, useState } from 'react'
import { context } from '../context/myContext';
import { useTask } from '../hooks/TaskHook';

const TaskColumn = ({color, children, status}) => {

    const {updateTaskStatus} = useTask()
    const [isDragEnter, setIsDragEnter] = useState(false)

    const colorVariants = {
        blue: {
            bgLight: 'bg-blue-500/40',
            bgSolid: 'bg-blue-500'
        },
        green: {
            bgLight: 'bg-green-500/40',
            bgSolid: 'bg-green-500'
        },
        amber: {
            bgLight: 'bg-amber-500/40',
            bgSolid: 'bg-amber-500'
        }
    };

    // 2. Safely look up the classes in your component
    const variants = colorVariants[color] || colorVariants.blue; // Fallback to blue if undefined

  return (
    <div 
        onDragOver={(e)=>e.preventDefault()}
        onDragEnter={()=>setIsDragEnter(true)}
        onDragLeave={()=>setIsDragEnter(false)}
        onDrop={()=>{
            setIsDragEnter(false)
            updateTaskStatus(status)
        }}
        className={`col 
            ${variants.bgLight} border-2 
            ${isDragEnter 
            ? `border-dashed border-black scale-[1.01] transition-all` 
            : 'border-transparent' } 
            w-full h-full rounded-lg p-4 flex flex-col gap-2 relative pt-10`
        }
    >
        <div className={`text-center w-full text-white ${variants.bgSolid} absolute top-0 left-0 uppercase`}>{status}</div>
        <div className="listTasks flex flex-col gap-2 h-full w-full overflow-y-scroll scrollbar-none scroll-smooth">
            {children}
        </div>
    </div>
)
}

export default TaskColumn