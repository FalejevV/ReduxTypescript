import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";
import { setRegion } from "../../features/countries.slice";

const RegionContainer = styled.div`
    max-width: 200px;
    width:100%;
    position: relative;
`

const RegionDropdownButton = styled.button`
    font-family: 'Nunito Sans', sans-serif;
    width:100%;
    height:55px;
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.themeId === 0 ? theme.darkThemeBGTwo : theme.lightThemeBGTwo};
    cursor: pointer;
    border: 0px;
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: ${({ theme }) => theme.themeId === 0 ? theme.darkThemeFontColor : theme.lightThemeFontColor};
    padding:0px 20px;
    padding-left: 25px;
`

const ArrowSVG = styled.svg`
    transition: all 0.3s;
    fill: ${({ theme }) => theme.themeId === 0 ? theme.darkThemeFontColor : theme.lightThemeFontColor};
    width:20px;
`

const DropdownList = styled.div`
    top: 60px;
    position: absolute;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.themeId === 0 ? theme.darkThemeBGTwo : theme.lightThemeBGTwo};
    padding:10px 0px;
    box-shadow: ${({ theme }) => theme.boxShadow};
`

const DropdownListButton = styled.button`
    width:100%;
    background-color: transparent;
    transition: all 0.3s;
    color: ${({ theme }) => theme.themeId === 0 ? theme.darkThemeFontColor : theme.lightThemeFontColor};
    cursor: pointer;
    text-align: left;
    padding:8px 25px;
    border:0px;

    &:hover{
        opacity: 0.5;
    }
`
const buttonArray = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

function RegionFilter(){
    const [opened, setOpened] = React.useState(false);
    const dispatch = useAppDispatch();
    function setRegionValue(item: string){
        if(item === "All"){
            dispatch(setRegion(""));
        }else{      
            dispatch(setRegion(item));
        }
        setOpened(false);
    }

    return(
        <RegionContainer>
            <RegionDropdownButton onClick={() => setOpened(prevOpened => !prevOpened)}>
                Filter by Region
                <ArrowSVG viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
                </ArrowSVG>
            </RegionDropdownButton>

            {opened && 
                <DropdownList>
                    {buttonArray.map(item => <DropdownListButton onClick={() => setRegionValue(item)} key={nanoid()}>{item}</DropdownListButton>)}
                </DropdownList>
            }
        </RegionContainer>
    )
}

export default RegionFilter;