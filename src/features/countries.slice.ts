import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface ICountry{
    name: {
        common: string,
    },
    tld: string[],
    cca3: string,
    currencies: {
        [key: string] : {
            name: string,
            symbol: string,
        }
    },
    fifa:string,
    borders: string[],
    capital: string,
    altSpellings: string[],
    region:string,
    languages: {
        [key: string]: string
    },
    flags: {
        svg: string,
        png: string,
    },
    population: string,
    subregion:string,
}

interface ICountries{
    countries: ICountry[],
    searchFilter: string,
    regionFilter: string,
}

const initialState :ICountries = {
    countries: [],
    searchFilter: "",
    regionFilter: "",
}

export const requestCountries = createAsyncThunk("countries/requestCountries", async (_, {rejectWithValue, dispatch}) =>{
        const res = await axios.get("https://restcountries.com/v3.1/all");
        dispatch(setCountries(res.data));
    });

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        setCountries(state : ICountries, action: PayloadAction<ICountry[]>){
            state.countries = action.payload;
        },
        setSearch(state: ICountries, action: PayloadAction<string>){
            state.searchFilter = action.payload;
        },
        setRegion(state: ICountries, action: PayloadAction<string>){
            state.regionFilter = action.payload;
        }
    },
})

export const { setCountries, setSearch, setRegion } = countriesSlice.actions;

export default countriesSlice.reducer;