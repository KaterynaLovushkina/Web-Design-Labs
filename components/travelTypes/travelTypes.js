import React, {useState} from 'react';
import {ListItem, TypesList, TypeTitle, TypeImg, CountTripTypes} from './TravelElements'
import './travelTypes.css'
import hikingImg from '../../images/travel_types/hiking.jpeg';
import explorerImg from '../../images/travel_types/explorer.jpeg';
import cruiseImg from '../../images/travel_types/cruise.jpeg';
import christmasImg from'../../images/travel_types/christmas.jpeg';



import Trips from "../models/Trips";
const TravelTypes = () => {
    const [data, setData] = useState(Trips)

    const images = [hikingImg,explorerImg,cruiseImg,christmasImg]
    const types = [ "Hiking & Trekking","Explorer", "Cruise", "Christmas Holiday",]
    return (
        <TypesList>
            {
                (<>
                {images.map((item,i) =>
                    <ListItem className={'ListItem'}>
                    <TypeImg src={item}></TypeImg>
                    <TypeTitle>{types[i]}</TypeTitle>
                    <CountTripTypes>{data.filter(e => e.typeTrip === types[i]).length} tours</CountTripTypes>
                </ListItem> )}
            </>)}

        </TypesList>

    );
}

export default TravelTypes;