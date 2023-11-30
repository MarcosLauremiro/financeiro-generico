import styled, { createGlobalStyle } from "styled-components";

export const Resetstaled = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button{
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    ul, ol{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    input, textarea, select{
        border: none;
        background-color: transparent;
    }
`