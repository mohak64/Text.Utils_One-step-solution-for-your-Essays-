
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode,setMode] = useState('light'); // wheather dark mode is enabled or not

  return ( //  jsx for-htmlFor, class- className, tab-tabIndex, <>- jsx fragment, js likhne ke liye use {}
    <> 
      <Navbar title="TEXT-UTILS" aboutText="About Us" mode={mode}/>
      <div className="container my-3">
      {/*<About/>*/}
      <TextForm heading="Enter the Text to analyze "/>
      
      </div>
      
    </>
    
  );  
}


export default App;
