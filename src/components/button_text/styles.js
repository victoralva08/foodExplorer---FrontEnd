import styles from 'styled-components'

export const Container = styles.button`

background-color: ${ ({theme}) => theme.COLORS.BUTTON_BACKGROUND };

display: flex;
gap: 0.75em;
align-items: center;
justify-content: center;


padding: 0.875em 1em;
border-radius: 5px;
border: none;



font-family: Poppins, sans-serif;
color: ${ ({theme}) => theme.COLORS.TEXT };
white-space: nowrap;

&:focus{
    outline: 0.0625em solid ${ ({theme}) => theme.COLORS.TEXT };
}

`