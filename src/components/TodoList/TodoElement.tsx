import styled, {css, keyframes} from "styled-components";
import { toggleTodo, removeTodo } from "../../features/todoSlice";
import { useDispatch } from "react-redux";
import {useState} from "react";

interface Removed{
    removed:boolean,
}

const fadeIn = keyframes`
    from{
        opacity: 0;
        height:0px;
    }to{
        opacity: 1;
        height:45px;
    }
` 
const TodoElementContainer = styled.div<Removed>`
    width:100%;
    height:100%;
    height:45px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 10px;
    position: relative;
    opacity: 1;
    transition: transform 0.4s, opacity 0.2s, height 0.2s;
    ${({ removed }) => removed && css`
        transform: translateX(-30vw);
        opacity:0;
        height:0%;
    `};

    animation: ${fadeIn} 0.5s ease-in-out;
`
interface Checked{
    checked: boolean;
}
const CheckBox = styled.div<Checked>`
    width:28px;
    height:28px;
    background-color: transparent;
    border:2px solid #fc5d8f;
    border-radius: 7px;
    cursor: pointer;

    transition: all 0.3s;
    display:flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    &:before{
        content:"";
        background-color: #fc5d8f;
        width:0%;
        height:0%;
        transition: all 0.3s;
        border-radius: 7px;
    }

    &:hover{
        background-color:#fc5d8f5d;

    }
    ${({ checked }) => checked && `
        &:before{
            width:200%;
            height:200%;
        }
    `}
`

const CheckSvg = styled.svg<Checked>`
    position: absolute;
    fill:black;
    padding:2px;
    opacity: 0;
    transition: opacity 0.1s;
    
    ${({ checked }) => checked && `
        transition: opacity 0.3s;
        transition-delay: 0.35s, 0.3s;
        transition-property: opacity;
        opacity:1;
    `}
`

const TodoTitle = styled.p`
    color:white;
    padding: 0px 20px;
    padding-top: 3px;
    pointer-events: none;
    user-select: none;
    font-family:arial;
`

const RemoveIcon = styled.svg`
    position: absolute;
    right:0px;
    fill: #fc5d8f;
    cursor: pointer;

    transition: all 0.3s;
    &:hover{
        transform: scale(1.4) rotate(5deg);
    }
`

function TodoElement(props : {
    completed : boolean;
    title: string;
    id: string;
}){
    const dispatch = useDispatch();
    const [removed, setRemoved]= useState(false);
    return(
        <TodoElementContainer removed={removed}>
            <CheckBox onClick={e => dispatch(toggleTodo(props.id))} checked={props.completed}>
                <CheckSvg checked={props.completed} viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/>
                </CheckSvg>
            </CheckBox>
            <TodoTitle>{props.title}</TodoTitle>
            <RemoveIcon onClick={e => {
                setRemoved(true);
                setTimeout(() => {
                    dispatch(removeTodo(props.id));
                }, 400);
            }} viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
            </RemoveIcon>
        </TodoElementContainer>
    )
}

export default TodoElement;