import styled, { keyframes, css } from "styled-components";
import { HeaderTitle } from "./InputSlider.styled";

export const Page = styled.div`
    max-width: 100vw;
    width:100%;
    min-height: 100vh;
    height:100%;
    background-color: #100F15;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const PasswordGeneratorContainer = styled.div`
    max-width: 375px;
    width:100%;
    padding:10px;
    display:flex;

    flex-direction: column;
    gap:15px;
`

export const Title = styled.h1`
    color: #636075;
    font-size: 16px;
    width:100%;
    text-align: center;
    font-family: arial;
    pointer-events: none;
    user-select: none;
`

export const PasswordResultContainer = styled.div`
    width:100%;
    height:60px;
    background-color: #1c1b21;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding:0px 20px;
    position: relative;
`

export const PasswordText = styled.p`
    color: #837e96;
    font-family: arial;
    font-size: 20px;
    pointer-events: none;
    user-select: none;
`

interface ISuccess{
    success:boolean,
}

const colorFade = keyframes`
    0%{
        fill:#A4FFAF;
        transform: rotate(0deg);
    }33%{
        fill:cyan;
        transform: rotate(15deg);
    }55%{
        fill:orange;
        transform: rotate(0deg);
    }88%{
        fill:pink;
        transform: rotate(-15deg);
    }100%{
        fill:#A4FFAF;
        transform: rotate(0deg);
    }
`

export const CopySVG = styled.svg<ISuccess>`
    width:23px;
    fill:#A4FFAF;
    position:absolute;
    right:18px;
    cursor: pointer;

    transition: transform 0.3s;
    
    &:hover{
        transform: scale(1.1);
    };  
    animation:none;
    
    ${({ success }) => success && css`
        transition: transform 0.3s;
        animation: ${colorFade} 0.3s forwards;
    `}
`

export const PasswordGeneratorForm = styled.form`
    width:100%;
    background-color: #1c1b21;
    padding:20px;

    display:flex;
    flex-direction: column;
    gap:5px;
`

const growAnimation = keyframes`
    from{
        transform:scaleY(0);
        margin-top:-21px;
        opacity: 0;
    }
    to{
        transform:scaleY(1);
        margin-top: 0px;
        opacity: 1;
    }
`

const shrinkAnimation = keyframes`
    from{
        margin-top: 0px;
        transform:scaleY(1);
        opacity: 1;
        
    }
    to{
        margin-top:-21px;
        transform:scaleY(0);
        opacity: 0;
    }
`

interface IVisible{
    visible:boolean,
}

export const AlertText = styled(HeaderTitle)<IVisible>`
    color: #dd0000;
    width:100%;
    transition: all 0s;
    animation: ${shrinkAnimation} 0s forwards;
    opacity: 0;
    ${({ visible }) => !visible && css`
        transition: all 0s;
        animation: ${shrinkAnimation} 0.3s forwards;
    ` };

    ${({ visible }) => visible && css`
        transition: all 0s;
        animation: ${growAnimation} 0.3s forwards;
    ` };
`
export const GenerateButtonSVG = styled.svg`
    padding:6px;
`

const rightLeft = keyframes`
    0%{
        transform: translateX(0);
    }50%{
        transform: translateX(5px);
    }100%{
        transform: translateX(0);
    }
`
interface IDisabled{
    isDisabled : boolean,
}

export const GenerateButton = styled.button<IDisabled>`
    margin-top: 20px;
    width:100%;
    height:45px;
    background-color: #A4FFAF;
    border:0px;
    border-radius: 2px;
    cursor:pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 11px;
    box-shadow: 0px 0px 0px 0px #A4FFAF;
    transition: box-shadow 0.3s;
    &:hover{
        ${GenerateButtonSVG}{
            animation: ${rightLeft} 1.5s ease-in-out;
            animation-iteration-count: infinite;
        }

        box-shadow: 0px 0px 15px 0px #A4FFAF;
    }

    ${({ disabled }) => disabled && css`
        opacity: 0.5;
        &:hover{
            ${GenerateButtonSVG}{
                animation: none;
            }

            box-shadow:none;
        }
    `}
`

