import styled, { css } from 'styled-components'
import { shade } from 'polished'
export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 20px;
`

interface FormProps{
    hasError: boolean;
}
export const Form = styled.form<FormProps>`
    margin-top: 30px;
    max-width: 700px;
    display: flex;

        input {
            flex: 1;
            height: 60px;
            padding: 0px 24px;
            border: 2px solid #fff;
            border-radius: 5px 0px 0px 5px;
            outline: none;
            color: #3a3a3a;
            border-right: 0;

            ${(props) => props.hasError && css`
                border-color: #c53030;
            `}

            &::placeholder {
                color: #a8a8b3
            }
        }

        button {
            width: 160px;
            background-color: #04d361;
            border-radius: 0px 5px 5px 0px;
            border: none;
            color: #fff;
            font-weight: bold;
            transition: background-color 0.2s;


            ${(props) => props.hasError && css`
                border: 2px solid #c53030;
                border-left: 0px;
            `}

            &:hover{
                background-color: ${shade(0.2, '#04d361')};
            }
        }
`

export const Repos = styled.section`
    margin-top: 40px;
    max-width: 700px;

        a{
            background: #fff;
            border-radius: 5px;
            width: 100%;
            padding: 24px;
            display: flex;
            align-items: center;
            transition: all .5s;
            transition-property: transform, box-shadow;

            &:hover{
                transform: translateX(6px);
                box-shadow: -5px 5px 10px 1px silver;
            }

            & + a{
                margin-top: 16px;
            }

            img{
                width: 64px;
                height: 64px;
                border-radius: 50%;
            }

            div{
                margin: 0px 16px;
                flex: 1;

                strong{
                    font-size: 20px;
                    color: #3d3d4d;
                }

                p{
                    font-size: 18px;
                    color: #a8a8b3;
                    margin-top: 4px;
                }
            }

            svg{
                margin-left: auto;
                color: #cbcbd6;
            }
        }
`

export const Error = styled.span`
    width: 700px;
    height: 60px;
    display: flex;
    color: #c53030;
    margin-top: 8px;
    background-color: #ffabab;
    border: 1px solid #ff8f8f;
    align-items: center;
    padding: 15px;
    border-radius: 5px;
`