import React from 'react';
import {ListItem, TypesList, TypeTitle, TypeImg} from './TravelElements'
import './travelTypes.css'
const TravelTypes = () => {
    return (
        <TypesList>
            <ListItem className={'ListItem'}>
                <TypeImg src={require('../../images/travel_types/hiking.jpeg')}></TypeImg>
                <TypeTitle >Hiking & Trekking</TypeTitle>
            </ListItem>
            <ListItem className={'ListItem'}>
                <TypeImg src={require('../../images/travel_types/explorer.jpeg')}></TypeImg>
                <TypeTitle>Explorer</TypeTitle>
            </ListItem>

            <ListItem className={'ListItem'}>
                <TypeImg src={require('../../images/travel_types/cruise.jpeg')}></TypeImg>
                <TypeTitle>Cruise</TypeTitle>
            </ListItem>

            <ListItem className={'ListItem'}>
                <TypeImg src={require('../../images/travel_types/christmas.jpeg')}></TypeImg>
                <TypeTitle>Christmas Markets</TypeTitle>
            </ListItem>

        </TypesList>

    );
};

export default TravelTypes;