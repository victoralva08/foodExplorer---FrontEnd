import styles from 'styled-components'

export const Container = styles.span`
    background-color: ${ ({theme}) => theme.COLORS.INPUT };
    border-radius: 5px;

    padding: 4px 8px;
    width: fit-content;
    margin-right: 10px;

    &:hover{
        cursor: default;
        filter: brightness(0.8);
    }
`