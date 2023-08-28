import styles from 'styled-components'

export const Container = styles.div`


.return-button {
    margin: 1.875em 0 0 1.875em;

    @media (min-width: 64em) {
        margin-left: 5.625em;
    }
}

@keyframes topdown{
    0%{
        transform: translateY(-31.25em);
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

`

export const MainContent = styles.div`

    opacity: 0;
    animation: topdown 1000ms 100ms forwards;

    padding:  0 1.875em;
    margin: 1.875em 0; 

    @media (min-width: 64em) {
        padding: 0 7.5em;
        margin: 7.5em 0;
    }
                
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 3.125em;
    justify-content: center;

    @media (min-width: 64em) {
        flex-direction: row;
    }

    img {
        width: 15.625em;
        height: 15.625em;
    }

`

export const DishInformation = styles.div`

    opacity: 0;
    animation: right-left 800ms 1000ms forwards;

    font-family: Poppins;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 64em) {
        align-items: start;
    }

   
    h1 {
        font-weight: 500;
    }

    p {
        text-align: center;

        @media (min-width: 64em) {
            text-align: start;
        }

        max-width: 34.375em;

        margin: 1.5em 0;
        font-weight: 300;
        font-size: clamp(0.625em, 3.125vw, 1.25em);
        color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };
    }

    
    .checkout {
        display: flex;
        align-items: center;
        gap: 0.625em;
       

        p {
            font-size: 1.25em;
            font-weight: 700;
            color: ${ ({theme}) => theme.COLORS.TEXT };
        }

        .dishCartQuantity {
            display: flex;
            align-items: center;
            gap: 0.625em;
        }
    }

`

export const Ingredients = styles.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.625em;

    justify-content: center;
    margin-bottom: 0.9375em;

    @media(min-width: 64em) {
        justify-content: start;
    }
`
