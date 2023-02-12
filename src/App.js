
import { useState } from 'react'; //imrs
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light'); // wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null); //alert ek obkect hai

  const showAlert = (message,type)=>{ //func which help us to show alert msgs
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1980);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
    document.title = 'TextUtils-Home-DarkMode';
    /*  title chamkane ke liyee!!
    setInterval(() => {
      document.title= 'TextUtils is Amazing!!'
    },2000);
    setInterval(() => {
      document.title= 'Install TextUtils Now!!'
    },1500);
    */
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils-Home-LightMode';
    }
  }
  return ( //  jsx for-htmlFor, class- className, tab-tabIndex, <>- jsx fragment, js likhne ke liye use {}
  //complete matching ke liye use exact !!
    <> 
          <BrowserRouter>
          <Navbar title="TEXT-UTILS" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          
          <div className="container">
          <Routes>
          <Route exact path="/" element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>} />
          <Route exact path="/about" element={<About/>} />
          </Routes>
          </div>
          </BrowserRouter>
      
      
    </>
    
  );  
}


export default App;
