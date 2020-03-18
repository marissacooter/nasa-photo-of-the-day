import React from "react";

function Body(props){
    return (
        <>
            <div>
            <img src = {props.url}></img>
            </div>

            <div>
                <p>{props.explanation}</p>

            </div>
        </>
    )
}

export default Body;