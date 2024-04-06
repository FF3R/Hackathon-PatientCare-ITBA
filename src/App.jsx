import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SidebarNavigation from './components/sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SidebarNavigation/>
        
      </div>
      
    </>
  )
}

export default App
