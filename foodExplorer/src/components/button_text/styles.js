import styles from 'styled-components'

export const Container = styles.button`

background-color: ${ ({theme}) => theme.COLORS.BUTTON_BACKGROUND };

display: flex;
gap: 12px;
align-items: center;
justify-content: center;


padding: 14px 16px;
border-radius: 5px;
border: none;



font-family: Poppins, sans-serif;
color: ${ ({theme}) => theme.COLORS.TEXT };
white-space: nowrap;

&:focus{
    outline: 1px solid ${ ({theme}) => theme.COLORS.TEXT };
}

`