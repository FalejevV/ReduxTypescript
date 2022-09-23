import { Link } from "react-router-dom";
import styled from "styled-components";
import DataText from "./DataText";

const CardContainer = styled(Link)`
    max-width: 270px;
    width:100%;
    height: 340px;
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.themeId === 0? theme.darkThemeBGTwo : theme.lightThemeBGTwo };
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
`

const FlagImage = styled.img`
    width:100%;
    height:160px;
    object-fit: cover;
`

const CardInfo = styled.div`
    width:100%;
    height:180px;
    display:flex;
    flex-direction: column;
    padding:25px;
    gap:5px;
`

const CardTitle = styled.p`
    font-family: 'Nunito Sans', sans-serif;
    color: ${({ theme }) => theme.themeId === 0? theme.darkThemeFontColor : theme.lightThemeFontColor};
    font-weight: 600;
    font-size:  18px;
    padding-bottom: 10px;
`


function CountryCard(props:{
    image:string,
    title:string,
    population:string,
    region:string,
    capital:string,
}){
    return(
        <CardContainer to={props.title}>
            <FlagImage src={props.image} />

            <CardInfo>
                <CardTitle>{props.title}</CardTitle>
                <DataText title="Population" info={props.population} />
                <DataText title="Region" info={props.region} />
                <DataText title="Capital" info={props.capital} />
            </CardInfo>
        </CardContainer>
    )
}

export default CountryCard;