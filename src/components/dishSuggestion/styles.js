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
    gap: 0.75em;   
    padding: 0.5em 0.75em;
    border: 0.0625em solid ${ ({theme}) => theme.COLORS.INPUT };

    border-radius: 0.625em;

    background-color: ${ ({theme}) => theme.COLORS.FORM_BG };

    img {
        height: 3.125em;
        width: 3.125em;
    }

    div {
        h1 {
            cursor: pointer;
            font-family: Poppins;
            font-size: 1em;
            font-weight: 300;
            color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };
        }

        p {
            cursor: pointer;
            font-family: Poppins;
            font-size: 0.875em;
            font-weight: 300;
            color: ${ ({theme}) => theme.COLORS.INPUT_TEXT };
        }
    }

    &:hover {
        cursor: pointer;
        filter: brightness(1.4);
    }
`