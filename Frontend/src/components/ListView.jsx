import React, { useContext } from 'react'
import { context } from '../context/MyContext'
import TaskCard from './TaskCard'

const ListView = () => {
  
    const {displayedTasks} = useContext(context)

    return (

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full p-4 gap-4'>
            {displayedTasks.length>0 ? displayedTasks.map(t=>{
                return <TaskCard key={t.id} color={t.status} task={t}/>
            }) : <h1 className='text-2xl'>No Tasks Found</h1>
            }
        </div>

    )
}

export default ListView