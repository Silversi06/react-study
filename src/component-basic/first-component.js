import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById
("root"))

function FirstComponent() {
    return <div>My First Component</div>
}
function Hello(){
    return <div>Hello</div>
}
function World(){
    return <div>World</div>
}
root.render(
    <div>
        <FirstComponent />
        <Hello />
        <World />
    </div>
)