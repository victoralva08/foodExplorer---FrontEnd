import styles from 'styled-components'

export const Container = styles.div`

    opacity: 0;
    animation: topdown 800ms 100ms forwards;

    @keyframes topdown{
        0%{
            transform: translateY(-6.25em);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

    display: flex;
    align-items: center; 
    gap: 1.375em;   
    padding: 0.5em 0.75em;

    margin-bottom: 1.5625em;

    img {
        cursor: pointer;
        height: 3.75em;
        width: 3.75em;

        &:hover{
            transform: scale(1.1);
        }
    }

    div {

        .dish-info {
            
            display: flex;
            align-items: center;
            gap: 0.625em;

        }

        h1 {
            cursor: pointer;
            font-family: Poppins;
            font-size: 1em;
            font-weight: 300;
            color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };

            width: 100px;

            &:hover{
                transform: scale(1.1);
                filter: brightness(1.2);
            }
        }

        span {
            white-space: nowrap;
            font-family: Poppins;
            font-size: 1em;
            color: ${ ({theme}) => theme.COLORS.INPUT_TEXT };
        }

        .remove-button {
            color: ${ ({theme}) => theme.COLORS.BUTTON_BACKGROUND };
            font-size: 0.875em;
            cursor: pointer;

            &:hover {
                filter: brightness(1.5);
            }
        }
    }

`