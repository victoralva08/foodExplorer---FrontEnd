import styles from 'styled-components'

export const Container = styles.div`

    display: flex;
    align-items: center;    

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.NOT_NEW};
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.NOT_NEW}` : "none"};
    border-radius: 12px;
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.INPUT_TEXT : theme.COLORS.TEXT};

    
    > button {

        border: none;
        background: none;
        margin: 0.3125em 0.625em 0 0;
        
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.TEXT}; 
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.INPUT_TEXT}; 
    }

    &:focus-within {
        outline: 1px solid ${({ theme }) => theme.COLORS.INPUT_TEXT};
    }

    > input {
       
        padding: 0.5em 0.75em;
        font-size: 1em;
  
        width: 85px;

        @media (max-width: 20em) {
            width: 5.31em;
        }

        color: ${({ theme }) => theme.COLORS.TEXT};
        background: transparent;
        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.INPUT_TEXT};
        }
    }
`