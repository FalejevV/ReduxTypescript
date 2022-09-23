import React from "react";
import AddTodoInput from "./AddTodoInput";
import { Page, TodoContainer } from "./TodoList.styled";
import { useSelector } from 'react-redux';
import { RootState } from "../../app/store";
import TodoElement from "./TodoElement";


export default function TodoList(){
    let todos = useSelector((state : RootState)=> state.todo);
    return(
        <Page>
            <TodoContainer>
                <AddTodoInput />
                {todos.map((todo : any) => <TodoElement key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />)}
            </TodoContainer>
        </Page>
    )
}