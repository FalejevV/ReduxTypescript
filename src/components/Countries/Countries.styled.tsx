import styled from "styled-components";

export const Page = styled.div`
    background-color: ${({ theme }) => theme.themeId === 0? theme.darkThemeBGOne : theme.lightThemeBGOne };
    transition: width 0s, background-color 0.3s;
    max-width: 100vw;
    width:100%;
    min-height: 100vh;
    height: 100%;
    font-family: 'Nunito Sans', sans-serif;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    overflow: hidden;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
`

export const SearchFilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    padding:0px 85px;
    padding-top: 50px;
    gap:30px;

    @media(max-width:900px){
        flex-direction: column;
        align-items: flex-start;
        padding:0px 25px;
        padding-top: 30px;
    }

`

export const CountriesGrid = styled.div`
    padding:0px 85px;
    width:100%;
    display: grid;
    row-gap:60px;
    justify-items: flex-start;
    align-items: flex-start;
    justify-content: space-between;
    grid-template-columns: repeat(4, 260px);
    padding-top: 50px;
    gap:60px;

    @media(max-width:1390px){
        grid-template-columns: repeat(4, 260px);
        gap:20px;
    }

    @media(max-width:1260px){
        grid-template-columns: repeat(3, 260px);
        gap:40px;
    }

    @media(max-width:1000px){
        grid-template-columns: repeat(2, 260px);
        justify-content: center;
        gap:40px;
    }

    @media(max-width:600px){
        grid-template-columns: repeat(1, 260px);
        justify-content: center;
        gap:40px;
    }
`