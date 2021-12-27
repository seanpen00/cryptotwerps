import React from "react";

import Logo from '../../assets/owl.png'
import il from '../../assets/OPENSEA_Banner.png'

//import css
import './header.css';

import {
    Container,
    Navbar,
    Nav,
} from 'react-bootstrap';


import './footer.css';

//import social icons
import { BsTwitter,
        BsDiscord,
        BsInstagram } from 'react-icons/bs';
//import components
import YButton from "../basic/YButton";
function onHomeClick() {
    document.getElementById("about").scrollIntoView();
}
function onMintClick() {
    document.getElementById("mint").scrollIntoView();
}
function onDiscordClick() {
    window.open("https://discord.gg/n3sGFyCbX6")
}
function onTwitterClick() {
    window.open("https://twitter.com/cryptotwerps")
}
function onRoadClick() {
    document.getElementById("roadmap").scrollIntoView();
}

function openSea() {
    window.open("https://opensea.io/"); 
}
function onBenefitsClick() {
    document.getElementById("faq").scrollIntoView();
}
class Header extends React.Component {
    render() {
        return (
            <>

                <div className='header-control'>
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img src={Logo} width={100} height={100} alt='logo' />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Nav>
                                <Nav.Link className="nav-item" onClick={onHomeClick}> 
                                        HOME
                                    </Nav.Link>
                                    <Nav.Link className="nav-item" onClick={onDiscordClick}>
                                        DISCORD
                                    </Nav.Link>
                                    <Nav.Link className="nav-item" onClick={onTwitterClick}>
                                        TWITTER
                                    </Nav.Link>
                                    <Nav.Link onClick={onMintClick}>
                                        MINT
                                    </Nav.Link>
                                    <Nav.Link onClick={onRoadClick}>
                                        ROADMAP
                                    </Nav.Link>
                                    <Nav.Link onClick={openSea}>
                                        OPENSEA
                                    </Nav.Link>
                                    <Nav.Link className="nav-item" onClick={onBenefitsClick}>
                                        BENEFITS
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className='header-content'>
                        <h1><img className="thePicture" src={il}/></h1>
                    <div className='header-content-buttons-container'>
                        {/* <YButton text='DISCORD' /> &nbsp;
                        <YButton text='TWITTER' /> */}
                    </div>
                    </div>
                    <div></div>
                </div>
            </>
        );
    }
}

export default Header;