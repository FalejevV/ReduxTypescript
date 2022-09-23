import styled, { css } from "styled-components";

const ThemeSwitchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height:fit-content;
    cursor: pointer;
    padding:10px 0px;
    overflow: hidden;
    font-family: 'Nunito Sans', sans-serif;
    position: relative;
    max-width: 160px;
    width:100%;
`

const ThemeSVG = styled.svg`
    padding:4px;
    transition: all 0.3s;
    fill: ${({ theme }) => theme.themeId === 0? theme.darkThemeFontColor : theme.lightThemeFontColor};

    @media(max-width:400px){
        padding:5px;
    }

`

const ThemeTitle = styled.p`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s;
    color: ${({ theme }) => theme.themeId === 0? theme.darkThemeFontColor : theme.lightThemeFontColor};

    @media(max-width:900px){
        font-size: 14px;
    }

    @media(max-width:400px){
        font-size: 12px;
    }
    
`

const DarkThemeContainer = styled.div`
    width:100%;
    right:0;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap:5px;
    transition: all 0.3s;
    ${({ theme }) => theme.themeId === 0 && css`
        transform: translate(0,0);
    `}

    ${({ theme }) => theme.themeId === 1 && css`
        transform: translate(0,-150%);
    `}

    @media(max-width:400px){
        gap:0px;
    }

`

const LightThemeContainer = styled(DarkThemeContainer)`
    ${({ theme }) => theme.themeId === 0 && css`
        transform: translate(0,150%);
    `}

    ${({ theme }) => theme.themeId === 1 && css`
        transform: translate(0,0);
    `}
`



function ThemeSwitchButton(props : {
    setTheme: Function,
}){
    return(
        <ThemeSwitchContainer onClick={() => props.setTheme((prevTheme:number) => prevTheme === 0 ? 1 : 0)}>
            <DarkThemeContainer>
                <ThemeSVG viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"/>
                </ThemeSVG>
                <ThemeTitle>Dark Mode</ThemeTitle>
            </DarkThemeContainer>

            <LightThemeContainer>
                <ThemeSVG viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/>
                </ThemeSVG>
                <ThemeTitle>Light Mode</ThemeTitle>
            </LightThemeContainer>
        </ThemeSwitchContainer>
    )
}

export default ThemeSwitchButton;