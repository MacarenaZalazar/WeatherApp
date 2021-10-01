import React from 'react';
import { useSelector } from 'react-redux';
import WeatherCard from '../../components/Card/WeatherCard';
import { ContainerDiv, NothingDiv, FavsDiv } from './styledCards';

const Favourites = () => {
    const {favourites} = useSelector(state => state)
    return (
        <FavsDiv>
            {favourites.length > 0 ?
            <ContainerDiv>
            {favourites && favourites.map((e, key) => {
                return <WeatherCard key={key} city={e} />
            })}
            </ContainerDiv>
            : 
            <NothingDiv>
                <h1>You have no favourites yet!</h1>
            </NothingDiv>}
            </FavsDiv>
    );
};

export default Favourites;