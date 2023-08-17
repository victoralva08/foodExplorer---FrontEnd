import styles from 'styled-components'

export const Container = styles.div`

    .return-button {
        margin: 30px 0 0 30px;

        @media (min-width: 1024px) {
            margin-left: 90px;
        }
    }

    @keyframes topdown{
        0%{
            transform: translateY(-500px);
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

`

export const MainContent = styles.div`

    opacity: 0;
    animation: topdown 1000ms 100ms forwards;

    padding: 30px; 

    @media (min-width: 1024px) {
        padding: 120px;
    }
                
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 50px;
    justify-content: center;

    @media (min-width: 1024px) {
        flex-direction: row;
    }

    img {
        width: 250px;
        height: 250px;
    }



`

export const DishInformation = styles.div`

    opacity: 0;
    animation: right-left 800ms 1000ms forwards;

    font-family: Poppins;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        align-items: start;
    }

   
    h1 {
        font-weight: 500;
    }

    p {
        text-align: center;

        @media (min-width: 1024px) {
            text-align: start;
        }

        max-width: 550px;

        margin: 24px 0;
        font-weight: 300;
        font-size: clamp(10px, 5vw, 20px);
        color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };
    }

    
    .checkout {
        display: flex;
        align-items: center;
        gap: 10px;
       

        p {
            font-size: 20px;
            font-weight: 700;
            color: ${ ({theme}) => theme.COLORS.TEXT };
        }
    }

`

export const Ingredients = styles.div`
    display: flex;
    margin-bottom: 15px;
`