import React, {useEffect} from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../redux/actions';
import { DetailsContainer } from './styledCard';

const WeatherDetails = (props) => {
    const cityName = props.match.params.name
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDetails(cityName))
    }, [cityName, dispatch])
    const {cityDetails} = useSelector(state => state)
    return (
            <DetailsContainer>
            {cityDetails && cityDetails[0] ?
            <>
            <Card style={{ width: '25rem', height: '30rem' }}>
            <Card.Body>
                <Card.Title>{cityDetails[0].name}
                <img src={cityDetails[0].img} alt="" />
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Actual temp: {cityDetails[0].temp}ºC</Card.Subtitle>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> Min: {cityDetails[0].min}ºC     Max: {cityDetails[0].max}ºC</ListGroupItem>
                    <ListGroupItem>Latitud: {cityDetails[0].latitud}º  </ListGroupItem>
                    <ListGroupItem>Longitud: {cityDetails[0].longitud}º</ListGroupItem>
                    <ListGroupItem>Weather: {cityDetails[0].weather}</ListGroupItem>
                    <ListGroupItem>Clouds: {cityDetails[0].clouds}%</ListGroupItem>
                    <ListGroupItem>Wind: {cityDetails[0].wind}</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                </ListGroup>
                <Link className='link' to="/home">Go back</Link>
                {/* <Link to="#">Another Link</Link> */}
            </Card.Body>
            </Card>
            </> : <h1>Loading...</h1>
}
            </DetailsContainer>
    );
};

export default WeatherDetails;