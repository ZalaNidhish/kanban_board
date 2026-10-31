import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyContext from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
    <MyContext>
        <App />
    </MyContext>
)
