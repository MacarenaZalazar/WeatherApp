import React, { useState } from 'react';
import {Button, Form, FormControl, Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCity } from '../../redux/actions';
import { SearchbarContainer } from './styledSearchbar';
import Logo from'../../utils/sun.png'
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const [city, setCity] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setCity(e.target.value)
    }
    const {cities} = useSelector(state => state)
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(city.length>0){
            const names = cities.map(e => e.name.toLowerCase())
            history.push('/home')
            if(names.includes(city.toLowerCase())){
                setCity('') 
            } else{
                dispatch(getCity(city))
                setCity('')
            }
        }
    } 

    return (
        <>
            <SearchbarContainer>
                <Navbar collapseOnSelect  bg="light" expand="lg" variant='light'>
                    <Container>
                        <Navbar.Brand><img alt="" src={Logo} width="30"height="30"
                        className="d-inline-block align-top"/> The Weather App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"></Nav>
                            <Nav>
                                <Link className='nav-link' to='/home'>Home</Link>
                                <Link  className='nav-link' to='/favourites'>Favourites</Link>
                                <Form className="d-flex"onSubmit={(e) => handleSubmit(e)} >
                                    <FormControl onChange={(e) => handleChange(e)} type="search" value={city}
                                    placeholder="Search your city" className="mr-2" aria-label="Search" />
                                    <Button type='submit' variant="outline-dark" className={city.length<1 && 'disabled'}>Search</Button>
                                </Form>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </SearchbarContainer>
        </>
    );
};

export default SearchBar;