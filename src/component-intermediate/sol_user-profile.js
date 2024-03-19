import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function UserProfile (props){
    const [userName, setUserName] = useState("John");
    const [userAge, setUserAge] = useState(10);
    const [emailAddress, setUserAddress] = useState("hello@naver.com");

    return (
        <div>
            <h1>{userName}</h1>
            <h1>{userAge}</h1>
            <h1>{emailAddress}</h1>
        </div>
    )

}
root.render(<UserProfile />)