import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeSwitchButton from "./ThemeSwitchButton";

const HeaderContainer = styled.div`
    width:100%;
    height:80px;
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.themeId === 0? theme.darkThemeBGTwo : theme.lightThemeBGTwo};
    font-family: 'Nunito Sans', sans-serif;
    box-shadow: ${({ theme }) => theme.boxShadow};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 85px;

    @media(max-width:900px){
        font-size: 16px;
        padding: 0px 30px;
    }


`

const TitleHeader = styled(Link)`
    white-space: nowrap;
    transition: all 0.3s;
    color: ${({ theme }) => theme.themeId === 0? theme.darkThemeFontColor : theme.lightThemeFontColor};
    font-weight: 700;
    font-size: 23px;
    text-decoration: none;

    @media(max-width:900px){
        font-size: 16px;
    }
`

function Header(props:{
    setTheme: Function,
}){
    return (
        <HeaderContainer>
            <TitleHeader to="/countries">Where in the world?</TitleHeader>
            <ThemeSwitchButton setTheme={props.setTheme} />
        </HeaderContainer>
    )
}

export default Header;