import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


function Calculator ({num1, op, num2}) {
    let result = 0;

    if (op == "+") {
        result = num1 + num2
    } else if (op == "-") {
        result = num1 - num2;
    }

    if(num1 === null || num1 ===undefined 
        ||num2 === null || num2 ===undefined){
            return <div>num1과 num2 가 없습니다</div>
    }
    if(result === null){
        return <div>계산을 할 수 없습니다. 제대로된 연산다를 입력하세요</div>
    }

    return (
        <h1>{num1} {op} {num2} = {result}</h1>
    )
}

root.render(<div>
    <Calculator num1={1} num2={2} op="+" />
    <Calculator num1={1} num2={2} op="-" />
</div>
)
