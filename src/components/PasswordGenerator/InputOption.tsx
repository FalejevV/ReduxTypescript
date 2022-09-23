import { useSelector } from "react-redux";
import styled from "styled-components"
import { useAppDispatch } from "../../app/hooks"
import { RootState } from "../../app/store";
import { switchOption } from "../../features/passwordGenerator.slice";
import { HeaderTitle } from "./InputSlider.styled";

const OptionContainer = styled.div`
    width:100%;
    height:25px;
    background-color: transparent;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    gap:15px;
`

interface CheckBoxImage{
    image: string,
}
const CheckBox = styled.input<CheckBoxImage>`
    overflow: hidden;
    appearance: none;
    width:15px;
    height:15px;
    border:2px solid #b5b5b5;
    cursor:pointer;
    background-color: transparent;
    transition: all 0.3s;
    background-image: url(${({ image }) => image || ""});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: -100px;
    &:hover{
        border:2px solid #d6d6d6;
    }
    
    &:checked{
        background-position: 50%;
        background-color: #A4FFAF;
        border:2px solid #A4FFAF;
    }
`

const OptionTitle = styled(HeaderTitle)`
    cursor:pointer;
    pointer-events: auto;
`


function InputOption(props:{
    image:string,
    inputName: "uppercase" | "lowercase" | "numbers" | "symbols",
    title:string,
}){
    const dispatch = useAppDispatch();
    const checked = useSelector((store : RootState) => store.passwordGenerator[props.inputName])
    return(
        <OptionContainer>
            <CheckBox image={props.image} checked={checked} onChange={() => dispatch(switchOption(props.inputName))} name={props.inputName}  type="checkbox" />
            <OptionTitle onClick={() => dispatch(switchOption(props.inputName))} >{props.title}</OptionTitle>
        </OptionContainer>
    )
}

export default InputOption;