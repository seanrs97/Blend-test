import React from "react";
import styled from "styled-components";

import ShopComponent from "./shopComponent.js";


class MainContent extends React.Component {
    render(){
        return (
            <Container>
                <SectionOne>
                    <img src = "../images/mainContent1.png"/>
                    <div className = "text-container">
                        <p className = "small-text"> The London Lens Company </p>
                        <h1> Experience your vision like never before. </h1>
                        <p className = "gold-text"> Hassell free contact lenses delivered to your door </p>
                    </div>
                    <div className = "button-container">
                        <button> Shop today &#8594; </button>
                        <button> Take the test &#8594; </button>
                    </div>
                </SectionOne>
                <SectionTwo>
                    <div className = "images-container">
                        <img src = "../images/cooper-vision.png" alt = "cooper vision"/>
                        <img src = "../images/cooper-vision.png" alt = "cooper vision"/>
                        <img src = "../images/cooper-vision.png" alt = "cooper vision"/>
                        <img src = "../images/cooper-vision.png" alt = "cooper vision"/>
                        <img src = "../images/cooper-vision.png" alt = "cooper vision"/>
                        <img src = "../images/cooper-vision.png" alt = "cooper vision"/>
                    </div>
                </SectionTwo>
                <ShopComponent
                    image = "../images/download-1.png"
                    shopText = "Shop Daily Contact Lenses"
                    description = "Laboris esse aliqua dolore cillum aliquip velit dolore. Lorem eu magna pariatur velit laborum nostrud dolor. Ut consequat commodo elit proident. Irure dolor voluptate tempor qui duis occaecat anim deserunt laboris et. Veniam consectetur irure adipisicing irure veniam officia ad. Et cillum dolor velit enim velit dolore minim eu laboris laboris sit adipisicing laboris."
                    headerText = "First shop component"
                />
                <ShopComponent
                    image = "../images/download-1.png"
                    shopText = "Shop Monthlies/2 Weekly Contact Lenses"
                    description = "Aliqua Lorem amet do mollit aliquip dolor Lorem occaecat ipsum sunt duis quis excepteur. Ipsum ad nulla in aute amet nulla cupidatat amet. Nisi tempor pariatur proident occaecat non sit qui proident. Incididunt dolor voluptate veniam consectetur veniam sunt. Veniam occaecat pariatur sint cillum velit commodo voluptate occaecat ea Lorem sunt aliqua. Qui eu ullamco officia veniam sunt exercitation mollit dolore aute nisi voluptate exercitation irure excepteur."
                    headerText = "Second shop component"
                />
            </Container>
        );
    }
}

const Container = styled.div`
    @media only screen and (max-width: 800px){ 
        width: 100%;
    }
`
const SectionOne = styled.section`
    img{ 
        width: 100%;
    }
    @media only screen and (max-width: 800px){
        .text-container{
            width: 88%;
            margin: 0 auto;
            padding-top: 20px;
        }
        .small-text{ 
            font-size: 0.8em;
            margin: 0;
        }
        h1{
            text-transform: uppercase;
            letter-spacing: -0.04em;
            font-size: 2.5em;
            margin: 0;
        }
    }
    .gold-text{
        color:#bfa811;
        font-size: 0.8em;
        margin: 0;
    }
    .button-container{
        button{
            width: 88%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 20px;
            border: none;
            background: #e6ca30;
            font-size: 1em;

            &:nth-child(2){
                border: 1px solid black;
                background: none;
                color: grey;
            }
        }
    }
`
const SectionTwo = styled.div`
    margin-top: 30px;

    .images-container{
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
        width: 88%;
        margin: 0 auto;
        img{
            width: 90%;
            height: 40px;
            text-align: center;
        }
    }
    .waldo-image{
        width: 88%;
        height: 260px;
        margin-top: 30px;
    }
`

export default MainContent;