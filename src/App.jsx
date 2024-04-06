import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SidebarNavigation from './components/sidebar';
import Formulario from './components/formulario.jsx';


function App() {
 const [count, setCount] = useState(0);

 return (
  
    <>
      
     
        <Router>
          <div className='container2'>
          <SidebarNavigation />
          <Routes>
            <Route path="/formulario" element={<Formulario />} />
          </Routes>
          </div>
          </Router>
    
    </>
    
 );
}

export default App;

