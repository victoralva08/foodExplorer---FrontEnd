import styles from 'styled-components'

export const Container = styles.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    

    label {
        color: ${ ({theme}) => theme.COLORS.INPUT_TITLE };
        font-weight: 300;
    }

    

    select {
        background-color: ${ ({theme}) => theme.COLORS.INPUT };
        appearance: none;
        cursor: pointer;

        background-image: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z" fill="%23C4C4CC"/></svg>');
        background-repeat: no-repeat;
        background-position: right 15px top 50%;

        color: ${ ({theme}) => theme.COLORS.TEXT };
    
        font-family: Roboto, sans-serif;
        font-size: 16px;
    
        padding: 14px 15px;
        border: none;
        border-radius: 8px;

    
        &:placeholder {
            color: ${ ({theme}) => theme.COLORS.INPUT_TEXT };
        }

        &:focus {
            outline: 1px solid ${({ theme }) => theme.COLORS.INPUT_TEXT};
        }

    }
`