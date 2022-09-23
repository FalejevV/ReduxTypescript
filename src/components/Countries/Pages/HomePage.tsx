import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { ICountry } from "../../../features/countries.slice";
import { CountriesGrid, SearchFilterContainer } from "../Countries.styled";
import CountryCard from "../CountryCard";
import RegionFilter from "../RegionFilter";
import SearchFieldInput from "../SearchFieldInput";


function HomePage(){
    const countries = useAppSelector((state : RootState) => state.countries.countries);
    const searchFilter = useAppSelector((state : RootState) => state.countries.searchFilter);
    const regionFilter = useAppSelector((state : RootState) => state.countries.regionFilter);


    function filterCountries(){
        if(countries.length > 0){
            const searchFilterResult = countries.filter((country: ICountry)=> country.name.common.includes(searchFilter));
            const regionFilterResult = searchFilterResult.filter((country: ICountry) => country.region.includes(regionFilter));
            if(regionFilterResult.length > 0){
                return regionFilterResult.map(item => <CountryCard key={nanoid()} image={item.flags.svg} title={item.name.common} population={item.population} region={item.region} capital={item.capital} />)
            }
        }
        return "";
    }
    return(
        <>
            <SearchFilterContainer>
                <SearchFieldInput />
                <RegionFilter/>
            </SearchFilterContainer>
            
            <CountriesGrid>
                {filterCountries()}
            </CountriesGrid>
        </>
    )
}

export default HomePage;