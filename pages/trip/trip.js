import React, {useState} from 'react';
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/NavBar/navbar";
import {AiTwotoneCalendar} from "react-icons/ai";
import {RiHotelLine} from "react-icons/ri";
import {GiMeal} from "react-icons/gi";
import {FaTelegramPlane} from "react-icons/fa";
import {IoMdMap} from "react-icons/io";
import {GiModernCity} from "react-icons/gi";
import Scotland from "../../images/recommend_img/bora-bora.jpeg"
import {TripInfo, TripTitle, TripSubTitle,
    TripImage,Item, ItemInfo, TripContainer,
    TripDetails, TripWrapper, TripMain,
    Text, TextTitle, DescTitle, DescText,
    TripDescription, Desc, Info, DownPart,
    PriceInfo, ButtonTrip, BtnContainer,
    DropDownContainer, ListItem, DropDownHeader,
    DropDownList, DropDownListContainer, DateText

} from "./tripElements"

import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
import {Button} from "semantic-ui-react";
import {useLocation, useNavigate} from "react-router-dom";
import Dropdown from "react-dropdown";
import './trip.css'
import Trips from "../../components/models/Trips";

const Trip = () => {
    const location = useLocation().pathname;
    //
    const id = location.split("/")[2]
    const [data,setData] = useState(Trips.filter(item => item.id.toString() === id))


    console.log(data[0].first_info)


    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const [selectedOption, setSelectedOption] = useState(null)

    const options = ["Mangoes", "Apples", "Oranges"];
    const startDates = Object.keys(data[0].available_days)
    const endDates = Object.values(data[0].available_days)

    // const dict ={ "12.11.2022" : "20.11.2022",  "10.12.2022" :"18.12.2022"}
    // Object.keys(data[0].available_days).forEach(function(key) {
    //     console.log(key, data[0].available_days[key])
    // })
    const onOptionClicked = value => () => {

        setSelectedOption(value);
        setIsOpen(false);

    };
    return (
        <div>
            <Navbar></Navbar>
            <TripContainer>
                <TripWrapper>
                    <TripTitle>{data[0].nameTrip}</TripTitle>
                    <TripDetails>
                        <TripImage src={data[0].photos[0]}></TripImage>
                        <TripInfo>
                            <TripSubTitle>{data[0].first_info}</TripSubTitle>
                            <TripMain>
                                <Item>
                                    <TextTitle><AiTwotoneCalendar></AiTwotoneCalendar> Days</TextTitle>
                                    <ItemInfo>
                                        <Text>{data[0].days_number} days</Text>
                                    </ItemInfo>
                                </Item>
                                <Item>
                                    <TextTitle><RiHotelLine></RiHotelLine> Accommodation</TextTitle>

                                            <ItemInfo>
                                                {data[0].accommodation.map(item =>
                                                <Text>{item}</Text>
                                                )}
                                            </ItemInfo>

                                </Item>
                                <Item>
                                    <TextTitle> <GiMeal></GiMeal> Meals</TextTitle>
                                    <ItemInfo>
                                        {data[0].meals.map(item =>
                                            <Text>{item}</Text>
                                        )}
                                    </ItemInfo>
                                </Item>
                                <Item>
                                    <TextTitle> <FaTelegramPlane></FaTelegramPlane> Transport</TextTitle>
                                    <ItemInfo>
                                        {data[0].transport.map(item =>
                                            <Text>{item}</Text>
                                        )}
                                    </ItemInfo>

                                </Item>
                                <Item>
                                    <TextTitle> <IoMdMap></IoMdMap> Countries</TextTitle>
                                    <ItemInfo>
                                        {data[0].countries.map((item, i )=>
                                            <Text>{i+1}. {item}</Text>
                                        )}
                                    </ItemInfo>
                                </Item>
                                <Item>
                                    <TextTitle> <GiModernCity></GiModernCity> Cities</TextTitle>
                                    <ItemInfo>
                                        {data[0].cities.map((item, i) =>
                                            <Text>{i+1}. {item}</Text>
                                        )}
                                    </ItemInfo>
                                </Item>

                            </TripMain>
                            {/*<Dropdown*/}
                            {/*    className={"SelectionDate"}*/}
                            {/*    placeholder='Choose available Date'*/}

                            {/*    options={[ "Start Date : 12.11.2022     -      End Date :20.11.2022",  "Start Date :10.12.2022     -     End Date :18.12.2022"]}*/}

                            {/*    selection*/}
                            {/*    onChange={(e) => setSelectedDate(e.value)}*/}
                            {/*/>*/}
                            <DropDownContainer>
                                {selectedOption === null?
                                    (<DropDownHeader onClick={toggling}>Choose available Date</DropDownHeader>)
                                    : (<DropDownHeader onClick={toggling}>{selectedOption} - {data[0].available_days[selectedOption]}</DropDownHeader>)

                                }

                                {isOpen && (<DropDownListContainer>
                                    <DropDownList>
                                        {
                                            Object.keys(data[0].available_days).map((key, index) => (
                                                <ListItem onClick={onOptionClicked(key)}key={index}>
                                               <DateText key={index}>Start Date : {key}</DateText>
                                               <DateText key={index}>End Date : {data[0].available_days[key]}</DateText>
                                            </ListItem>
                                            ))}

                                        {/*<ListItem>*/}
                                        {/*    <DateText>Start Date : 12.11.2022</DateText>*/}
                                        {/*    <DateText>End Date : 12.11.2022</DateText>*/}
                                        {/*</ListItem>*/}

                                    </DropDownList>
                                </DropDownListContainer>)}
                            </DropDownContainer>


                        </TripInfo>
                    </TripDetails>
                    <TripDescription>
                        <Desc>
                            <DescTitle>Trip Description</DescTitle>
                            <DescText>{data[0].description}</DescText>
                        </Desc>
                            <Info>
                                <PriceInfo>Price: {data[0].price}$</PriceInfo>
                                <BtnContainer>
                                    <ButtonTrip style = {{backgroundColor: '#50d9b9', color: "#1e356d"}} onClick={() => navigate(-1)}>Go Back to Catalog</ButtonTrip>
                                    <ButtonTrip>Add to Card</ButtonTrip>
                                </BtnContainer>
                            </Info>
                            {/*<BookButton>Book Now!</BookButton>*/}
                    </TripDescription>
                </TripWrapper>
                <DownPart>
                    <MailList></MailList>
                    <Footer></Footer>
                </DownPart>


            </TripContainer>
        </div>
    );
};

export default Trip;