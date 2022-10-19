import React, {useState} from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {RecommendationList, ListImg, ListItem, ItemText, Button} from './RecommendationElement'
import './recommendation.css'

import Trips from "../models/Trips";


const Recommendation = () => {
    const [data, setData] = useState(Trips)
    const [next, setNext] = useState(3);
    const handleMoreTrips = () => {
        setNext(next + 2);
    };

    return (
        <RecommendationList>
            {
                (<>
                {data.filter(elem => elem.rating >= 4.0).slice(0, next).map((item,i) =>
                    <ListItem>
                        <ListImg key={item.id} src={item.photos[0]}></ListImg>
                        <ItemText>
                            <h3>{i+1}. {item.nameTrip}</h3>
                            <p>
                                <ReactReadMoreReadLess
                                    readMoreClassName='readLessMore'
                                    readLessClassName='readLessMore'
                                    charLimit={250}
                                    readMoreText="Show more ▼"
                                    readLessText="Show less ▲"
                                >
                                    {item.description}
                                </ReactReadMoreReadLess>

                            </p>
                        </ItemText>
                    </ListItem>)}
                    <Button
                        onClick={handleMoreTrips}
                    >
                        View more
                    </Button>
            </>)}
        </RecommendationList>)
}

export default Recommendation;