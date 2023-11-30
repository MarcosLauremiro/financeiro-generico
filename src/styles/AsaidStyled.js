import styled from "styled-components";

export const AsideStaled = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .Valor-total__container{
        display: grid;
        grid-template-columns: 2fr 1fr;
        justify-content:space-between;

        gap: 5rem;
        
        border: 1px solid var(--color-grey-2);
        border-radius: 6px;

        padding: 1rem;
    }
    .Valor-total__container > .title_value{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        width: 140%;
    }
    .valor-total{
        width: 100px;

        color: var(--color-primary);

        font-weight: bold;
    }
`