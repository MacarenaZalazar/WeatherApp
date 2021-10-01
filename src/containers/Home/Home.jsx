import React, {useEffect} from 'react';
import { setFlag } from '../../redux/actions';
import Cards from '../CardsDisplay/Cards';
import { useDispatch } from 'react-redux';
import { HomeDiv } from './StyledHome';
const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setFlag(true))
    }, [dispatch])
    return (
        <HomeDiv>
            <Cards/>
        </HomeDiv>
    );
};

export default Home;