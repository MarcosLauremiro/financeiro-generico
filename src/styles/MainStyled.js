import styled from "styled-components";

export const MainStyled = styled.main`
    max-width: 51rem;

    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;

    grid-auto-flow:row;

    margin: 0 auto;

    padding: 1rem;

    margin-top: 2rem;
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
    
    }
`