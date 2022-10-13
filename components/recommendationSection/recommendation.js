import React, {useState} from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {RecommendationList, ListImg, ListItem, ItemText} from './RecommendationElement'
import './recommendation.css'

import Trips from "../models/Trips";


const Recommendation = () => {
    const [data, setData] = useState(Trips)

    return (
        <RecommendationList>
            {
                (<>
                {data.filter(elem => elem.rating >= 4.5).map((item,i) =>
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
            </>)}
        </RecommendationList>)
}

export default Recommendation;