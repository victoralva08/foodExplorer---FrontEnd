import styles from 'styled-components'

export const Container = styles.button`

    background: none;
    border: none;

    width: fit-content;

    display: flex;
    align-items: center;

    font-family: Poppins, sans-serif;
    color: ${ ({theme}) => theme.COLORS.TEXT };
    font-size: 24px;
    font-weight: 700;

    &:focus{
        filter: brightness(1.5)
    }

    `