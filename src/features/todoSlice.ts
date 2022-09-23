import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: string,
    title: string,
    completed: boolean
}

const initialState : Todo[] = [
    {
        id: "ASS",
        title: "Test one",
        completed: false,
    },
    {
        id: "ASSWIPE",
        title: "Test two",
        completed: false,
    },
]

const todoSlice = createSlice({
    name :"Todo",
    initialState,
    reducers: {
        addTodo : {
            reducer(state : Todo[], action : PayloadAction<Todo>){
                if(action.payload.title !== "" && action.payload.title.trim() !== ""){
                    let payload = action.payload as Todo;
                    state.unshift(payload);
                }
            },
            prepare : (title : string) => {
                return {
                    payload: {
                        id:nanoid(),
                        title,
                        completed:false,
                    }
                }
            }
        },
        toggleTodo :(state : Todo[], action : PayloadAction<string>) => {
            let foundTodo = state.find((todo : Todo) => todo.id === action.payload);
            if (foundTodo !== undefined && foundTodo){
                foundTodo.completed = !foundTodo.completed;
            }
        },
        removeTodo :(state : Todo[], action : PayloadAction<string>) => {
            return (state.filter((todo: Todo) => todo.id !== action.payload));
        }
    }
});
export const {addTodo, toggleTodo, removeTodo} = todoSlice.actions; 
export default todoSlice.reducer;