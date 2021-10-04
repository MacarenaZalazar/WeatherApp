import React, {useEffect} from 'react';
import { HeroContainer } from './Styles';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
import { setFlag } from '../../redux/actions';

const Hero = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(setFlag(false))
    }, [dispatch])
    return (
        <>
            <HeroContainer>
                <h1>Welcome to the <span>WeatherApp</span></h1>
                <Link to='/home'>
                    <Button size='large' variant='outline-dark'>Let's go</Button>
                </Link>
            </HeroContainer>
        </>
    );
};

export default Hero;