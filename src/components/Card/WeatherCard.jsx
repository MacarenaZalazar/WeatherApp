import React, {useState, useEffect} from 'react';
import { Card, CloseButton } from 'react-bootstrap';
import { CardContainer } from './styledCard';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavourite, deleteCity, deleteFavourite } from '../../redux/actions';
import {BsHeart, BsHeartFill} from 'react-icons/bs'


const WeatherCard = ({city}) => {
    const {name, img, temp, min, max} = city
    const [change, setChange] = useState(false)
    const dispatch = useDispatch()
    let {favourites} = useSelector(state => state)
    favourites = favourites.map(e => e.name)
    useEffect(()=>{}, [change])
    const setFavourite = (e) =>{
        e.preventDefault()
        dispatch(addFavourite(name))
        setChange(!change)
    }
    const unsetFavourite = (e) =>{
        e.preventDefault()
        dispatch(deleteFavourite(name))
        setChange(!change)
    }
    const handleClose = (e) =>{
        e.preventDefault()
       dispatch(deleteCity(name))
    }
    return (
        <CardContainer>{ city &&
            <Card style={{ width: '18rem' }}>
                <CloseButton onClick={(e)=> handleClose(e)} className='btnclose'/>
                <Card.Body>
                    <Card.Title>{name}     {''}    {favourites.includes(name) ? <BsHeartFill onClick={(e) => unsetFavourite(e)} /> : <BsHeart onClick={(e)=> setFavourite(e)}/>}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><img src={img} alt=""/> {temp}</Card.Subtitle>
                    <Card.Text>min: {min}   max: {max}</Card.Text>
                    <Link className='link' to={`/details/${name}`}>see more</Link>         
                </Card.Body>
                
            </Card>
            }
        </CardContainer>
    );
};

export default WeatherCard;