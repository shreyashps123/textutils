
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert(": Light mode has been enabled","success")
      document.title ='TextUtils-Light ';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert(": Dark mode has been enabled","success")
      document.title ='TextUtils-Dark ';
    }
    
  }
  

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        
          
          

          {/* <Routes>
            
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Text to Analyze" mode={mode}/>} />
            <Route path="/about" element={<About/>} />
          </Routes> */}
          
          
         
      <Textform showAlert={showAlert} heading="Enter Text to Analyze" mode={mode}/>
      </div>
      
    {/* </Router>   */}

    </>
  );
}

export default App;
