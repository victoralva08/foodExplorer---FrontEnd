import styles from 'styled-components'

export const Container = styles.div`   

    display: flex;
    flex-direction: column;

    
    align-items: center;
    margin: 5em 0.625em;

    span {
        display: none;
    }
    
    @media (min-width: 48em) {
        flex-direction: row; 
        justify-content: center; 
        gap: 20vw;  
        
        margin: 3.75em 2.5em;
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

export const Form = styles.div`

    opacity: 0;
    animation: right-left 500ms 100ms forwards;

    .registerButton {
        font-size: 1em;
        font-weight: 300;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.875em;

    padding: 2.5em 2.5em;
    margin-top: 1.875em;

    
    width: 100%;
    
    background: none;

    @media (min-width: 48em) {
        background-color: ${ ({theme}) => theme.COLORS.FORM_BG };
        border-radius: 1em; 

        width: 31.25em;
    }

    h1, p{
        font-family: Poppins;
    }
    
    h1 {
        display: none;

        @media (min-width: 48em) {
            display: inline-block;
        }
    }
    
     
   .signIn-button {
    width: 100%;
   }

   .show-password-checkbox{
    display: flex;

    #password-visible-check {

        width: 1.5em;
        height: 1.5em;
        opacity: 0;
        
    }

    label::before{            
        position: relative;
        right: 0.5em;
        
        cursor: pointer;

        content: '';
        width: 1.5em;
        height: 1.5em;

        display: block;
        
        border: 0.0625em solid ${ ({theme}) => theme.COLORS.INPUT_TITLE };;
        border-radius: 0.375em;

        
    
    }

    #password-visible-check:checked + label::before{
        background-image: url("data:image/svg+xml,%3Csvg width='1.5em' height='1.5em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_916_20)'%3E%3Cpath d='M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z' fill='red'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_916_20'%3E%3Crect width='1.5em' height='1.5em' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    }

    label{
        display: flex;
        align-items: center;
        margin-left: -0.9375em;

        font-family: Roboto;
        font-size: 1em;
        color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };

        &focus {
            outline: 0.0625em solid red;
        }
        
    }
}
`