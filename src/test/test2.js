import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function SlotMachine({s1, s2, s3}){
    const highlight =s1==="7" && s2==="7"&& s3==="7"
    let congratz = null
    if(s1===s2 && s2 ===s3){
        congratz = "Congratz!!";
    }
    return (
        <div>
            <h1>{s1}{s2}{s3}</h1>
            <h2 style={highlight ? {color:"red"}:null}>{congratz}</h2>
        </div>
    )
}


root.render(<div>
    <SlotMachine s1="X" s2="Y" s3="Z" />
    <SlotMachine s1="X" s2="X" s3="X" />
    <SlotMachine s1="7" s2="7" s3="7" />
    {/* 과일 이모지 : 🍇🍈🍉🍊🍌🍍🍎🍏🍑🍒🍓🍅🍆🌽🍄🌰 */}
    <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
    <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
</div>
)