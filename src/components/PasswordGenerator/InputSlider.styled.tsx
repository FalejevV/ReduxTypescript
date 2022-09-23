import styled from "styled-components";
import { ChangeEvent } from "react";
import {useAppDispatch} from "../../app/hooks";
import {setLength} from "../../features/passwordGenerator.slice";
import {useSelector} from "react-redux";
import { RootState } from "../../app/store";

interface SliderProps{
    title: string,
    minValue: number,
    maxValue: number,
    name:string
}


const InputContainer = styled.div`
    width:100%;
    background-color: transparent;
    padding-bottom: 15px;
`

const HeaderContainer = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

export const HeaderTitle = styled.p`
    color: #cacaca;
    font-weight: 600;
    font-size: 13px;
    font-family: arial;
    pointer-events: none;
    user-select: none;

    flex: auto;
`

const ValueText = styled.p`
    color:#A4FFAF;
    font-weight: 600;
    font-size: 20px;
    font-family: arial;
    pointer-events: none;
    user-select: none;
    text-align: right;
`

const InputSlide = styled.input`
    appearance: none;
    width:100%;
    height:7px;
    border-radius: 5px;
    background-color: black;
    color:blue;
    border:0;
    &::-moz-range-track,
    &::-moz-range-progress {
        background-color: black;
        border:0;
    }

    &::-moz-range-thumb {
        background-color: #b5b5b5;
        width:18px;
        height:18px;
        cursor: pointer;
        border:0;
        border-radius:50%;
        transition: background-color 0.3s;
        &:hover{
            background-color: #d6d6d6;
        }
    }

    &::-ms-thumb {
        background-color: #b5b5b5;
        width:18px;
        height:18px;
        cursor: pointer;
        border:0;
        border-radius:50%;
        transition: background-color 0.3s;
        &:hover{
            background-color: #d6d6d6;
        }
    }

    &::-ms-fill-lower {
    background: #A4FFAF;
    border:0;
    }
    &::-moz-range-progress {
    background: #A4FFAF;
    border:0;
  }

`

function InputSlider(props : SliderProps ){
    const dispatch = useAppDispatch();
    const inputLength = useSelector((state : RootState) => state.passwordGenerator.length);
    function setSliderValue(e : ChangeEvent<HTMLInputElement>){
        let input = e.target as HTMLInputElement;
        dispatch(setLength(Number(input.value)));
    }

    return(
        <InputContainer>
            <HeaderContainer>
                <HeaderTitle>{props.title}</HeaderTitle>
                <ValueText>{inputLength}</ValueText>
            </HeaderContainer>
            <InputSlide name={props.name} min={props.minValue} value={inputLength} max={props.maxValue} onChange={(e) => setSliderValue(e)} type="range" />
        </InputContainer>
    )
};

export default InputSlider;