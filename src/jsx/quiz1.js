import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

//1.
const element1 = <h1>안녕하세용</h1>
const element2 = <h2>성찬 보고싶다</h2>

//2.
let number1 = 2
let text ="반갑습니다"

const e1 = <p>안녕하세영{number1}</p>
const e2 = <h2>안녕하세요{text}</h2>

//3.
let number2 =2 //홀수를 입력하면 아무것도 뜨지 않는다, 짝수를 입력하면 뜬다.
function isEven(num) {return num % 2 ===0 }

const riize = [
    {name: "원빈", isKorean: true},
    {name: "Anton", isKorean: false},
    {name: "성찬", isKorean: true},
    {name: "쇼타로", isKorean: false},
    {name: "은석", isKorean: true},
    {name: "소희", isKorean: true}
]

const riizeList = <ul>
    {riize.name }
</ul>

root.render(<div>
    {element1}
    {element2}
    {e1}
    {e2}
    {
        isEven(number2) && <h1>짝수를 사용할 수 없습니다</h1>
    }
    { 
        isEven(number2) ? <h1>짝수</h1> :<h1>홀수</h1>

    }


    
</div>)