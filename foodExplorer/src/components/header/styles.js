import styles from 'styled-components'

export const Container = styles.div`

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
    


`

export const HeaderButton = styles.button`
    background: none;
    border: none;
    color: ${ ({theme}) => theme.COLORS.TEXT };

    > svg {
        font-size: clamp(16px, 6vw, 28px);
    }

`