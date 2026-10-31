import { useContext } from 'react'
import Model from './components/Model'
import Navbar from './components/Navbar';
import ColumnView from './components/ColumnView';
import ListView from './components/ListView';
import { context } from './context/myContext';

const App = () => {  

  let {isModelOpen, isListView} = useContext(context)

  return (
    <main className='h-screen relative'>
        {isModelOpen && <Model />}
        <Navbar />

        {isListView ? <ListView /> : <ColumnView />}

    </main>
  )
}

export default App