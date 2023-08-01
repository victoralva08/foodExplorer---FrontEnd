import styles from 'styled-components'

export const Container = styles.div`
    

    display: flex;
    flex-direction: column;

    
    align-items: center;
    margin: 80px 10px;
    

    
    @media (min-width: 768px) {
        flex-direction: row; 
        justify-content: center; 
        gap: 20vw;  
        
        margin: 80px 40px;
    }
    

`

export const Form = styles.div`



    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    padding: 40px 40px;
    margin-top: 30px;

    
    width: 100%;
    
    background: none;

    @media (min-width: 768px) {
        background-color: ${ ({theme}) => theme.COLORS.FORM_BG };
        border-radius: 16px; 

        width: 500px;
    }

    h1, p{
        font-family: Poppins;
    }
    
    h1 {
        display: none;

        @media (min-width: 768px) {
            display: inline-block;
        }
    }
    
     
   .register-button {
    width: 100%;
   }
`