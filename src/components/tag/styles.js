import styles from 'styled-components'

export const Container = styles.span`
    background-color: ${ ({theme}) => theme.COLORS.INPUT };
    border-radius: 0.312em;

    padding: 0.25em 0.5em;
    width: fit-content;
    margin-right: 10px;

    &:hover{
        cursor: default;
        filter: brightness(0.8);
    }
`