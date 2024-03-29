import styled from "styled-components";

export const H1 = styled.h1`
    font-size: clamp(.75em, 1vw, 2em);
    opacity: .8;
    letter-spacing: 3px;
    font-weight: 500;
    color:  rgb(244,149,27);
    
    span{
        font-size: clamp(.8em, .8vw, 2em);
        font-weight: 400;
        color:  rgb(17, 12, 7);
    }
    `

export const HeaderH1 = styled.h1`
    font-size: clamp(1.5em, 2vw, 2em);
    font-weight: 300;
    opacity: .9;
    color:  rgb(244,149,27);
`

export const Button = styled.button`
    
    font-size: 14px;
`