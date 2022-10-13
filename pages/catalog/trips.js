import React, {useState, useEffect} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Navbar from "../../components/NavBar/navbar";
import {
    CatalogContainer, CatalogResult, CatalogSearch,
    CatalogWrapper, OptionInput, OptionItem, OptionsContainer,
    SearchButton, SearchInput, SearchItem, SearchSpan,
    SearchTitle, SearchContainer, ButtonSearch, DropOptions
} from "./tripsElements"

import {useLocation} from "react-router-dom";
import {format} from "date-fns";
import DateRange from "react-date-range/dist/components/DateRange";
import SearchedTrip from "../../components/searchedTrip/searchedTrip";


import Trips from "../../components/models/Trips";
import "./trips.css"

const Catalog = () => {
    const location  = useLocation()
    const [destination, setDestination]= useState(location.state.destination)
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options)
    const [openDate,setOpenDate] = useState(false)
    const [data,setData] = useState(Trips)


    let newDestination = " "

    function handleChange(event) {
        newDestination = event.target.value;
        console.log(event.target)
    }

    const filterResult =(calItem) => {
        if (calItem === "All"){

            setData(Trips)
        }
        else{
            const result = Trips.filter((curData) => {
                return curData.typeTrip === calItem;
            });
            setData(result)
        }

    }


    return (
        <div>
            <Navbar></Navbar>
            <CatalogContainer>
                <CatalogWrapper>
                    <SearchContainer>
                        <CatalogSearch>
                            <SearchTitle>Search</SearchTitle>
                            <SearchItem>
                                <label style={{fontSize: '15px'}}>Destination</label>
                                <SearchInput placeholder={destination}
                                             type={'text'}
                                             onChange={handleChange}
                                ></SearchInput>
                            </SearchItem>
                            <SearchItem>
                                <label style={{fontSize: '15px'}}>Check-in and Check-out Date</label>
                                <SearchSpan onClick={() => setOpenDate(!openDate)}>
                                    {date && `${format(date[0].startDate, 'dd/MM/yyyy ') }
                                              to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                                </SearchSpan>
                                { openDate && <DateRange
                                    onChange={item => setDate([item.selection])}
                                    ranges={date}
                                    minDate={new Date()}
                                />}
                            </SearchItem>
                            <SearchItem>
                                <label style={{fontSize: '15px'}}>Options</label>
                                <OptionsContainer>
                                    <OptionItem>
                                        <span>Adult</span>
                                        <OptionInput type={'number'} placeholder ={options.adult} min={1}></OptionInput>
                                    </OptionItem>
                                    <OptionItem>
                                        <span>Children</span>
                                        <OptionInput type={'number'} placeholder ={options.children} min={0}></OptionInput>
                                    </OptionItem>
                                    <OptionItem>
                                        <span>Room</span>
                                        <OptionInput type={'number'} placeholder ={options.room} min={1}></OptionInput>
                                    </OptionItem>
                                </OptionsContainer>
                            </SearchItem>
                            <SearchButton onClick={() => setDestination(newDestination)}>Search</SearchButton>
                        </CatalogSearch>

                        <Dropdown
                            className={"DropDown"}
                            style={{"position":"sticky", "top":"200px"}}
                            placeholder='Choose Trip Travel'
                            options={[
                                "Hiking & Trekking",
                                "Christmas Holiday",
                                "Cruise",
                                "Explorer"
                            ]}
                            selection
                            onChange={(e) =>filterResult(e.value)}
                        />

                    </SearchContainer>

                    <CatalogResult>
                        {
                            <>
                                {data.map((item) => {
                                    for(let i = 0; i< item.cities.length; i++ ){
                                        if (item.cities[i] === destination){
                                            return  <SearchedTrip  item={item} key={item.id}/>
                                        }
                                        if(destination === ""){
                                            return  <SearchedTrip item={item} key={item.id}/>
                                        }
                                    }

                                }
                                )}
                            </>
                        }
                    </CatalogResult>
                </CatalogWrapper>
            </CatalogContainer>
        </div>
    )
}

export default Catalog