import { FormEvent } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import styled from 'styled-components';
import { addTodo } from '../../features/todoSlice';
import {useRef} from "react";

const InputForm = styled.form`
    width:100%;
    border-radius: 15px;
    overflow: hidden;
    height:50px;
    border:1px solid #3a3c4d;
    display:flex;
    align-items: center;
    padding:0px 10px;
    position: relative;
`

const PlusSvg = styled.svg`
    background-color: #FC76A1;
    border-radius: 7px;
    width:28px;
    height:28px;
    cursor:pointer;
    padding:3.5px;
    transition: transform 0.4s, background-color 1s;
    transform: rotate(0deg);
    position: relative;
    z-index: 5;
    &:hover{
        transform: rotate(90deg) scale(1.7);
        background-color: #fc5d8f;
    }
`

const InputField = styled.input`
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background-color: transparent;
    border:0;
    color:white;
    padding:0px 10px 0px 55px;
`
const SubmitButton = styled.button`
    background: transparent;
    border: 0;
`


function formSubmit(e : FormEvent){
    e.preventDefault();
    let form = e.target as HTMLFormElement;
    let input = form.input as HTMLInputElement;
    input.value = "";
}

function AddTodoInput() : JSX.Element{

    const dispatch = useDispatch();

    const ref = useRef(null);

    return (
        <InputForm ref={ref} onSubmit={e => {
            dispatch(addTodo((e.target as HTMLFormElement).input.value))
            formSubmit(e);
        }}>
            <SubmitButton type="submit">
                <PlusSvg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/>
                </PlusSvg>
            </SubmitButton>
            <InputField autoComplete="off" name="input" />
        </InputForm>
    );
}

export default AddTodoInput;