import styles from 'styled-components'

export const Container = styles.div`

    .return-button {
        margin: 30px 0 0 30px;

        @media (min-width: 1024px) {
            margin-left: 90px;
        }
    }

`

export const MainContent = styles.div`

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

export const Tags = styles.ul`
    list-style: none;
    margin-bottom: 35px;
`