import React from 'react'
import '../App.css'
import { useState } from 'react';

const Greeting = () => {
  // Increment by One
  const[data,updatedData]=useState(0);
 function incrFun(){
  updatedData(data+1);
 }
//reset value

function resetFun(){
  updatedData(0)
}
  const name = "alamdarShah";
  // const currDate= new Date();
  //clock useState
  const time=new Date().toLocaleTimeString();
  const [setTime,updatedTime]=useState(time);
  function updataTimeFun(){
    let ctime=new Date().toLocaleTimeString();
    updatedTime(ctime)
  }
  setInterval(updataTimeFun,1000);

  //Greeting Timing 
  const currDate = new Date().getHours();
  const img = "";
  let greeting = "";
  let cssSty = {};
  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
    cssSty.color = "green"
  } else if (currDate >= 12 && currDate < 20) {
    greeting = "its Evening";
    cssSty.color = "red"
  } else {
    greeting = "Good Night";
    cssSty.color = "orange"
  }
  // input field
  function inputFun(e){
    console.log(e.target.value);
    setName(e.target.value);
  }
  const [inputName,setName]=useState('');
  return (
    <div>
      <center>
        <h1 className='heading'>This is my first {name} code in React Js</h1>
        <p>Happy to learn react js because it is demanding skill </p>
      </center>
      <ol>
        <li>alamdar</li>
        <li>mujtaba</li>
        <li>mueez</li>
        <li>hadi</li>
        <li>danish</li>
      </ol>
      <h4>Hello Dear!<span style={{ cssSty }}>{greeting} </span></h4>
      <img src={img} alt='image ' />
      {/* // third Task */}

      <h1>{data}</h1>
      <button onClick={incrFun}>Increment</button>
      <button onClick={resetFun}>Reset</button>
      {/* <Button onClick={incrFun} title="Increment"/> */}

      {/* clock time is here */}
      <h1>{setTime}</h1>
      <h2>Hello! {inputName} </h2>
      <input type='text' placeholder='Enter your Name' onChange={inputFun} />
    </div>

  )
}
export default Greeting
