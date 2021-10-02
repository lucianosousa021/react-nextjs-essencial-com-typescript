import { createGlobalStyle } from 'styled-components'
import imgBackground from '../assets/background.svg'


export const Global = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1366px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body{
        background: #f0f0f5 url(${imgBackground}) no-repeat 70% top;
        -webkit-font-font-smoothing: antialiased;
    }

    #root{
        max-width: 960px;
        margin: 0 auto;
        padding: 2.5rem 1.25rem;
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    body, input, textarea, select, button {
        font: 400 1rem "Roboto", sans-serif;
    }
`

