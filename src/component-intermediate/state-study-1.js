// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function Counter(props) {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("a")
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count+1)}}>증가</button>
            <button onClick={() => {setCount(count-1)}}>감소</button>
            <h1>{text}</h1>
            <button onClick={() => setText(text + "a")}>a 추가</button>
        </div>
    )
}

root.render(<Counter />)