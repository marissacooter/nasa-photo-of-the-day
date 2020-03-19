import React from "react";
import styled from "styled-components";

function Body(props){
    return (
        <>
            <ImgStyle>
            <ImgPic src = {props.url}></ImgPic>
            </ImgStyle>

            <ExpStyle>
                <p>{props.explanation}</p>
            </ExpStyle>
        </>
    )
}

//styled components:

 export const HotPinkDiv = styled.div`
    background-color: #C8A2C8;
`
const ImgStyle = styled(HotPinkDiv)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    padding: 5px;
    margin: 5px;
    border: 5px dotted hotpink;
`

const ImgPic = styled.img`
    padding: 5px;
    margin: 5px;
    border-radius: 25px;
    border: 5px dotted hotpink;
`

const ExpStyle = styled(HotPinkDiv)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    padding: 5px;
    margin: 5px;
    border: 2px solid hotpink;
    border-radius: 5px;
    color: hotpink;
`

export default Body;