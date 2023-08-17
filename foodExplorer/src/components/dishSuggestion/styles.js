import styles from 'styled-components'

export const Container = styles.div`

    opacity: 0;
    animation: topdown 800ms 100ms forwards;

    @keyframes topdown{
        0%{
            transform: translateY(-100px);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

    display: flex;
    align-items: center; 
    gap: 12px;   
    padding: 8px 12px;
    border: 1px solid ${ ({theme}) => theme.COLORS.INPUT };

    border-radius: 10px;

    background-color: ${ ({theme}) => theme.COLORS.FORM_BG };

    img {
        height: 50px;
        width: 50px;
    }

    div {
        h1 {
            cursor: pointer;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 300;
            color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };
        }

        p {
            cursor: pointer;
            font-family: Poppins;
            font-size: 14px;
            font-weight: 300;
            color: ${ ({theme}) => theme.COLORS.INPUT_TEXT };
        }
    }

    &:hover {
        cursor: pointer;
        filter: brightness(1.4);
    }
`