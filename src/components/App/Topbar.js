import React from 'react'

//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

//import fire from firebase authen


//import bootstrap components

import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'


const Topbar = () => {

    

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/login">HOME</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Topbar