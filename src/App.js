import React,{useState} from 'react'
import Button from "./Components/Button";
import './App.css';

function App() {
    // window.location.reload(false);
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    
    let firstNo=(e)=>{
        let no1 = e.target.value
        setFirst(no1)
    }
    
    let secondNo=(e)=>{
        let no2 = e.target.value
        setSecond(no2)
    }

  return(
    <div className="main-app">
      <div className="app-title">
        <h1>React Calculator</h1>
      </div>
      
      <form className='form-content'>
        <label>1st Number : </label>
        <input type="text" name="no1" placeholder="Enter 1st Number" onChange={firstNo}/>   
        
        <br></br>
        
        <label>2nd Number : </label>
        <input type="text" name="no2" placeholder="Enter 2nd Number" onChange={secondNo}/>
        
        <br></br>
        
        <Button one={first} two={second}></Button>
      </form>

    </div>
  )
}

export default App;

