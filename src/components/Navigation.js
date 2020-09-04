import React from "react";
import styled from "styled-components";

import menu from "../images/menu.svg";
import search from "../images/searc.svg";
import logo from "../images/Logo.svg";
import account from "../images/account.svg";
import shoppingCart from "../images/cart.svg";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagramSquare, faTwitter, faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(faFacebookSquare, faInstagramSquare, faTwitter, faWhatsapp, faInstagram);   

class Navigation extends React.Component {
    render(){
        return (
            <NavContainer>
                <MobileMenu>
                    <div className = "menu">
                        <img className = "svg" src = {menu} alt = "menu" />
                    </div>
                    <div className = "search-button">
                        <img className = "svg" src = {search} alt = "search"/>
                    </div>
                    <div className = "logo">
                        <img className = "logoImage" src = {logo} alt = "logo"/>
                    </div>
                    <div className = "user-profile">
                        <img className = "svg" src = {account} alt = "user profice"/>
                    </div>
                    <div className = "shopping-cart">
                        <img className = "svg" src = {shoppingCart} alt = "shopping cart"/>
                    </div>
                </MobileMenu>
                <TopMenu>
                    <div className = "content-container">
                        <div className = "social-media">
                            <ul>
                                <li> <FontAwesomeIcon icon={['fab', 'twitter']} /> </li>
                                <li> <FontAwesomeIcon icon={['fab', 'facebook-square']} /> </li>
                                <li> <FontAwesomeIcon icon={['fab', 'whatsapp']} /> </li>
                                <li> <FontAwesomeIcon icon={['fab', 'instagram']} /> </li>
                            </ul>
                        </div>
                        <div className = "login">
                            <p> Login/Register</p>
                            <img src = {account} alt = "user profile"/>
                        </div>
                        <div className = "shopping-cart">
                            <img src =  {shoppingCart} alt = "shopping-cart"/> 
                            <p> 1 </p>
                        </div>
                    </div>
                </TopMenu>
                <DesktopMenu>
                    <div className = "logo">
                        <img className = "logoImage" src = {logo} alt = "logo"/>
                    </div>
                    <ul>
                        <li> Contact Lenses </li>
                        <li> Solution & Lens care </li>
                        <li> Eye Health </li>
                        <li> About us </li>
                        <li> Take the contact lens quiz </li> 
                    </ul>
                    <div className = "searchBarContainer">
                        <p> Search </p>
                        <img src = {search} alt = "search-bar"/>
                    </div>
                </DesktopMenu>
            </NavContainer>
        )
    }
}

const NavContainer = styled.div`
background: #0c1d38;
`

const MobileMenu = styled.div`

padding: 10px 20px;
@media only screen and (min-width: 800px){
    display: none;
}
@media only screen and (max-width: 800px){
    display: flex;
    justify-content: space-between;
    align-items: center;
}
div{
    .svg{
        height: 25px;
        width: 25px;
        @media only screen and (max-width: 440px){
            height: 18px;
            width: 18px;
        }
    }
}

.menu{

}
.search-button{

}
.logo{
    .logoImage{
        @media only screen and (max-width: 450px){
            width: 140px;
        }
    }
}
.user-profile{

}
.shopping-cart{

}
`

const DesktopMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 90%;
    margin: 0 auto;
    @media only screen and (max-width: 800px){
        display: none;
    }
    ul{
        list-style: none;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            padding: 0 14px;
        }
    }
    .searchBarContainer{
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid white;
        border-radius: 50px;
        padding: 0 20px;

        p{
            padding-right: 120px;
            margin: 12px 0;
        }
    }
`
const TopMenu = styled.div`
    @media only screen and (max-width: 800px){
        display: none;
    }
    background: lightgrey;


    .content-container{
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .social-media{
        display: flex;
        align-items: center;
        ul{
            list-style: none;
            display: flex;
            justify-content: normal;
            align-items: center;
            margin: 0;
            li{
                color: white;
                margin: 0px 6px;
                padding: 4px;
                border-radius: 100px;
                background: grey;
                height: 20px;
                width: 20px;
                text-align: center;
            }
        }
    }
    .login{
        display: flex;
        justify-content: normal;
        align-items: center;
        color: #4a4a4a;
        img{
            color: #4a4a4a;
        }
    }
    .shopping-cart{
        display: flex;
        justify-content: normal;
        align-items: center;
        color: #4a4a4a;
    }
`

export default Navigation;