import React from 'react';
import {CountriesList, CountriesNames, CountryItem, ImagCountry} from './CountryElements'
const Countries = () => {
    return (
        <CountriesList>
            <CountryItem>
                <ImagCountry src={require('../../images/country_img/norway.jpg')}></ImagCountry>
                <CountriesNames>
                    <h1>Norway</h1>
                    <h2>215 properties</h2>
                </CountriesNames>
            </CountryItem>


            <CountryItem>
                <ImagCountry src={require('../../images/country_img/austria.jpg')}></ImagCountry>
                <CountriesNames>
                    <h1>Austria</h1>
                    <h2>110 properties</h2>
                </CountriesNames>
            </CountryItem>

            <CountryItem>
                <ImagCountry src={require('../../images/country_img/srilanka.jpg')}></ImagCountry>
                <CountriesNames>
                    <h1>Sri Lanka</h1>
                    <h2>180 properties</h2>
                </CountriesNames>
            </CountryItem>

        </CountriesList>
    );
};

export default Countries;