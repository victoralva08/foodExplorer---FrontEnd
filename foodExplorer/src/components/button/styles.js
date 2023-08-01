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
        outline: 1px solid ${ ({theme}) => theme.COLORS.TEXT };
    }

    `