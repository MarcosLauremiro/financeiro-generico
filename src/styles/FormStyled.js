import styled from "styled-components";

export const FormStyled = styled.form`
    width: 20rem;
    max-width: 20rem;
    height: 25.625rem;
    max-height: 25.625rem;

    border: 2px solid var(--color-grey-2);

    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .descricao{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .valor-form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .tipo_valor{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .button_submit{
        
    }
    .input_padding{
        padding: 0.8rem;
    }
`