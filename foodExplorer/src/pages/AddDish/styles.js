import styles from 'styled-components'

export const MainContent = styles.div`

    padding: 40px 20px 200px;
    width: 100%;
   
    h1 {
        font-family: Poppins;
        font-weight: 500;

        margin: 24px 0 32px;
    }

    @media (min-width: 1024px) {
        padding: 40px 120px 200px;
    }

    .input-wrapper-row0 {  

        display: flex;
        flex-direction: column;
        gap: 32px;

        .file-imageInput-wrapper {
            
            margin-top: -28px;
            
            h1 {
                color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };
                font-family: Roboto;
                font-size: 16px;
                font-weight: 300;

                margin-bottom: 10px;
            }

            span {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (min-width: 1024px) {
                span {
                    max-width: 200px;
                }
            }
            
            label {

                cursor: pointer;

                display: flex;
                gap: 10px;
                align-items: center;
                justify-content: center;
                padding: 0 15px;


                background-color: ${ ({theme}) => theme.COLORS.INPUT };
                border-radius: 8px;

                font-family: Poppins, sans-serif;
                color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };

                height: 48px;

                input {
                    display: none;
                }

                svg {
                    height: 30px;
                    width: 30px;
                }
            }
        }

        @media (min-width: 1024px) {

        display: grid;
        gap: 30px;
        grid-template-columns: auto 40% 30%;

        }

    }

    .input-wrapper-row1 {
        
        margin-bottom: 32px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        
        @media (min-width: 1024px) {
            
            display: grid;
            gap: 30px;
            align-items: center;
            grid-template-columns: 75% auto;

            margin-bottom: 0px;
        }

    }  


    .create-dish-button {

        background-color: ${ ({theme}) => theme.COLORS.PINK };
        margin-top: 32px;
        margin-bottom: -100px;
        width: 100%;

        @media (min-width: 1024px) {
            width: 120px;
            position: absolute;
            right: 120px;
        }
        
    }

`

export const Ingredients = styles.div`

    margin-bottom: 28px;
    width: 100%;

    h1 {
        color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };
        font-size: 17px;
        font-family: Roboto, sans-serif;
        font-weight: 300;
        margin-bottom: 10px;
    }

    .ingredientsTags {
        display: flex;
        flex-wrap: wrap;
        padding: 5px 10px;
        gap: 15px;
        
        background-color: ${ ({theme}) => theme.COLORS.INPUT };
        border-radius: 8px;
    }

    

`