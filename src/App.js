import React, {useState} from 'react'
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark Mode has been enabled", "sucess");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Dark Mode has been disabled", "warning");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  return (
    <>
    <Router>
      <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element = {<TextForm showalert={showAlert} heading="Enter the text to analyize"/>}/>
          <Route exact path="/about" element = {<About aboutHeading="About Us" mode={mode} />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
