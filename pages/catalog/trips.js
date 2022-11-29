import React, {useState, useEffect} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Navbar from "../../components/NavBar/navbar";
import {
    CatalogContainer, CatalogResult, CatalogSearch,
    CatalogWrapper, OptionInput, OptionItem, OptionsContainer,
    SearchButton, SearchInput, SearchItem, SearchSpan,
    SearchTitle, SearchContainer, DownPart
} from "./tripsElements"

import {useLocation} from "react-router-dom";
import {format} from "date-fns";
import DateRange from "react-date-range/dist/components/DateRange";


import Trips from "../../components/models/Trips";
import "./trips.css"
import SearchedTrip from "../../components/searchedTrip/searchedTrip";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";


const Catalog = () => {
    const location  = useLocation()
    const [destination, setDestination]= useState(location.state.destination)
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options)

    const [openDate,setOpenDate] = useState(false)

    const [data,setData] = useState(Trips)

    // console.log(date[0].startDate.toLocaleDateString())
    // console.log(destination)

   let newDestination = " "
    function handleChange(event) {
        newDestination = event.target.value;
    }


    const filterResultByType =(calItem) => {
        if (calItem === "All"){
            setData(Trips)
        }
        else{
            const result = Trips.filter((curData) => {
                return curData.typeTrip === calItem;
            })
            setData(result)
        }

    }
    const filterResultByPrice =(calItem) => {
        if (calItem === "Min"){
            const result = [...Trips].sort((a, b) => {
                return a.price > b.price ? 1 : -1
            })
            setData(result)
        }else{
            const result = [...Trips].sort((a, b) => {
                return a.price > b.price ? -1 : 1
            })
            setData(result)
        }

            }


    const filterResultByTransport =(calItem) => {
        if (calItem === "All"){
            setData(Trips)
        }
        else{
            const result = Trips.filter((curData) => {
                return curData.transport.some(tr => tr === calItem);
            })
            setData(result)
        }

    }

    const handleChangeInput = () => {
        if (newDestination !== " "){
            setDestination(newDestination)
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
                            <SearchButton onClick={() => handleChangeInput()}>Search</SearchButton>
                        </CatalogSearch>
                        <Dropdown
                                className={"DropTripTypes"}
                                placeholder='Choose Trip Travel'
                                options={[
                                    "All",
                                    "Hiking & Trekking",
                                    "Christmas Holiday",
                                    "Cruise",
                                    "Explorer"
                                ]}
                                selection
                                onChange={(e) =>filterResultByType(e.value)}
                            />
                            <Dropdown
                                className={"DropPrice"}
                                placeholder='Choose Type sorting by Price'
                                options={[
                                    "Min",
                                    "Max"
                                ]}
                                selection
                                onChange={(e) =>filterResultByPrice(e.value)}
                            />
                            <Dropdown
                                className={"DropTransport"}
                                placeholder='Choose Type sorting by Transport'
                                options={[
                                    "All",
                                    "Coach",
                                    "Flight",
                                    "Ferry",
                                    "Cruise"
                                ]}
                                selection
                                onChange={(e) =>filterResultByTransport(e.value)}
                            />


                    </SearchContainer>

                    <CatalogResult>
                        {
                            <>
                                {data.filter(item => item.cities.some(city => city === destination))
                                   .filter(item =>(Object.keys(item.available_days)).some(startdate => startdate === date[0].startDate.toLocaleDateString()))
                                   .filter(item =>(Object.values(item.available_days)).some(enddate => enddate === date[0].endDate.toLocaleDateString()))
                                    .map((trip) =>{
                                        return  <SearchedTrip item={trip} key={trip.id}></SearchedTrip>
                                    })
                                }
                                {destination === '' && data.map((trip) =>{
                                        return  <SearchedTrip item={trip} key={trip.id}></SearchedTrip>
                                    })
                                }

                            </>
                        }
                    </CatalogResult>
                </CatalogWrapper>
            </CatalogContainer>
            <DownPart>
                <MailList></MailList>
                <Footer></Footer>
            </DownPart>
        </div>
    )
}

export default Catalog