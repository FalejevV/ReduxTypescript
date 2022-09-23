import styled, { css, keyframes } from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

const IndicatorContainer = styled.div`
    width:100%;
    height:45px;
    background-color: #18171F;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top:15px;
    padding:0px 20px;
    gap:5px;
`

const StrengthTitle = styled.p`
    font-family: arial;
    text-transform: uppercase;
    color:#bebebe86;
    font-size: 9px;
    font-weight: 800;
    letter-spacing:1px;
    flex: auto;
    user-select: none;
`

interface IChecked{
    checked:boolean;
}

const Indicator = styled.div<IChecked>`
    width:8px;
    height:20px;
    background-color: transparent;
    border:2px solid #ffffffa9;

    transition: all 0.3s;
    ${({ checked }) => checked && css`
        background-color: #A4FFAF;
        border: 2px solid #A4FFAF;
    `}
`

interface IShake{
    shake:boolean,
}

const shakeAnimation = keyframes`
    0%{
        transform: translate(0px,0px) rotate(0deg);
    }
    50%{
        transform: translate(1px,1px) rotate(1deg);
    }
    100%{
        transform: translate(-1px,-1px) rotate(-1deg);
    }
`

const IndicatorFlexbox = styled.div<IShake>`
    display: flex;
    gap:5px;
    transition: all 0.3s;
    transform: translate(0px,0px) rotate(0deg);
    ${({ shake }) => shake && css`
        animation: ${shakeAnimation} 0.1s infinite;
        box-shadow: -1px 1px 21px 0px #a4ffaf77;
    `}
`

function StrengthIndicator(){
    const strength = useAppSelector((state : RootState) => state.passwordGenerator.strength);
    return(
        <IndicatorContainer>
            <StrengthTitle>Strength</StrengthTitle>
            <IndicatorFlexbox shake={strength > 4}>
                <Indicator checked={strength >= 1}></Indicator>
                <Indicator checked={strength >= 2}></Indicator>
                <Indicator checked={strength >= 3}></Indicator>
                <Indicator checked={strength >= 4}></Indicator>
            </IndicatorFlexbox>
        </IndicatorContainer>
    )
}

export default StrengthIndicator;