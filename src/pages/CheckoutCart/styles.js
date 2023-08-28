import styles from 'styled-components'

export const Container = styles.div`

    .return-button {
        margin: 1.875em 0 0 1.875em;

        @media (min-width: 64em) {
            margin-left: 5.625em;
        }
    }

`

export const MainContent = styles.div`

    margin: 1.875em;
    display: flex;
    
    gap: 1.25em;

    @media (min-width: 48em) {
        margin-left: 1.875em;
        padding: 6.25em 1.25em;
    }

    @media (min-width: 64em) {
        padding: 1.875em 6.25em;
    }

    .interface-title {
        margin-bottom: 1.875em;
    }

    p {
        font-family: Poppins;
        font-size: 1.25em;
    }

    .orders-list {
        
        display: flex;
        flex-direction: column;
        width: 43.75em;   
        
        @media (min-width: 47.9375em) {
            width: 100%; 
        }
    }

    .confirm-button {
        margin: 1.875em 0;
        align-self: start; 
        
        @media (min-width: 47.9375em) {
            display: none;
        }
    }

    .payment-section {

        width: 37.5em;

        margin-bottom: 1.875em;

        h1 {
            @media (max-width: 47.9375em) {
                display: none;
            }
        }

        .payment-chart {

            @media (max-width: 47.9375em) {
                display: none;
            }
    
            
            border: 1px solid ${ ({theme}) => theme.COLORS.INPUT };
            border-radius: 0.5em;
            
            display: flex;
            flex-direction: column;
            justify-content: center;

            .input-wrapper {

                input {
                    height: 1.875em;
                }

                padding: 0.5em;
                margin: 0.5em;
                
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
                border: 1px solid ${ ({theme}) => theme.COLORS.INPUT };
                height: 3.75em;

            }

            .pix, .credit-card {

                font-size: 1em;
                font-weight: 300;
        
                gap: 0.625em;
                justify-content: center;
                
                min-width: 50%;
                
                height: 3.75em;
        
                border-bottom: 1px solid ${ ({theme}) => theme.COLORS.INPUT };
                
            }
        
            .pix {
                border-radius: 0.4375em 0 0 0;
                
            }
        
            .credit-card {
                border-radius: 0 0.4375em 0 0;
                background-color: ${ ({theme}) => theme.COLORS.INPUT };
            }
        
            
        }

        .confirm-checkout-button {  
            margin: 1.75em; 
        }

    }

`
