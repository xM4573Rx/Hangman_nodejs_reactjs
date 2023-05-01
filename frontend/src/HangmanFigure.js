import React from 'react';
import './Hangman.css';

const HEAD = (
    <div key={"0"} 
        style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "40px",
        right: "145px"
    }}/>
)

const BODY = (
    <div key={"1"} 
        style={{
        width: "10px",
        height: "120px",
        background: "black",
        position: "absolute",
        top: "100px",
        marginLeft: "315px"
    }}/>
)

const RIGHT_ARM = (
    <div key={"2"} 
        style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "130px",
        right: "85px",
        rotate: "30deg",
        transformOrigin: "left bottom"
    }}/>
)

const LEFT_ARM = (
    <div key={"3"} 
        style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "130px",
        right: "175px",
        rotate: "-30deg",
        transformOrigin: "right bottom"
    }}/>
)

const RIGHT_LEG = (
    <div key={"4"} 
        style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "85px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }}/>
)

const LEFT_LEG = (
    <div key={"5"} 
        style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "175px",
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }}/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

export default function HangmanFigure({ errors }) {
  return (
    <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, errors)}
        <div style={{ 
            height: "50px", 
            width: "10px", 
            background: "black", 
            position: "absolute",
            marginLeft: "315px",
            top: 0
        }}/>
        <div style={{ 
            height: "10px", 
            width: "200px", 
            background: "black", 
            marginLeft: "120px" 
        }}/>
        <div style={{ 
            height: "350px", 
            width: "10px", 
            background: "black", 
            marginLeft: "120px" 
        }}/>
        <div style={{ 
            height: "10px", 
            width: "250px", 
            background: "black" 
        }}/>
    </div>
  );
};
