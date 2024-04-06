import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SidebarNavigation from './components/sidebar';
import Formulario from './components/formulario.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import RegisterMedic from './components/registerMedic.jsx';

function App() {
 const [count, setCount] = useState(0);

 return (
  
    <>
      
     
      <Router>
      <Routes>
        <Route path="/home" element={
          <div className='container2'>
            <SidebarNavigation />
            <Routes>
              <Route path="formulario" element={<Formulario />} />
            </Routes>
          </div>
        } />
        <Route path="login" element={<Login />} />
        <Route path='register' element={<Register />}></Route>
        <Route path='registerMedic' element={< RegisterMedic />}> </Route>
      </Routes>
    </Router>
    
    </>
    
 );
}

export default App;

