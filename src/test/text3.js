import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function DatePrinter (props){
    const { year, month, day } = useState("");
    
    const date = new Date(year, month - 1, day);
    
    const formattedDate = date.toLocaleDateString();
    
    return (
      <div>
        <p>{formattedDate}</p>
      </div>
    );
  
}

root.render(<DatePrinter />)

export default DatePrinter;