import styles from 'styled-components'

export const MainContent = styles.div`

    @keyframes topdown{
        0%{
            transform: translateY(-31.25em);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes downtop{
        0%{
            transform: translateY(31.25em);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes right-left{
        0%{
            transform: translateX(31.25em);
        }

        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes left-right{
        0%{
            transform: translateX(-31.25em);
        }

        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }

    padding: 2.5em 1.25em 12.5em;
    width: 100%;

    h1 {
        font-family: Poppins;
        font-weight: 500;

        margin: 1.5em 0 2em;
    }

    @media (min-width: 64em) {
        padding: 2.5em 7.5em 12.5em;
    }

    .interface-title {
        opacity: 0;
        animation: topdown 500ms 100ms forwards;
    }

    .input-wrapper-row0 {  

        display: flex;
        flex-direction: column;
        gap: 2em;

        .file-imageInput-wrapper {

            opacity: 0;
            animation: topdown 500ms 300ms forwards;
            
            margin-top: -1.75em;
            
            h1 {
                color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };
                font-family: Roboto;
                font-size: 1em;
                font-weight: 300;

                margin-bottom: 0.625em;
            }

            span {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (min-width: 64em) {
                span {
                    max-width: 12.5em;
                }
            }
            
            label {

                cursor: pointer;

                display: flex;
                gap: 0.625em;
                align-items: center;
                justify-content: center;
                padding: 0 0.9375em;


                background-color: ${ ({theme}) => theme.COLORS.INPUT };
                border-radius: 0.5em;

                font-family: Poppins, sans-serif;
                color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };

                height: 3em;

                &:focus-within {
                    outline: 0.0625em solid ${({ theme }) => theme.COLORS.INPUT_TEXT};
                }

                input {
                    position: absolute;
                    width: 0;
                    opacity: 0;
                }

                svg {
                    cursor: pointer;
                    height: 1.875em;
                    width: 1.875em;
                }
            }

        }

        .name-input {
            font-weight: 300;
            opacity: 0;
            animation: topdown 500ms 500ms forwards;
        }

        .category-input {
            opacity: 0;
            animation: topdown 500ms 600ms forwards;
        }

        @media (min-width: 64em) {

        display: grid;
        gap: 1.875em;
        grid-template-columns: auto 40% 30%;

        }

    }

    .input-wrapper-row1 {
        
        margin-bottom: 2em;
        display: flex;
        flex-direction: column;
        gap: 0.125em;
        
        @media (min-width: 64em) {
            
            display: grid;
            gap: 1.875em;
            align-items: center;
            grid-template-columns: 75% auto;

            margin-bottom: 0;
        }

        .price-input {
            font-weight: 300;
            opacity: 0;
            animation: right-left 500ms 600ms forwards;
        }

    }  

    .description-input {
        opacity: 0;
        animation: downtop 500ms 600ms forwards;
    }

    .create-dish-button {

        opacity: 0;
        animation: downtop 500ms 600ms forwards;

        background-color: ${ ({theme}) => theme.COLORS.PINK };
        margin-top: 2em;
        margin-bottom: -6.25em;
        width: 100%;

        @media (min-width: 64em) {
            width: 7.5em;
            position: absolute;
            right: 9em;
        }
        
    }
`

export const Ingredients = styles.div`

    opacity: 0;
    animation: left-right 500ms 600ms forwards;

    margin-bottom: 1.75em;
    width: 100%;

    h1 {
        color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };
        font-size: 1.0625em;
        font-family: Roboto, sans-serif;
        font-weight: 300;
        margin-bottom: 0.625em;
    }

    .ingredientsTags {
        display: flex;
        flex-wrap: wrap;
        padding: 0.3125em 0.625em;
        gap: 0.9375em;
        
        background-color: ${ ({theme}) => theme.COLORS.INPUT };
        border-radius: 0.5em;
    }
`

