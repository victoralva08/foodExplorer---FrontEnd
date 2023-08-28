import styles from 'styled-components'

export const Container = styles.div`
    
    ::-webkit-scrollbar {
        height: 0.187em;
        width: 0.375em; 
    }

    ::-webkit-scrollbar-track {
        background: hsla(240, 6%, 51%, 1); 
        border-radius: 1em; 
    }

    ::-webkit-scrollbar-thumb {
        background-color: hsla(353, 95%, 24%, 1); 
        border-radius: 1em; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(353, 95%, 20%, 1); 
    }

    ::-webkit-scrollbar-thumb:active {
        background-color: hsla(353, 95%, 15%, 1); 
    }

    margin-bottom: 15.65em;

    .header {

        font-family: Poppins;

        width: 100%;
        padding: 2.5em;
        padding-top: 5em;
        margin-bottom: 1.87em;

        display: flex;
        gap: 0.937em;
        align-items: center;
        
        background-color: ${ ({theme}) => theme.COLORS.FORM_BG };

        svg {
            height: 2.18em;
            width: 2.18em;
        }

        h1 {
            font-weight: 300;
        }

    }


    .menu-section {
        padding: 1.25em;
        width: 100%;
        position: absolute;
    }

    .suggestions {
            
        position: relative;
        width: 100%;
        height: 200px;
        overflow-y: auto;

        .dishSuggestion {
            p {
                display: none;
            }
        }

    }


    .navigate-buttons {

        margin-top: 0.937em;
        padding: 0 1.56em;
        font-weight: 300;
        border-bottom: 0.0625em solid ${ ({theme}) => theme.COLORS.INPUT };
        width: 100%;

    }

`