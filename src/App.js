
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="TEXT-UTILS" aboutText="About Us"/>
      <div className="container my-3">
      {/*<About/>*/}
      <TextForm heading="Enter the Text to analyze "/>
      
      </div>
      
    </>
    
  );  
}


export default App;
