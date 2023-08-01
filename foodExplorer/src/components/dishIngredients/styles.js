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
        margin: 5px 10px 0 0;
        
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.TEXT}; 
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.INPUT_TEXT}; 
    }

    > input {
       
        padding: 8px 12px;
        font-size: 16px;
  
        width: 85px;

        @media (max-width: 320px) {
            width: 85px;
        }

        color: ${({ theme }) => theme.COLORS.TEXT};
        background: transparent;
        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.INPUT_TEXT};
        }
    }
`