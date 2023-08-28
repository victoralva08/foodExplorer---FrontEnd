import styles from 'styled-components'

export const Container = styles.div`

    display: flex;
    flex-direction: column;
    gap: 0.5em;

 
    width: 100%;

    > label {
        color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };
        font-weight: 300;
    }

    textarea {

        font-family: Roboto, sans-serif;
        font-size: 1em;

        width: 100%;
        height: 172px;

        background-color: ${({ theme }) => theme.COLORS.INPUT };
        color: ${({ theme }) => theme.COLORS.TEXT};

        border: none;
        resize: none;

        border-radius: 0.625em;
        padding: 1em;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.INPUT_TEXT};
        }

        &:focus {
            outline: 0.062em solid ${({ theme }) => theme.COLORS.INPUT_TEXT};
        }
    }



`