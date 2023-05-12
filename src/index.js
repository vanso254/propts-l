import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function MainBody(){
    return(
        <div className="container">
            <h1 className="title">Travel journal</h1>
           <App />
        </div>
    )
}

ReactDOM.render(<MainBody />,document.getElementById("root"))