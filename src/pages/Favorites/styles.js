import styles from 'styled-components'

export const Container = styles.div`

    .return-button {
        margin: 1.875em 0 0 1.25em;

        margin-bottom: 1.875em;

        @media (min-width: 64em) {
            margin-left: 5.625em;
        }
    }

    .interface-title{

        margin-left: .875em;
        font-size: 1.875em;

        @media (min-width: 64em) {
            margin: 1.37em 0 0 3.5em;
        }
    }

    .favorites-list  {

        display: flex;
        width: 90%;
        flex-wrap: wrap;
        gap: 1.875em;

        margin: 1.875em 0.937em;

        @media (min-width: 64em) {
            margin-left: 5.625em;
        }
        
    }

    p {
        margin-left: .7em;
        font-family: Poppins;
        font-size: 1.25em;
    }


` 