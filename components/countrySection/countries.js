import React, {useState} from 'react';
import {CountriesList, CountriesNames, CountryItem, ImagCountry} from './CountryElements'
import Trips from "../models/Trips";
import {CountTripTypes, ListItem, TypeImg, TypeTitle} from "../travelTypes/TravelElements";
import norway from '../../images/country_img/norway.jpg'
import austria from '../../images/country_img/austria.jpg'
import sriLanka from '../../images/country_img/srilanka.jpg'
import SearchedTrip from "../searchedTrip/searchedTrip";

const Countries = () => {
    const [data, setData] = useState(Trips)
    const images = [norway,austria,sriLanka]
    const countries = ["Norway", "Austria", "Sri Lanka"]


    const countTripsByCountries = (countryName) =>{
        let countCountry = 0;
        data.map((item) => {
            for(let i = 0; i< item.countries.length; i++ ){
                if(item.countries[i] === countryName){
                    countCountry=countCountry+1
                }}

        })
        return countCountry
    }


    return (
        <CountriesList>
            {
                (<>
                    {images.map((i,p) =>
                        <CountryItem>
                            <ImagCountry src={i}></ImagCountry>
                            <CountriesNames>
                                <h1>{countries[p]}</h1>
                                <h2>{countTripsByCountries(countries[p])} properties</h2>
                            </CountriesNames>
                        </CountryItem>)}
                </>)}

        </CountriesList>
    );
}

export default Countries;