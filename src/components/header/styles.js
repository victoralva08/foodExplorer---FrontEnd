import styles from 'styled-components'

export const Container = styles.div`

    opacity: 0;
    animation: topdown 500ms 100ms forwards;

    @keyframes topdown{
        0%{
            opacity: 0;
            transform: translateY(-6.25em);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

    z-index: 2;

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

    background-color: ${ ({theme}) => theme.COLORS.FORM_BG };
    padding: 1.5em 2.5em;

    justify-content: center;
    gap: 1.25em;

    @media (min-width: 26.56em) {
        justify-content: space-between;
    }

    display: flex;
    align-items: center;  
    width: 100%;

    .desktop {
        display: none;
    }

    @media (min-width: 64em) {

        .mobile {
            display: none;
        }

        .desktop {
            display: flex;
        }

        padding-right: 3.75em;

    }
    
    .search-wrapper {
        
        position: relative;
        display: none;

        @media (min-width: 64em) {
            display: flex;
        }

        .suggestions {
            
            position: absolute;
            width: 100%;
            height: 12.68em;
            overflow-y: auto;

         
            margin-top: 3em;

        }

        @media (min-width: 64em) {
            width: 100%;
        }

    }

    .favorites-button {

        display: none;

        @media (min-width: 64em) {
            display: flex;
        }
        
        font-size: clamp(0.625em, 3vw, 1.25em);
        white-space: nowrap;
        font-weight: 300;
        
    }

`

export const HeaderButton = styles.button`

    background: none;
    border: none;
    color: ${ ({theme}) => theme.COLORS.TEXT };

    > svg {
        font-size: clamp(1em, 6vw, 1.75em);
    }

    #mobile-basket-icon {

        position: relative;

        span {
            font-size: 0.75em;
            background-color: ${ ({theme}) => theme.COLORS.BUTTON_BACKGROUND };
            padding: 0.25em 0.375em;
            border-radius: 50%;

            position: absolute;
            left: 0.75em;

            @media (min-width: 23.43em) {
                left: 1.25em; 
                font-size: 0.875em;
            }

            bottom: 0.937em;

        }

        svg {
            font-size: clamp(1em, 6vw, 1.75em);
        }

    }

`

