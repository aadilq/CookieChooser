import './App.css';
import cookieImage from './assets/cookie.png';
import { useState } from 'react';




const App = () =>{

  const[count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1)

  const updateCount = () => {
    setCount(count + multiplier);
  }

  const buyDoubleStuffed = () =>{
    if(count >= 10){
      setMultiplier(multiplier * 2)
      setCount(count - 10)
    }

  }

  const buyPartyPack = () =>{
    if(count >= 100){
      setMultiplier(multiplier * 5)
      setCount(count - 100)
    }
  }

  const buyFullFeast = () =>{
    if(count >= 1000){
      setMultiplier(multiplier * 10)
      setCount(count - 1000)
    }
  }

  return(
    <div className='App'>
      <div className = 'header'>
        <h1>Cookie Selector</h1>
        <h2>Count: {count} </h2>
        <img className='Cookie' src={cookieImage} alt = "cookie Image" onClick={updateCount}/>

      </div>
      <div className='container'>
        <div className='upgrade'>
          <h3>Doubled Stuff 🍪</h3>
          <p>2x per Click</p>
          <button onClick={buyDoubleStuffed}>10 Samosas</button>

        </div>
        <div className='upgrade'>
          <h3>Party Pack 🍪</h3>
          <p>5x per Click</p>
          <button onClick={buyPartyPack}>100 Samosas</button>
       </div>
       <div className='upgrade'>
          <h3>Full Feast 🍪</h3>
          <p>10x per Click</p>
          <button onClick={buyFullFeast}>100 Samosas</button>

       </div>
        

      </div>

    </div>
  )
}

export default App; 