import React, {useState} from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  function onAdd(){
    const updatedValue = num + 1;
    setNum(updatedValue);
  }

  function onSub(){
    const updatedValue = num - 1;
    setNum(updatedValue);
  }

  return (
    <>
      <button type='submit' onClick={onAdd}>Add</button>
      <button type='submit' onClick={onSub}>Sub</button>
      <p>{num}</p>
    </>
  );
}

export default App;
