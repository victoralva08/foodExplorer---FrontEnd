import styles from 'styled-components'

export const Container = styles.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;

    background-color: ${ ({theme}) => theme.COLORS.FOOD_CARD_BG };

    padding: 24px 55px;
    margin: 0 20px;

    input {
        position: relative;
        left: 106px;
        top: -15px;

        width: 24px;
        height: 24px;
        opacity: 0;
    }

    label::before{
        position: relative;
        left: 105px;
        top: -30px;

        margin-bottom: -30px;
        
        content:"";
        width: 26px;
        height: 24px;
        display: block;

        cursor: pointer;

        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none"><path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" stroke="%23E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')
       
    }

    input:checked + label::before{
        background-image: url('data:image/svg+xml,<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z" fill="%23E1E1E6" stroke="%23E1E1E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')
    }

    img {
        margin-bottom: 15px;
    }

    h2 {
        margin-bottom: 15px;
        white-space: nowrap;
    }

    p {
        color: ${ ({theme}) => theme.COLORS.INPUT_TEXT };
    }

    h1 {
        font-family: Roboto;
        font-weight: 400;
        margin: 15px 0 15px 0;
        color: ${ ({theme}) => theme.COLORS.PRICE_TEXT };
    }

    .checkout{

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;

        .checkout-button {
            width: clamp(100%, 250%, 800px);
        }

        @media (min-width: 600px) {
            flex-direction: row;
            gap: 12px;
            align-items: center;
        }
        
        .quantity-select {
            display: flex;
            gap: 12px;
            align-items: center;
        }


        p {
            font-size: 20px;
            font-weight: 700;
            color: ${ ({theme}) => theme.COLORS.TEXT };
        }

    }

`