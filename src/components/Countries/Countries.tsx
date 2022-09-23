import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useAppDispatch } from "../../app/hooks";
import { requestCountries } from "../../features/countries.slice";
import { Container, Page } from "./Countries.styled";
import Header from "./Header";
import CountryOverview from "./Pages/CountryOverview";
import HomePage from "./Pages/HomePage";

const theme = {
    darkThemeBGOne: "#212E37",
    darkThemeBGTwo: "#2B3743",
    lightThemeBGOne: "#FAFAFA",
    lightThemeBGTwo: "#FFFFFF",
    darkThemeFontColor: "#FFFFFF",
    lightThemeFontColor: "#000000",
    boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.1)",
}

function Countries(){
    const [themeId, setThemeId] = React.useState(0);
    const dispatch = useAppDispatch();
    
    React.useEffect(() => {
        dispatch(requestCountries());
    }, [])
    return(
            <ThemeProvider theme={{...theme, themeId}}>
                <Page>
                    <Container>
                        <Header setTheme={setThemeId}/>
                        
                            <Routes>
                                <Route path="*" element={<HomePage />}/>

                                <Route path=":countryName" element={
                                    <CountryOverview />
                                } />
                            </Routes>
                    </Container>
                </Page>
            </ThemeProvider>
    )
}

export default Countries;