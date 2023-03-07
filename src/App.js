import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);
const showAlert =(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setAlert(null);
}  , 1500
);
}


const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    document.body.style.color = 'white';
    showAlert('Dark mode has been enabled','success');
    
    setInterval(()=>{
      document.title = 'Install TextUtils'
         }, 1500);
        }
         else{
  setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert('Light mode has been enabled','success');


}}
  return(
    <React.Fragment>   
          <BrowserRouter>                              
<Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
<div  style={{height:"3.5em"}}>

<Alert      alert={alert}    />
</div>
<div className="container my-3">
<Routes>
<Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove
Extra Spaces" mode={mode} showAlert={showAlert} />
} />               
<Route exact path="/about" element={<About mode={mode}/>} />

</Routes>
</div>
</BrowserRouter> 
  </React.Fragment>
  
  )

}
export default App;
