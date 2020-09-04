import React from "react";
import styled from "styled-components";

class shopComponent extends React.Component {
    render(){
        return (
            <Container>
                <img src = {this.props.image}/>
                <div className = "text-container">
                    <p className = "shop-text"> {this.props.shopText} </p>
                    <p className = "header"> {this.props.headerText} </p>
                    <p> {this.props.description} </p>
                    <button> {this.props.shopText} </button>
                </div>
            </Container>
        )
    }
}

const Container = styled.div`
    margin: 50px 0;
    @media only screen and (min-width: 800px){
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 10px;
        width: 90%;
        margin: 0 auto;
    }
    &:nth-of-type(odd){
        @media only screen and (min-width: 800px){
            img{
                grid-column: 3/5;
            }
            .text-container{
                grid-column: 1/3;
            }
        }
    }
    img{
        @media only screen and (min-width: 800px){
            grid-column: 1/3;
            grid-row: 1/3;
            width: 100%;
            height: 100%;
        }
        @media only screen and (max-width: 800px){
            width: 88%;
            height: 250px;
        }
    }
    .text-container{
        @media only screen and (min-width: 800px){
            grid-row: 1/3;
            grid-column: 3/5;
        }
        @media only screen and (max-width: 800px){
            text-align: left;
            margin: 0 auto;
            width: 88%;
        }
    }
    p{
        margin: 0;
        padding: 8px 0;
    }
    .shop-text{
        padding-bottom: 0;
    }
    .header{
        font-size: 2em;
        margin: 0;
        padding: 8px 0;
        font-weight: 600;
    }
    button {
        background: none;
        color: grey;
        border-radius: 50px;
        padding: 10px 20px;
        width: 100%;
        margin: 0 auto;
        margin-top: 16px;
        font-size: 1em;
    }
`

export default shopComponent;