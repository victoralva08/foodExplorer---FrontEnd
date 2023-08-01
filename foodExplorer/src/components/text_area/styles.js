import styles from 'styled-components'

export const Container = styles.div`

    display: flex;
    flex-direction: column;
    gap: 8px;

 
    width: 100%;

    > label {
        color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };
    }

    textarea {

        font-family: Roboto, sans-serif;
        font-size: 16px;

        width: 100%;
        height: 172px;

        background-color: ${({ theme }) => theme.COLORS.INPUT };
        color: ${({ theme }) => theme.COLORS.TEXT};

        border: none;
        resize: none;

        border-radius: 10px;
        padding: 16px;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.INPUT_TEXT};
        }

    }



`