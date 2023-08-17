import styles from 'styled-components'

export const MainContent = styles.div`

    @keyframes topdown{
        0%{
            transform: translateY(-500px);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes downtop{
        0%{
            transform: translateY(500px);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes right-left{
        0%{
            transform: translateX(500px);
        }

        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes left-right{
        0%{
            transform: translateX(-500px);
        }

        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }


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

    .interface-title{
        opacity: 0;
        animation: topdown 500ms 100ms forwards;
    }

    .input-wrapper-row0 {  

        display: flex;
        flex-direction: column;
        gap: 32px;

        .file-imageInput-wrapper {

            opacity: 0;
            animation: topdown 500ms 300ms forwards;
            
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

                &:focus-within {
                    outline: 1px solid ${({ theme }) => theme.COLORS.INPUT_TEXT};
                }

                input {
                    position: absolute;
                    width: 0px;
                    opacity: 0;
                }

                svg {
                    height: 30px;
                    width: 30px;
                }
            }
        }

        .name-input {
            opacity: 0;
            animation: topdown 500ms 500ms forwards;
        }
        
        .category-input {
            opacity: 0;
            animation: topdown 500ms 600ms forwards;
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

        .price-input {
            opacity: 0;
            animation: right-left 500ms 600ms forwards;
        }

    }  

    .description-input {
        opacity: 0;
        animation: downtop 500ms 600ms forwards;
    }

    .buttons {

        margin-top: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;

        @media (min-width: 1024px) {

            margin-top: 60px;

        }

    }

    .delete-dish-button {

        opacity: 0;
        animation: downtop 500ms 600ms forwards;

        background-color: ${ ({theme}) => theme.COLORS.INPUT };      
        width: 100%;

        @media (min-width: 1024px) {

            width: 120px;
            position: absolute;
            right: 270px;

        }

    }

    .create-dish-button {

        opacity: 0;
        animation: downtop 500ms 600ms forwards;

        background-color: ${ ({theme}) => theme.COLORS.PINK };      
        width: 100%;

        @media (min-width: 1024px) {

            width: 120px;
            position: absolute;
            right: 120px;

        }
        
    }

`

export const Ingredients = styles.div`

    opacity: 0;
    animation: left-right 500ms 600ms forwards;

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