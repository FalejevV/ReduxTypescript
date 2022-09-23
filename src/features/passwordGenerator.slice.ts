import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPasswordGenerator{
    result: string,
    length: number,
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean,
    strength: number,
}

const initialState : IPasswordGenerator ={
    result: "A1ff_sx!0sZZ_",
    length: 5,
    uppercase: false,
    lowercase: true,
    numbers: false,
    symbols: false,
    strength: 0,
}

const passwordGeneratorSlice = createSlice({
    name: "passwordGenerator",
    initialState,
    reducers:{
        setResult(state : IPasswordGenerator, action : PayloadAction<string>){
            state.result = action.payload;
        },
        setLength(state : IPasswordGenerator, action : PayloadAction<number>){
            state.length = action.payload;
        },
        switchOption(state : IPasswordGenerator, action:PayloadAction<"uppercase"| "lowercase"| "numbers"| "symbols">){
            state[action.payload] = !state[action.payload]
        },
        setStrength(state: IPasswordGenerator , action: PayloadAction<number>){
            state.strength = action.payload;
        }
    }
});

export const {setResult, setLength, switchOption, setStrength} = passwordGeneratorSlice.actions;
export default passwordGeneratorSlice.reducer;