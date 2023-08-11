import styles from 'styled-components'
import fruits_image from "../../assets/fruits_image.png"

export const Container = styles.div`

    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    @media (min-width: 1024px) {
        padding: 0 30px;
    }

    
    `
    export const OpeningCard = styles.div`

    &::before {
        
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        content: "";
        border-radius: 0.5rem; 
        position: absolute;
        z-index: -1;

        height: 20vw;
        min-width: 95%;
        
        
        @media (min-width: 550px) {
            min-width: 97%;
        }

        @media (min-width: 917px) {
            min-width: 96%;
        }

        @media (min-width: 1024px) {
            min-width: 92%;
        }
      


    }        
    
           
    
    display: flex;
    align-items: center;
    gap: 5px; 
    
    margin-top: 60px; 
        
        
    > img { 

        width: 40vw; 
        position: relative;
        top: clamp(-50px, -3vw, -5px);
        left: clamp(-10px, -3vw, -5px);


    }
    
    
    .texts{
        
        position: relative;

        @media (min-width: 1024px) {
            right: 25px;
        }

        width: 100%;
        text-align: start;

        @media (min-width: 1024px) {
            text-align: center;
        }
            
    
        h1 {
            font-family: Poppins;
            font-weight: 400;
            font-size: clamp(15px, 4vw, 38px);
            line-height: 100%;
            color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };

            margin-bottom: 5px;
        }
    
        p {
            font-family: Roboto;
            font-weight: 300;
            font-size: clamp(10px, 3.5vw, 20px);
            color: ${ ({theme}) => theme.COLORS.TEXT };
                
        }
    
    }

    @media (min-width: 1024px) {

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
    
    width: 100vw;
    margin: 22px 0 85px 0;
    
    section {
        .section-title {

            padding-left: 25px;
            font-family: Poppins;
            font-weight: 300;
            font-size: clamp(20px, 4vw, 38px);
            border-bottom: 0.5px solid ${ ({theme}) => theme.COLORS.INPUT };
            margin: 50px 0 25px 0;
    
        }
    }

   

    @media (min-width: 768px){

        section {
            
           -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
        
           .section-title {
                padding-left: 90px;

                @media (min-width: 1150px){
                    padding-left: 120px;
                }
            }
        }
    }



`