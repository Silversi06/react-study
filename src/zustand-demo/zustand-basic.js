import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
// import {useCounterStore }from '../store/useCounterStore'
import useCounterStore from '../store/useCounterStore'
const root = ReactDOM.createRoot(document.getElementById("root"))

function Couter () {

    const count = useCounterStore(state => state.count)

    const increment = useCounterStore((state)=> state.increment)
    const decrement = useCounterStore((state)=> state.increment)
    const set = useCounterStore((state)=> state.increment)
    const add = useCounterStore((state)=> state.increment)

    return <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={()=>set(5)}>set to 5</button>
        <button onClick={()=>add(10)}>add to 10</button>
    </div>


}

function ZustandApp() {
    const count = useCounterStore(state => state.count)

    return <div>
        <h1>{count}</h1>
        <Couter />
    </div>
}

root.render(<ZustandApp />)