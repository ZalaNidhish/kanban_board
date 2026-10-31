import { LayoutGrid, List } from 'lucide-react'
import { useContext } from 'react'
import { context } from '../context/myContext'

const Toggle = () => {

    const {isListView, setIsListView} = useContext(context)

    return (
    <div className="flex items-center gap-2 rounded-xl bg-zinc-100 p-1 border border-zinc-200 w-fit select-none">
      {/* Column View Toggle Indicator Button */}
      <button
        type="button"
        onClick={()=>setIsListView(false)}
        className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
          !isListView
            ? 'bg-white text-orange-500 shadow-sm'
            : 'text-zinc-500 hover:text-zinc-800'
        }`}
      >
        <LayoutGrid className="h-4 w-4" />
        <span>Column</span>
      </button>

      {/* List View Toggle Indicator Button */}
      <button
        type="button"
        onClick={()=>setIsListView(true)}
        className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
          isListView
            ? 'bg-white text-orange-500 shadow-sm'
            : 'text-zinc-500 hover:text-zinc-800'
        }`}
      >
        <List className="h-4 w-4" />
        <span>List</span>
      </button>
    </div>
  )
}

export default Toggle