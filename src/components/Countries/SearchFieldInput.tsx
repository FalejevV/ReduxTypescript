import { ChangeEvent } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import {setSearch} from "../../features/countries.slice";

const SearchContainer = styled.div`
    max-width: 480px;
    width:100%;
    height:55px;
    border-radius: 5px;
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.themeId === 0 ? theme.darkThemeBGTwo : theme.lightThemeBGTwo};
    box-shadow: ${({ theme }) => theme.boxShadow};
    display: flex;
    align-items: center;
    position: relative;

    @media(max-width:900px){
        max-width: unset;
    }

`

const SearchSVG = styled.svg`
    transition: all 0.3s;
    fill: ${({ theme }) => theme.themeId === 0 ? theme.darkThemeFontColor : theme.lightThemeFontColor};
    opacity: 0.7;
    left:30px;
    position: absolute;
`

const SearchInput = styled.input`
    background-color: transparent;
    width:100%;
    height:100%;
    border: 0px;
    transition: all 0.3s;
    color: ${({ theme }) => theme.themeId === 0 ? theme.darkThemeFontColor : theme.lightThemeFontColor};
    padding-left: 70px;
    padding-right: 30px;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    &:focus{
        outline: none;
    }
`

function SearchFieldInput(){
    const dispatch = useAppDispatch();
    const inputValue = useAppSelector((state: RootState) => state.countries.searchFilter);
    function setSearchValue(e : ChangeEvent){
        let input = e.target as HTMLInputElement;
        dispatch(setSearch(input.value));
    }
    return(
        <SearchContainer>
            <SearchSVG viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"/>
            </SearchSVG>
            <SearchInput value={inputValue} onChange={(e) => setSearchValue(e)} placeholder="Search for a country..." type="text" />
        </SearchContainer>
    )
}

export default SearchFieldInput;