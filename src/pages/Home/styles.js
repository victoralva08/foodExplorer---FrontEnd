import styles from 'styled-components'


export const Container = styles.div`

    padding: 0 0.625em;
    display: flex;
    flex-direction: column;
    align-items: center;


    @keyframes topdown{
        0%{
            transform: translateY(-31.25em);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
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
export const OpeningCard = styles.div`

    &::before {

        opacity: 0;
        animation: topdown 500ms 100ms forwards;
        
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        content: "";
        border-radius: 0.5rem; 
        position: absolute;
        z-index: -1;

        height: 20vw;
        min-width: 95%;
        
        
        @media (min-width: 34.37em) {
            min-width: 97%;
        }

        @media (min-width: 57.31em) {
            min-width: 96%;
        }

        @media (min-width: 64em) {
            min-width: 92%;
        }
    }        
    
           
    
    display: flex;
    align-items: center;
    gap: 0.312em; 
    
    margin-top: 5em; 
        
        
    > img { 

        z-index: -1;
        opacity: 0;
        animation: topdown 1000ms 100ms forwards;

        width: 40vw; 
        position: relative;
        top: clamp(-3.12em, -3vw, -0.312em);
        left: clamp(-0.625em, -3vw, -0.312em);

    }
    
    
    .texts{

        opacity: 0;
        animation: right-left 2000ms 100ms forwards;
        
        position: relative;
        z-index: -1;
        @media (min-width: 64em) {
            right: 1.562em;
        }

        width: 100%;
        text-align: start;

        @media (min-width: 64em) {
            text-align: center;
        }
            
    
        h1 {
            
            font-family: Poppins;
            font-weight: 400;
            font-size: clamp(0.937em, 4vw, 2.375em);
            line-height: 100%;
            color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };

            margin-bottom: 5px;
        }
    
        p {
            font-family: Roboto;
            font-weight: 300;
            font-size: clamp(0.625em, 3.5vw, 1.25em);
            color: ${ ({theme}) => theme.COLORS.TEXT };
                
        }
    
    }

    @media (min-width: 64em) {

        .texts{

            h1 {
                font-size: 2.8vw;
            }

            p {
                font-size: 2vw;
            }
        }

    }
`

export const List = styles.div`

    opacity: 0;
    animation: topdown 500ms 100ms forwards;

    z-index: 1;
    width: 100vw;
    margin: 1.375em 0 85px 0;
    
    section {

        opacity: 0;
        animation: right-left 1000ms 700ms forwards;

        .section-title {

            padding-left: 1.56em;
            font-family: Poppins;
            font-weight: 300;
            font-size: clamp(1.25em, 4vw, 2.375em);
            border-bottom: 0.5px solid ${ ({theme}) => theme.COLORS.INPUT };
            margin: 3.125em 0 1.56em 0;
    
        }
    }

   
    @media (min-width: 48em){

        section {
            
           -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
        
           .section-title {
                padding-left: 5.62em;

                @media (min-width: 71.87em){
                    padding-left: 3.5em;
                }
            }
        }
    }

`