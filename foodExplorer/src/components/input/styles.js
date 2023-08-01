import styles from 'styled-components'

export const Container = styles.div`

    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
   

    > label {

        display: flex;
        flex-direction: column;
        gap: 7px;

        color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };

        .input-wrapper {

            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 15px;
            
            background-color: ${ ({theme}) => theme.COLORS.INPUT };
            border-radius: 8px;
            

        }

        > .input-wrapper svg {
            color: ${ ({theme}) => theme.COLORS.INPUT_TEXT };
        }

        > .input-wrapper input { 
            
            background: none;
            width: 100%;

            color: ${ ({theme}) => theme.COLORS.TEXT };
    
            font-family: Roboto, sans-serif;
            font-size: 16px;
    
            padding: 14px 10px;
            border: none;
    
            &:placeholder {
                color: ${ ({theme}) => theme.COLORS.INPUT_TEXT };
            }

           
            
        }

    }

`

