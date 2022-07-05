
import { useState } from 'react';
import './App.css';
function App() {
  const[dicenum, setDiceNum] = useState(6)
  const refreshdice =()=>{
    
    const randnum = Math.floor(Math.random()*6) +1
    setDiceNum(randnum)
  }
  return (
    <>
     {/* <img  className ='image'src= {first} /> */}

     <div className='main'>
    <img className='image' src={require(`./images/${dicenum}.png`)}></img>
      <button onClick = {()=> refreshdice()} className='button'> Roll</button>
      </div>
      </>
   
  );
}

export default App;
