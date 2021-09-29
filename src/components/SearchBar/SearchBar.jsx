import React, { useState } from 'react';
import {Button, Form, FormControl, Navbar, Nav, Container} from 'react-bootstrap'
import {BsHeart} from 'react-icons/bs'
import './SearchBar.css'
import { useDispatch } from 'react-redux';
import { getCity } from '../../redux/actions';



const SearchBar = () => {
    const [city, setCity] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setCity(e.target.value)

    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(getCity(city))

    }

    return (
        <div className='searchbarContainer'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='navBar'>
                <Container >
                    <Navbar.Brand>The Weather App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='navItems'>
                            <Nav.Link>Favourites <BsHeart/></Nav.Link>
                            <Navbar.Text>Find your city</Navbar.Text>
                            <Form className="d-flex" onSubmit={(e) => handleSubmit(e)} >
                            <FormControl onChange={(e)=>handleChange(e)} type="search" placeholder="Search" className="mr-2" aria-label="Search" />
                            <Button variant="dark">Search</Button>
                        </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
    );
};

export default SearchBar;