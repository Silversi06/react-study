import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function TodoAdder({handleTodoAdd}){
    const [input, setInput] = useState("");
    const handleOnChange = (e) => setInput(e.target.value)

    return (
        <div>
            <input type = "text" value={input} onChange={handleOnChange}/>
            <button onClick={() => {
                if(!(input.trim().length >0)){
                    alert("정상적으로 입력해주세요");
                }else{
                    handleTodoAdd({completed: false, text: input})
                    setInput("")
                }
                }} >추가</button>
        </div>
    )
}

function TodoItem({todo}){
    
    return <li>{todo.text}  <button>X</button></li>
}

function TodoList({todos}){
    return <ul>
        {
            todos.map(item => {
                return <TodoItem todo={item} />
            })
        }
    </ul>
}

//화면에 "TodoApp" 표시되게 컴포넌트 정의
function TodoApp(props){
    const [todos, setTodos] = useState([
        {complete: false, text:"리액트 공부하기"},
        {complete:true, text:"스프링 공부하기"},
    ])

    //handleTodoAdd 함수를 정의하고, 새로운 todo 객체를 받아서 todos 에 추가할 수 있도록 하기
    //(setTodos를 써야할 것이고 concat 도 써야할 것)
    const handleTodoAdd = todo => setTodos(todos => todos.concat(todo));

    //hangleTodoRemove 함수 추가, 그 함수에는 제거할 위치를 주면 해당 위치에 있는 할 일 제거
    //filter써야 되고, filter((item, index) => ...)


    return(<div>
        <ul>
            {
                todos.map((todos)=> {
                    return <li>{todos.text}</li>
                })
            }     
        </ul>
        <TodoList todos={todos} />
        <TodoAdder handleTodoAdd={handleTodoAdd} />
    </div>
    )
}
root.render(<TodoApp />)
