import styles from 'styled-components'

export const Container = styles.div`

    background-color: ${ ({theme}) => theme.COLORS.FORM_BG };
    padding: 1.5em 0.937em;

    @media (min-width: 47.81em) {
        padding: 1.5em 4.06em;
    }

    margin-bottom: 0;

    display: flex;
    align-items: center; 
    justify-content: space-between;   
    width: 100%;

    div:nth-child(1) {
        filter: grayscale(1);
        color: ${ ({theme}) => theme.COLORS.INPUT_TEXT };
        font-size: clamp(0.187em, 2vw, 1em);
        
    }

    p{
        font-size: clamp(0.187em, 3vw, 1em);
        white-space: nowrap;
    }


`