import styles from 'styled-components'

export const Container = styles.div`

    padding: 0.3125em;

    @media (min-width: 30.9375em) {
        padding: 1.25em;
    }

    height: 100vh;
    display: grid;
    place-items: center;

    p{ 
        
        display: flex;
        align-items: center;
        gap: 0.3125em;
        
        font-family: Poppins;
        font-size: 0.9375em;
        
        white-space: nowrap;

        &:hover {

            cursor: pointer;
            background-color: ${ ({theme}) => theme.COLORS.INPUT };
            
        }
    }

    .payment-chart {

        
        border: 0.0625em solid ${ ({theme}) => theme.COLORS.INPUT };
        border-radius: 0.5em;
        
        display: flex;
        flex-direction: column;
        justify-content: center;

        max-width: 31.25em;


        .input-wrapper {

            input {
                height: 1.875em;
            }

            padding: 0.5em;
            
            display: flex;
            flex-direction: column;
            gap: 1.25em;

            .inner-input {
                display: flex;
                gap: 1.25em;
            }
        }
    }

    .payment-type {

        display: flex;
        align-items: center;
        justify-content: center;
        
        line {
            border: 0.0625em solid ${ ({theme}) => theme.COLORS.INPUT };
            height: 3.75em;
        }
        
    }

    .pix, .credit-card {

        font-size: 1em;
        font-weight: 300;

        gap: 0.625em;
        justify-content: center;
        
        min-width: 50%;
        
        height: 3.75em;
        
        &:hover {
            background-color: ${ ({theme}) => theme.COLORS.INPUT };
        }

        border-bottom: 0.0625em solid ${ ({theme}) => theme.COLORS.INPUT };
    }

    .pix {
        border-radius: 0.4375em 0 0 0;
    }

    .credit-card {
        border-radius: 0 0.4375em 0 0;
    }

    .confirm-button {  
        margin: 0.5em; 
    }

`
