//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./component/App.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application

let segundos = 0;
let direction = true;
let intervalo;
let app = document.getElementById('app');
let root = ReactDOM.createRoot(app)


let renderSecondsCounter = () => {

    direction === true ? segundos++ : segundos --;

    let goalInput = document.querySelector("#goal");
    if (goalInput && goalInput.value == segundos) {
        alert(`It's time (${segundos})`)
    }

    if(segundos<0){
        segundos = 0
        clearInterval(intervalo)
    }

    // if(segundos == document.querySelector("#goal").innerHTML){ alert(`It's time! (${segundos})`)};
    
// ReactDOM.createRoot(app).render(intervalo);
root.render(<>
        <div className="container my-5">
		    <SecondsCounter count={segundos}/>
            <div className="container my-5" >
            
            <label htmlFor="startFrom">Start from</label>
            <input id="startFrom" name="startFrom" type="number" onChange={
                    (e) => {
                        segundos = e.target.value ? e.target.value : 0;
                        e.target.value;
                    }
                }>
                </input>

                <label htmlFor="goal">Goal</label>
                <input id="goal" type="number"></input></div>


            <div className="container my-5" >
                <button onClick={
                    () => {
                        clearInterval(intervalo)
                        segundos = document.querySelector("#startFrom").value;
                        direction = true;
                            intervalo = setInterval(renderSecondsCounter,1000)
                    }
                } className="btn btn-primary mx-1">reset</button>
                <button onClick={
                    () => {
                        clearInterval(intervalo)
                            intervalo = setInterval(renderSecondsCounter,1000)
                    }
                } className="btn btn-success mx-1">resume</button>
                <button onClick={
                    () => {
                        clearInterval(intervalo)
                    }
                } className="btn btn-danger mx-1">stop</button>
                <button onClick={
                    () => {
                        direction = !direction;
                    }
                } className="btn btn-warning mx-1">{direction ? "backward" : "forward"}</button>
            </div>
        </div></>)

}


intervalo = setInterval(renderSecondsCounter,1000);

