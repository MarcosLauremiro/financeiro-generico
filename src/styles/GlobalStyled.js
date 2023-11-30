import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root{
        //colors
        --color-primary: #fd377e;
	    --color-primary-2: #e34981;
	    --color-secondary: #03b898;
	    --color-grey-4: #212529;
	    --color-grey-3: #343a40;
	    --color-grey-2: #e9ecef;
	    --color-grey-1: #f8f9fa;
    }

    .title-1-style{
        font-size: clamp(1.375rem,2.375rem,2.375rem);
	    font-family: "Nunito";
	    font-weight: 800;
	    font-style: normal;
	    line-height: 3rem;
	    text-decoration: none;
	    text-transform: none;
    }
    .title-2-style{
        font-size: 1.375rem;
	    font-family: "Nunito";
	    font-weight: 700;
	    font-style: normal;
	    line-height: 2.125rem;
	    text-decoration: none;
	    text-transform: none;
    }
    .title-3-style{
        font-size: 1rem;
	    font-family: "Nunito";
	    font-weight: 700;
	    font-style: normal;
	    line-height: 1.875rem;
	    text-decoration: none;
	    text-transform: none;
    }
    .title-4-style{
        font-size: 0.75rem;
        font-family: "Nunito";
        font-weight: 600;
        font-style: normal;
        line-height: 1.625rem;
        text-decoration: none;
        text-transform: none;
    }
    .text-1-style{
        font-size: 1rem;
        font-family: "Nunito";
        font-weight: 400;
        font-style: normal;
        line-height: 1.625rem;
        text-decoration: none;
        text-transform: none;
    }
    .text-2-style{
        font-size: 0.75rem;
        font-family: "Nunito";
        font-weight: 400;
        font-style: normal;
        line-height: 1.375rem;
        text-decoration: none;
        text-transform: none;
    }
    .text-3-style{
        font-size: 0.5rem;
        font-family: "Nunito";
        font-weight: 400;
        font-style: normal;
        line-height: 1.125rem;
        text-decoration: none;
        text-transform: none;
    }
    .text-4-style{
        font-size: 0.5rem;
        font-family: "Nunito";
        font-weight: 700;
        font-style: normal;
        line-height: 1.125rem;
        text-decoration: none;
        text-transform: none;
    }
    .input-1-style{
        background: var(--color-grey-2);

        height: 40px;
    }
    .button-1-style{
        background-color: var(--color-primary);

        width: 100%;
        height: 2.5rem;

        border-radius: 0.5rem;

        color: var(--color-grey-1);
    }
`