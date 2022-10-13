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
    TripDescription, Desc, Info, DownPart

} from "./tripElements"

import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";


const Trip = () => {
    const [selected, setSelected] = useState('')
    const handleChange = event => {
        setSelected(event.target.value);
    }
    const dict ={"12.11.22" : 2.285, "10.12.22" : 2.299}
    Object.keys(dict).forEach(function(key) {
        console.log(key, dict[key])
    })
    return (
        <div>
            <Navbar></Navbar>
            <TripContainer>
                <TripWrapper>
                    <TripTitle>SIMPLY ITALY</TripTitle>
                    <TripDetails>
                        <TripImage src={Scotland}></TripImage>
                        <TripInfo>
                            <TripSubTitle>The one that gives you 15 days of pure Italian bliss</TripSubTitle>
                            <TripMain>
                                <Item>
                                    <TextTitle><AiTwotoneCalendar></AiTwotoneCalendar> Days</TextTitle>
                                    <ItemInfo>
                                        <Text>12 days</Text>
                                    </ItemInfo>
                                </Item>
                                <Item>
                                    <TextTitle><RiHotelLine></RiHotelLine> Accommodation</TextTitle>
                                    <ItemInfo>
                                        <Text>14 nights in Hotels</Text>
                                    </ItemInfo>
                                </Item>
                                <Item>
                                    <TextTitle> <GiMeal></GiMeal> Meals</TextTitle>
                                    <ItemInfo>
                                        <Text>14 Breakfasts, 4 Dinners</Text>
                                    </ItemInfo>
                                </Item>
                                <Item>
                                    <TextTitle> <FaTelegramPlane></FaTelegramPlane> Transport</TextTitle>
                                    <ItemInfo>
                                        <Text>Coach</Text>
                                    </ItemInfo>
                                </Item>
                                <Item>
                                    <TextTitle> <IoMdMap></IoMdMap> Countries</TextTitle>
                                    <ItemInfo>
                                        <Text>1. Ukraine</Text>
                                        <Text>1. Ukraine</Text>
                                    </ItemInfo>
                                </Item>
                                <Item>
                                    <TextTitle> <GiModernCity></GiModernCity> Cities</TextTitle>
                                    <ItemInfo>
                                        <Text>1. Kyiv</Text>
                                        <Text>1. Lviv</Text>
                                    </ItemInfo>
                                </Item>
                            </TripMain>

                        </TripInfo>
                    </TripDetails>
                    <TripDescription>
                        <Desc>
                            <DescTitle>Trip Description</DescTitle>
                            <DescText>Welcome to 15 days of pure Italian travel immersion. Covering Rome, Florence, Milan, Venice and beyond,
                                this one brings you the blissful best of this soul-stirring country. Explore Rome's historical highlights,
                                travel through the streets of Michelangelo's Florence, soak up some rays on the Amalfi and that's just an aperitivo.
                                Beauty, romance and all the pasta you can fit in;
                                the good life just got even better. That's amore!</DescText>
                        </Desc>
                            <Info>

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