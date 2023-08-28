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

    margin-bottom: 25px;

    img {
        height: 4.5em;
        width: 4.5em;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
            filter: brightness(1.2);
        }

    }

    div {

        .dish-info {
            
            display: flex;
            align-items: center;
            gap: 0.625em;
            &:hover{
                transform: scale(1.1);
                filter: brightness(1.2);
            }

        }

        h1 {
            cursor: pointer;
            font-family: Poppins;
            width: 6.25em;
            font-size: 1em;
            font-weight: 300;
            color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };

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