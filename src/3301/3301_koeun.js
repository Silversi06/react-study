import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

//1
const Greeting = function({prefix, target}){
    return (
        <p>{prefix}{target}</p>
    )
}

//2
const Reverse = function({str}){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

//3
const Gugudan = ({from, to}) =>{
    let gugudan = 0;
    for(let i =from; i<to; i++){
        for(let j =2; j<9; j++){
            gugudan = i * j;
        }
    }
    return 
}

//4
// const LimitedPuser =function 

root.render(<div>
    <Greeting prefix="Hello " target="Yu Byung Suk" />
    <Reverse str="Hello" />
    <Gugudan from={3} to={5} />
    
</div>)