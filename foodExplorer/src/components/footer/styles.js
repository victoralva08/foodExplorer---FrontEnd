import styles from 'styled-components'

export const Container = styles.div`

    background-color: ${ ({theme}) => theme.COLORS.FORM_BG };
    padding: 24px 15px;
    margin-bottom: 0;

    display: flex;
    align-items: center; 
    justify-content: space-between;   
    width: 100%;

    div:nth-child(1) {
        filter: grayscale(1);
        color: ${ ({theme}) => theme.COLORS.INPUT_TEXT };
        font-size: clamp(3px, 2vw, 16px);
        
    }

    p{
        font-size: clamp(3px, 3vw, 16px);
        white-space: nowrap;
    }


`