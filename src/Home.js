import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';
const Home=()=>{
  //  const [color, setColor] = useState("green");
    const [color, changeColor] = useState("#282c34");
    return (
        <div className="divy">
            <h1 className="App">WELCOME ALL!!</h1>
            <br/>
          <Timer/>
            <br/>
            <h2>Color Name : {color}</h2>
            <button class="btn btn-outline-primary my-2 my-sm-0 btn-lg" onClick={()=> changeColor("blue")}>Bule</button><br/><br/>
        
            <button class="btn btn-outline-success my-2 my-sm-0 btn-lg" onClick={()=>changeColor("green")}>Green</button><br/><br/>
            <button class="btn btn-outline-danger my-2 my-sm-0 btn-lg" onClick={()=>changeColor("red")}>Red</button>
        </div>
    );
}

export default Home;