import React from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {RecommendationList, ListImg, ListItem, ItemText} from './RecommendationElement'
import './recommendation.css'

const Recommendation = () => {

    return (
        <RecommendationList>
            <ListItem>
                <ListImg src={require('../../images/recommend_img/newzeland.jpeg')}></ListImg>
                <ItemText>
                    <h3>1. South Island, New Zealand</h3>
                    <p>
                        <ReactReadMoreReadLess
                            readMoreClassName = 'readLessMore'
                            readLessClassName = 'readLessMore'
                            charLimit ={250}
                            readMoreText ="Show more ▼"
                            readLessText ="Show less ▲"
                          >
                        New Zealand's South Island brims with majestic landscapes at every turn,
                        from dramatic mountains to spectacular fjords. Here, you can admire the mountains of
                        Fiordland National Park, a UNESCO World Heritage Site, from hiking trails or a boat on Milford Sound.
                        At night, journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies.
                        You can also indulge your inner daredevil in Queenstown (a favorite destination among bungee jumpers),
                        sample delicious sauvignon blanc wine in the Marlborough region or explore New Zealands most accessible glaciers – Franz Josef and Fox Glacier – on the islands west coast.'
                        </ReactReadMoreReadLess>

                    </p>
                </ItemText>
            </ListItem>
            <ListItem>
                <ListImg src={require('../../images/recommend_img/bora-bora.jpeg')}></ListImg>
                <ItemText>
                    <h3>2. Bora Bora</h3>
                    <p>
                        <ReactReadMoreReadLess
                            readMoreClassName = 'readLessMore'
                            readLessClassName = 'readLessMore'
                            charLimit ={250}
                            readMoreText ="Show more ▼"
                            readLessText ="Show less ▲"
                        >
                            What this small French Polynesian island may lack in size it makes up for in sheer tropical beauty.
                            Here, you'll find picturesque beaches, lush jungles and luxurious resorts. The island's extinct volcano,
                            Mount Otemanu, makes for a great photo-op or challenging hike, and the friendly Bora Bora locals can help
                            you catch a glimpse of the island's best sights during an off-road excursion. To relax, head to
                            Matira Beach for crystal-clear water and soft white sand. Although a trip to Bora Bora is very expensive,
                            most travelers say it's worth every penny.
                        </ReactReadMoreReadLess>

                    </p>
                </ItemText>
            </ListItem>
            <ListItem>
                <ListImg src={require('../../images/recommend_img/tahity.jpeg')}></ListImg>
                <ItemText>
                    <h3>3. Tahiti</h3>
                    <p>
                        <ReactReadMoreReadLess
                            readMoreClassName = 'readLessMore'
                            readLessClassName = 'readLessMore'
                            charLimit ={250}
                            readMoreText ="Show more ▼"
                            readLessText ="Show less ▲"
                        >
                            Travel to this island – the largest in French Polynesia – if you've been dreaming
                            of a vacation spent lazing in a lavish overwater bungalow. Beyond the posh resorts,
                            Tahiti boasts black sand and golden beaches, a bustling capital and prime snorkeling
                            and surfing conditions. If you're looking for more cultural experiences, check out some
                            of the island's ancient temples or shop at its traditional indoor markets. To save money,
                            opt to stay in a vacation rental – the island is home to plenty of cute bungalows and chic condos.

                        </ReactReadMoreReadLess>

                    </p>
                </ItemText>
            </ListItem>
            <ListItem>
                <ListImg src={require('../../images/recommend_img/london.webp')}></ListImg>
                <ItemText>
                    <h3>4. London</h3>
                    <p>
                        <ReactReadMoreReadLess
                            readMoreClassName = 'readLessMore'
                            readLessClassName = 'readLessMore'
                            charLimit ={250}
                            readMoreText ="Show more ▼"
                            readLessText ="Show less ▲"
                        >
                            London is a world unto itself. The eclectic neighborhoods, which are home to a blend
                            of historical landmarks and modern-day attractions, can keep you occupied for days.
                            If it's your first time in London, plan to see the top spots, such as the Tower of London,
                            the Tate Modern art institution, Buckingham Palace, Borough Market and the British Museum,
                            before sitting down to a classic afternoon tea or checking out a local pub. The best
                            time to travel to London is during the warmer months, but be warned that this is also the busiest
                            and most expensive time of year.
                        </ReactReadMoreReadLess>

                    </p>
                </ItemText>
            </ListItem>

        </RecommendationList>
    );
};

export default Recommendation;