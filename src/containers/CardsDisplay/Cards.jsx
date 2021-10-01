import React from 'react';
import { useSelector } from 'react-redux';
import WeatherCard from '../../components/Card/WeatherCard';
import { ContainerDiv, NothingDiv  } from './styledCards';

const Cards = () => {
    const {cities} =  useSelector(state => state)
    return (
        <>
        {cities.length > 0 ?
        <ContainerDiv>
        {cities && cities.map((e, key) => {
            return <WeatherCard key={key} city={e} />
        })}
        </ContainerDiv>
        : 
        <NothingDiv>
            <h1>Here you'll find your city!</h1>
        </NothingDiv>}
    </>
    );
};

export default Cards;