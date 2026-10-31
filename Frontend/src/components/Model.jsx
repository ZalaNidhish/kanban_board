import { useContext } from 'react'
import { X, ChevronDown, Calendar, Type, FileText, AlertCircle } from 'lucide-react';
import { context } from '../context/MyContext';
import { useTask } from '../hooks/TaskHook';

const Model = () => {



  let {setIsModelOpen, updateTask, setUpdateTask} = useContext(context)
  const {register, handleSubmit, addTask, errors, saveTaskChanges} = useTask()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-md max-h-full overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 shadow-xl font-sans animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-zinc-800">{updateTask ? "Update Task" : "Create New Task"}</h2>
          <button 
            type="button" 
            onClick={()=>{setUpdateTask(null); setIsModelOpen(false)}}
            className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <form className="flex flex-col gap-4" onSubmit={updateTask ? handleSubmit(saveTaskChanges) : handleSubmit(addTask)}>
          
          {/* Task Title */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Task Title</label>
            <div className="relative">
              <Type className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input 
                {...register('title', {
                  required: "Title is required"
                })}
                defaultValue={updateTask ? updateTask.title : ""}
                type="text" 
                placeholder="e.g., Design user dashboard" 
                className="w-full rounded-lg border border-zinc-300 bg-white pl-10 pr-4 py-2.5 text-sm text-zinc-800 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
              />
            </div>
            {errors.title && <p className='text-red-500 text-sm'>{errors.title.message}</p>}
          </div>
          
          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Task Description</label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <textarea 
                {...register('description', {
                  required: "Description is required"
                })}
                defaultValue={updateTask ? updateTask.description : ""}
                placeholder="Describe the objective and deliverables..." 
                rows="4"
                className="w-full resize-y rounded-lg border border-zinc-300 bg-white pl-10 pr-4 py-2.5 text-sm text-zinc-800 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10"
              ></textarea>
            {errors.description && <p className='text-red-500 text-sm'>{errors.description.message}</p>}
            </div>
          </div>
          
          {/* Row Container for Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Priority Dropdown */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Priority</label>
              <div className="relative">
                <AlertCircle className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <select 
                  defaultValue={updateTask ? updateTask.priority : "low"}
                  {...register("priority")}
                  name="priority" 
                  className="w-full appearance-none rounded-lg border border-zinc-300 bg-white pl-10 pr-10 py-2.5 text-sm text-zinc-800 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 cursor-pointer"
                >
                  <option value="low">Low Priority</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High Priority</option>
                </select>
                {errors.priority && <p className='text-red-500 text-sm'>{errors.priority.message}</p>}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Status</label>
              <div className="relative">
                <AlertCircle className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <select 
                  defaultValue={updateTask ? updateTask.status : "todo"}
                  {...register("status")}
                  name="status" 
                  className="w-full appearance-none rounded-lg border border-zinc-300 bg-white pl-10 pr-10 py-2.5 text-sm text-zinc-800 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 cursor-pointer"
                >
                  <option value="todo">Todo</option>
                  <option value="progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                {errors.status && <p className='text-red-500 text-sm'>{errors.status.message}</p>}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
            
            {/* Date Picker */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Due Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                <input 
                  {...register("dueDate", {
                    required: "Due Date is required"
                  })}
                  type="date" 
                  defaultValue={updateTask ? updateTask.dueDate : ""}
                  className="w-full rounded-lg border border-zinc-300 bg-white pl-10 pr-4 py-2.5 text-sm text-zinc-800 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 cursor-pointer [scheme:light]"
                />
                {errors.dueDate && <p className='text-red-500 text-sm'>{errors.dueDate.message}</p>}
              </div>
            </div>
            
          </div>

          {/* Form Actions */}
          <div className="mt-2 flex items-center justify-end gap-3">
            <button 
              type="button" 
              onClick={()=>{setUpdateTask(null); setIsModelOpen(false)}}
              className="rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:bg-zinc-50 active:bg-zinc-100"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
            >
              {updateTask ? "Save Task" :"Add Task"}
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Model