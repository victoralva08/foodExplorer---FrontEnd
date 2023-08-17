import styles from 'styled-components'

export const Container = styles.div`

    opacity: 0;
    animation: topdown 500ms 100ms forwards;

    @keyframes topdown{
        0%{
            opacity: 0;
            transform: translateY(-100px);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }



    z-index: 2;

     ::-webkit-scrollbar {
        height: 3px;
        width: 6px; 
    }
    
    ::-webkit-scrollbar-track {
        background: hsla(240, 6%, 51%, 1); 
        border-radius: 16px; 
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: hsla(353, 95%, 24%, 1); 
        border-radius: 16px; 
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: hsla(353, 95%, 20%, 1); 
    }
    
    ::-webkit-scrollbar-thumb:active {
        background-color: hsla(353, 95%, 15%, 1); 
    }

    background-color: ${ ({theme}) => theme.COLORS.FORM_BG };
    padding: 24px 40px;

    justify-content: center;
    gap: 40px;

    @media (min-width: 425px) {
        justify-content: space-between;
    }

    display: flex;
    align-items: center;  
    width: 100%;

    .desktop {
        display: none;
    }

    @media (min-width: 1024px) {

        .mobile {
            display: none;
        }

        .desktop {
            display: flex;
        }

        padding-right: 60px;

    }
    
    .search-wrapper {
        
        position: relative;
        display: none;

        @media (min-width: 1024px) {
            display: flex;
        }

        .suggestions {
            
            position: absolute;
            width: 100%;
            height: 203px;
            overflow-y: auto;

         
            margin-top: 48px;
            z-index: 2;


        }

        @media (min-width: 1024px) {
            width: 100%;
        }

    }

`

export const HeaderButton = styles.button`

    background: none;
    border: none;
    color: ${ ({theme}) => theme.COLORS.TEXT };

    > svg {
        font-size: clamp(16px, 6vw, 28px);
    }

    #mobile-basket-icon {

        position: relative;

        span {
            font-size: 10px;
            background-color: ${ ({theme}) => theme.COLORS.BUTTON_BACKGROUND };
            padding: 4px 6px;
            border-radius: 50%;

            position: absolute;
            left: 12px;

            @media (min-width: 375px) {
                left: 20px; 
                font-size: 14px;
            }

            bottom: 15px;

        }

        svg {
            font-size: clamp(16px, 6vw, 28px);
        }

    }

`

