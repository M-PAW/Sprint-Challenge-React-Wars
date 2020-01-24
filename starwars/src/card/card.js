import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {Cardbox} from "./cardStyles.js";

function Card(props){
    const [char, setChar] = useState(props.data)
    console.log(props.name);

    return (
            <Cardbox>
                <h2>Name: {props.name}</h2>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
                <p>Hair Color: {props.hairColor}</p>
                <p>Skin Color: {props.skinColor}</p>
                <p>Eye Color: {props.eyeColor}</p>
                <p>Birth Year: {props.birthYear}</p>
                <p>Gender: {props.gender}</p>
            </Cardbox>
    )
}

export default Card;