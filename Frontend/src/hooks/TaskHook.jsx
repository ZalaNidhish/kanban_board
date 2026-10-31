import { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { context } from '../context/MyContext'

export const useTask = ()=>{
    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    const {setTasks, tasks, targetTask, setIsModelOpen, updateTask, setUpdateTask} = useContext(context)

    const addTask = (task)=>{
        const tasks = JSON.parse(localStorage.getItem("kanban_board_tasks")) || []
        const newTask = {
            id: `task-${Date.now()}-${Math.floor(Math.random()*100)}`,
            title: task.title,
            description: task.description,
            priority: task.priority,
            dueDate: task.dueDate,
            status: task.status || "todo"
        }
        setIsModelOpen(false)
        const updatedTasks = [...tasks.filter(t => t != null), newTask];
        setTasks(updatedTasks)
        localStorage.setItem("kanban_board_tasks", JSON.stringify(updatedTasks))
        reset()

    }

    const updateTaskStatus = (status)=>{
        const updatedTasks = tasks.map(t=>{
            if(t.id == targetTask.id){
                return {...t, status}
            }
            else{
                return t
            }
        })
        setTasks(updatedTasks)
        localStorage.setItem("kanban_board_tasks", JSON.stringify(updatedTasks))
    }

    const deleteTask = (id)=>{
        if(confirm("Confirm Deletion ?")){
            const updatedTasks = tasks.filter(t=> t!=null && t.id!==id)
            setTasks(updatedTasks)
            localStorage.setItem("kanban_board_tasks", JSON.stringify(updatedTasks) || [])
        }
    }

    const openModelForUpdate = (task)=>{
        setUpdateTask(task)
        setIsModelOpen(true)
    }

    const saveTaskChanges = (task)=>{
        const newTask = {...task, id: updateTask.id}

        const updatedTasksArr = tasks.map(t=>{
            if(t && t.id == updateTask.id) return newTask
            else return t;
        })

        localStorage.setItem("kanban_board_tasks", JSON.stringify(updatedTasksArr))
        setTasks(updatedTasksArr)
        setUpdateTask(null)
        setIsModelOpen(false)
        reset()
        
    }

    return {register, errors, handleSubmit, addTask, updateTaskStatus, deleteTask, openModelForUpdate, saveTaskChanges}
}



