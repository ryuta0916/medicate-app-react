import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  let totalTime = 7500;
  let breathTime = (totalTime / 5) * 2;
  let holdTime = totalTime / 5;
 const [breathText,setBreathText] = useState("吸って！")
 const [animation,setAnimation] = useState('container');

 const breath = () => {
  setBreathText('吸って！');
  setAnimation('container grow');

  setTimeout(() => {
    setBreathText('止めて！');
    setTimeout(() => {
      setBreathText('吐いて！');
      setAnimation('container shrink');
    }, holdTime);
  }, breathTime);
};

 useEffect(()=>{
  setInterval(breath,totalTime);
  breath();
},[])



 
  return (
     <>
      <h1>瞑想アプリ</h1>
      <div className = {animation}>
      <div class="circle"></div>
      <p className="text">{breathText}</p>

      <div class="pointer-container">
            <div class="pointer"></div>
        </div>
        <div class="outer-circle"></div>
      </div>
      
    </>
  );
}

export default App;
