import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box; 
    }

    body {
        background-color: ${ ({theme}) => theme.COLORS.MAIN_BG };
        color: ${ ({theme}) => theme.COLORS.TEXT };
        -webkit-font-smoothing: antialiased;
        
        font-family: 'Roboto', serif;
        font-size: 16px;
        outline: none;

    }
    
    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.7) ;
    }

    input:focus, select:focus {
        outline: none;
    }
    

    h1, p {
        cursor: default;
    }

`