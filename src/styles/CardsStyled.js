import styled from "styled-components";

export const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;


    ul{
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
    }
    li{
        display: grid;
        grid-template-columns: 5fr 1fr;
        justify-content: space-between;

        background: var(--color-grey-1);

        padding: .8rem;

        border-radius: 8px;
    }
    li > .side_left{
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    li > .side_right{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        align-items: center;

    }
    li > .side_right > button{
        background-color: var(--color-grey-2);
        padding: 0 .5rem; 
        border-radius: 4px;
    }
    .entrada{
        border-left: 3px solid var(--color-secondary);
    }
    .saida{
        border-left: 3px solid var(--color-grey-2 );
    }
`