import styled from "styled-components";

export const StyledNavigator = styled.div`

    ul {
        list-style: none;
        display: flex;
    }
    
    a {
        color: rgba(0, 0, 0, 0.7);
        border-radius: 8px;
        text-decoration: none;
        padding: 5px 8px;
        border: 1px solid  rgb(244,149,27);
        font-weight: 400;
        transition: .3s ease;

        &:hover{
            background-color: rgba(244, 150, 27, 0.78);
            color: #fff;
        }
    }
`