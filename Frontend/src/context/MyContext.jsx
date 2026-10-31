import { createContext, useEffect, useState } from "react";
export const context = createContext();

const MyContext = ({children}) => {

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")
    const [tasks, setTasks] = useState(() => {
      const savedData = localStorage.getItem("kanban_board_tasks");
      return savedData ? JSON.parse(savedData).filter(t => t != null) : [];
  });
    
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [targetTask, setTargetTask] = useState(null)
    const [updateTask, setUpdateTask] = useState(null)
    
    const [isListView, setIsListView] = useState(false)

    useEffect(()=>{
      if(search || filter!=="all"){
        setIsListView(true)
      }else{
        setIsListView(false)
      }
    }, [search, filter])

    const displayedTasks = tasks.filter((task) => {
        if (!task) return false;

        const taskTitle = (task.title || "").toLowerCase();
        const searchString = (search || "").toLowerCase().trim();
        const hasSearch = searchString !== "";

        if (filter === "all") {
            if (hasSearch) {
                return taskTitle.includes(searchString); 
            }
            return true; 
        } 
        
        else {
            if (hasSearch) {
                return task.status === filter && taskTitle.includes(searchString);
            }
            return task.status === filter; 
        }
    });

    const todo_tasks = displayedTasks.filter(task => task != null && task.status === "todo");
    const progress_tasks = displayedTasks.filter(task => task != null && task.status === "progress");
    const completed_tasks = displayedTasks.filter(task => task != null && task.status === "completed");


  return <context.Provider value={{tasks, setTasks, isModelOpen, setIsModelOpen, isListView, setIsListView, targetTask, setTargetTask, updateTask, setUpdateTask, todo_tasks, progress_tasks, completed_tasks, search, setSearch, setFilter, filter, displayedTasks}}>
    {children}
  </context.Provider>
}

export default MyContext