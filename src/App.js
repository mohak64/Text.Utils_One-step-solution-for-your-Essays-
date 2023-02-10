
import { useState } from 'react'; //imrs
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode,setMode] = useState('light'); // wheather dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return ( //  jsx for-htmlFor, class- className, tab-tabIndex, <>- jsx fragment, js likhne ke liye use {}
    <> 
      <Navbar title="TEXT-UTILS" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      {/*<About/>*/}
      <TextForm heading="Enter the Text to analyze " mode={mode}/>
      
      </div>
      
    </>
    
  );  
}


export default App;
