import { nanoid } from "@reduxjs/toolkit";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { ICountry } from "../../../features/countries.slice";
import DataText from "../DataText";

const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    font-family: 'Nunito Sans', sans-serif;
    padding:85px;
    gap:85px;

    @media(max-width:900px){
        padding:25px;
        gap:30px;
    }

`

const LinkButton = styled(Link)`
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.themeId === 0 ? theme.darkThemeBGTwo : theme.lightThemeBGTwo};
    color: ${({ theme }) => theme.themeId === 0 ? theme.darkThemeFontColor : theme.lightThemeFontColor};
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    max-width: 140px;
    width:100%;
    height:40px;
    border:0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 5px;
    padding-right: 10px;
    text-decoration: none;
    margin-bottom: 30px;
`

const BackSVG = styled.svg`
    padding:2px;
    transition: all 0.3s;
    fill: ${({ theme }) => theme.themeId === 0 ? theme.darkThemeFontColor : theme.lightThemeFontColor};
`

const OverviewContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;

    @media(max-width:1340px){
        flex-direction: column;
    }
`

const FlagImage = styled.img`
    max-width: 560px;
    width:100%;
    height:400px;
    object-fit: cover;
    box-shadow: ${({ theme }) => theme.boxShadow};

    @media(max-width:900px){
        height:auto;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    width:590px;
    padding: 50px 20px;

    @media(max-width:900px){
        width:100%;
        padding:30px 0px;
    }

`

const Title = styled.p`
    color: ${({ theme }) => theme.themeId === 0 ? theme.darkThemeFontColor : theme.lightThemeFontColor};
    font-family: 'Nunito Sans', sans-serif;
    font-size: 28px;
    font-weight: 700;
`

const DataGrid = styled.div`
    padding-top: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:15px;

    @media(max-width:900px){
        grid-template-columns: 1fr;
    }
`

const BorderContainer = styled.div`
    padding-top: 55px;
    display: flex;
    width:100%;
    align-items: center;
    gap:10px;
    flex-wrap: wrap;
`

const BordersTitle = styled(Title)`
    font-size: 16px;
    font-weight: 600;
`

const BorderButton = styled(LinkButton)`
    font-size: 12px;
    padding: 5px 20px;
    height:30px;
    width:auto;
    margin-bottom: 0px;
`

function CountryOverview(){
    const { countryName } = useParams();
    const countryFound = useAppSelector((state: RootState) => state.countries.countries.filter((item : ICountry)=> item.name.common === countryName))[0];
    const countries = useAppSelector((state: RootState) => state.countries.countries);
    console.log(countryFound);
    console.log(countryName);
    function joinCurrencies(obj:{
        [key: string]: {
            [key :string]: string,
        },
    }, keyName:string){
        let resArray: string[] = [];
        for (const [key, value] of Object.entries(obj)) {
            resArray.push(obj[key][keyName]);
        }
        return resArray.join(", ");
    }

    function joinLanguages(){
        let resultArray: string[] = [];
        Object.entries(countryFound.languages).forEach(([key, value]) => {
            resultArray.push(value);
        });
        return resultArray.join(",  ");
    }


    function getBorderCountries(){
        let countriesResult: ICountry[] = [];
        countryFound.borders.forEach(border => countriesResult.push(countries.filter(country => country.cca3 === border)[0]));
        console.log(countriesResult);
        if(countriesResult.length > 0){
            return countriesResult.map((item: ICountry) => <BorderButton key={nanoid()} to={"/countries/" + item.name.common}>{item.name.common}</BorderButton>)
        }else{
            return "";
        }
    }

    return(
        <Container>
            <LinkButton to="/countries">
                <BackSVG viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/>
                </BackSVG>
                Back
            </LinkButton>
            {countryFound &&
                <OverviewContainer>
                    <FlagImage src={countryFound.flags.svg} />

                    <Info>
                        <Title>{countryFound.name.common}</Title>
                        <DataGrid>
                            <DataText fontSize={"15px"} title="Native Name" info={countryFound.altSpellings[1] ||  countryFound.altSpellings[0]} />
                            <DataText fontSize={"15px"} title="Top Level Domain" info={countryFound.tld?.join(", ") || "None"} />
                            <DataText fontSize={"15px"} title="Population" info={countryFound.population.toLocaleString()} />
                            <DataText fontSize={"15px"} title="Currencies" info={joinCurrencies(countryFound.currencies, "symbol")} />
                            <DataText fontSize={"15px"} title="Region" info={countryFound.region} />
                            <DataText fontSize={"15px"} title="Languages" info={joinLanguages()} />
                            <DataText fontSize={"15px"} title="Sub Region" info={countryFound.subregion} />
                            <br/>
                            <DataText fontSize={"15px"} title="Capital" info={countryFound.capital} />
                        </DataGrid>

                        {countryFound.borders !== undefined && countryFound.borders.length > 0 &&
                            <BorderContainer>
                                <BordersTitle>Border Countries:</BordersTitle>
                                {getBorderCountries()}
                            </BorderContainer>
                        }
                    </Info>
                </OverviewContainer>
            }
        </Container>
    )
}

export default CountryOverview;