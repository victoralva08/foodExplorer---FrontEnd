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
        
        margin: 60px 40px;
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
    
     
   .signIn-button {
    width: 100%;
   }

   .show-password-checkbox{
    display: flex;

    #password-visible-check {

        width: 24px;
        height: 24px;
        opacity: 0;
        
    }

    label::before{            
        position: relative;
        right: 8px;
        
        cursor: pointer;

        content: '';
        width: 24px;
        height: 24px;

        display: block;
        
        border: 1px solid ${ ({theme}) => theme.COLORS.INPUT_TITLE };;
        border-radius: 6px;
    
    }

    #password-visible-check:checked + label::before{
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_916_20)'%3E%3Cpath d='M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z' fill='red'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_916_20'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    }

    label{
        display: flex;
        align-items: center;
        margin-left: -15px;

        font-family: Roboto;
        font-size: 16px;
        color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };
        
    }
}
`