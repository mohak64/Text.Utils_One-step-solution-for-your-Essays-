
import { useState } from 'react'; //imrs
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


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
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return ( //  jsx for-htmlFor, class- className, tab-tabIndex, <>- jsx fragment, js likhne ke liye use {}
    <> 
      <Navbar title="TEXT-UTILS" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/*<About/>*/}
      <TextForm showAlert={showAlert} heading="Enter the Text to analyze " mode={mode}/>
      
      </div>
      
    </>
    
  );  
}


export default App;
