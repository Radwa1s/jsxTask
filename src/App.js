import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import myWonderfulImage from "./pexels-photo-10438286.jpeg"


class App extends React.Component {
  render() {
    return (

      <div className="ShoppingList" >

        <div className="photo" style={{ maxWidth: "100vw" }}>

          <h1 className="title red">Your name here</h1>

          <br />

          <img src="/pexels-photo-6848720.jpeg" alt="my alt text" />

          <br />

          <img className="maxwidth" src={myWonderfulImage} alt='myImage' />



          <video width="320" height="240" controls>

            <source src="myVideo.mp4" type="video/mp4" />

          </video>
        </div>
      </div>
    );
  }
}

export default App;
