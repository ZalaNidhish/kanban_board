import { useContext } from 'react';
import TaskCard from './TaskCard'
import TaskColumn from './TaskColumn'
import { context } from '../context/myContext';

const ColumnView = () => {

    
  let {todo_tasks, progress_tasks, completed_tasks} = useContext(context)


  const columnsConfig = [
    { title: "TODO", color: "blue", status: "todo", tasks: todo_tasks },
    { title: "IN PROGRESS", color: "amber", status: "progress", tasks: progress_tasks },
    { title: "COMPLETED", color: "green", status: "completed", tasks: completed_tasks },
  ];

  return (
        <div className="grid_space h-full w-full flex gap-4 p-4">
          {
            columnsConfig.map(col=>{
                  return <TaskColumn key={col.status} color={col.color} status={col.status}>
                    {col.tasks.map(task=>{
                      if (!task) return null;
                      return <TaskCard key={task.id} task={task}/>
                    })}
                  </TaskColumn>
            })
          }
        </div>
  )
}

export default ColumnView