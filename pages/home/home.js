import React, {useState} from 'react';
import Navbar from "../../components/NavBar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import Hero from "../../components/heroSection/hero";
import {HomeContainer, TitleSection, DownPart} from './homeElements'
import Countries from "../../components/countrySection/countries";
import TravelTypes from "../../components/travelTypes/travelTypes";
import Recommendation from "../../components/recommendationSection/recommendation";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen ={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <Hero></Hero>
            <HomeContainer>
                <Countries></Countries>
                <TitleSection>Choose your type of adventure</TitleSection>
                <TravelTypes></TravelTypes>
                <TitleSection>Our most recommended Travel Tours</TitleSection>
                <Recommendation></Recommendation>
                <DownPart>
                    <MailList></MailList>
                    <Footer></Footer>
                </DownPart>

            </HomeContainer>


        </div>
    );
};

export default Home;