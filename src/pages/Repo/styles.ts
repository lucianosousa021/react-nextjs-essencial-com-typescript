import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-align: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666666;
        }

        svg {
            margin-right: 4px;
        }
    }
`

export const RepoInfo = styled.section`
    margin-top: 80px;

    header{
        display: flex;
        align-items: center;

        img{
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div{
            margin-left: 24px;

            strong{
                font-size: 36px;
                color: #3d3d4d;
            }

            p{
                font-size: 18px;
                color: #737380;
            }
        }
    }

    ul{
        display: flex;
        list-style: none;
        margin-top: 40px;

        li{
            & + li{
                margin-left: 80px;
            }

            strong{
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span{
                display: block;
                margin-top: 4px;
                color: #737380;
            }
        }
    }
`

export const Issues = styled.div`
    margin-top: 80px;
    a{
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: flex;
        text-decoration: none;
        align-items: center;
        transition: all 0.2s;
        transition-property: transform, box-shadow;

        &:hover{
            transform: translatex(6px);
            box-shadow: -5px 5px 10px 1px silver;
        }

        & + a {
            margin-top: 16px;
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
            }
        }

        svg{
            margin-left: auto;
            color: #cbcbb6;
        }
    }
`