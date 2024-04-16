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

function TodoItem({todo, handleTodoRemove, index ,handleTodoStatusToggle}){
    
    return <li> <span onClick={() =>handleTodoStatusToggle(index)}style={todo.completed ? { textDecoration:"line-through" } : null}> {todo.text} </span> <button onClick={() => handleTodoRemove(index)}>X</button></li>
}

function TodoList({todos, handleTodoRemove, handleTodoStatusToggle}){
    return <ul>
        {
            todos.map((todo, index) => {
                return <TodoItem todo={todo}  handleTodoRemove={handleTodoRemove} handleTodoStatusToggle={handleTodoStatusToggle} index={index}/>
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
    const handleTodoRemove = i => setTodos(todos.filter((item,index)=> i !== index))
    //handle TodoStatasToggle를 필수로 만들고 index받아서 map을 해서 해당index에있는 complete 상태를 토글(true=>false, false)
    const handleTodoStatusToggle = i => setTodos(todos.map((item,index)=>{
        if(i === index){
            item = {...item, completed : !item.completed}
        }
        return item
    }))

    return(<div>
        <TodoList todos={todos}  handleTodoRemove={handleTodoRemove} handleTodoStatusToggle={handleTodoStatusToggle}/>
        <TodoAdder handleTodoAdd={handleTodoAdd} />
    </div>
    )
}
root.render(<TodoApp />)
