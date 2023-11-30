import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 12vh;

    background-color: var(--color-grey-1);

    box-shadow: 2px 2px 10px var(--color-grey-2);

    div{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.5rem;

        margin: 0 auto;

        max-width: 800px;
        height: 100%;
    }
    .nu{
        color: var(--color-primary);
    }
`