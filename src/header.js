import React from "react";
import styled from "styled-components";
import {HotPinkDiv} from "./body"

function Header(props){
    return (
     <HeadStyle>
        <TitleStyle>{props.title}</TitleStyle>
        <div>{props.date}</div>
     </HeadStyle>
    )
}

//styled components:
const HeadStyle = styled(HotPinkDiv)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    padding: 5px;
    margin: 5px;
    border: 5px dotted hotpink;
`

const TitleStyle = styled.h1`
    border: 2px solid hotpink;
    border-radius: 5px;
    padding: 10px;
    color: hotpink;
`

export default Header;


