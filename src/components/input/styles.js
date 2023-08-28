import styles from 'styled-components'

export const Container = styles.div`

    display: flex;
    flex-direction: column;
    gap: 0.5emm;
    width: 100%;
   

    > label {

        display: flex;
        flex-direction: column;
        gap: 0.437em;

        color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };

        .input-wrapper {
           
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 0.937em;
            
            background-color: ${ ({theme}) => theme.COLORS.INPUT };
            border-radius: 0.5em;

            &:focus-within {
                outline: 0.062em solid ${({ theme }) => theme.COLORS.INPUT_TEXT};
            }
            

        }

        > .input-wrapper svg {
            color: ${ ({theme}) => theme.COLORS.INPUT_TEXT };
        }

        > .input-wrapper input { 
            
            background: none;
            width: 100%;

            color: ${ ({theme}) => theme.COLORS.TEXT };
    
            font-family: Roboto, sans-serif;
            font-size: 1em;
    
            padding: 0.875em 0.625em;
            border: none;
    
            &:placeholder {
                color: ${ ({theme}) => theme.COLORS.INPUT_TEXT };
            }

        }

    }

`

