import React from "react";
import styled from "styled-components";
import {HotPinkDiv} from "./body"

function Footer(props){
    return (
        <FooterStyle>
            <FooterTxt color='hotpink'>{props.copyright}</FooterTxt>
        </FooterStyle>
    )
}

const FooterStyle = styled(HotPinkDiv)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99%;
    border: 5px dotted hotpink;
`

const FooterTxt = styled.h2`
//interpelation function: 
  ${function(props){
      return `color: ${props.color}`
  }}
`

export default Footer;