import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let xCoOrd = event.clientX
    let yCoOrd = event.clientY
    drawChromeBoiAtCoords(xCoOrd, yCoOrd)
  }

  handleCycling = (event) => {
    toggleCycling()
  }

  handleKeyPress = (event) => {
    
    let pressed = event.key

    if (pressed == "a") {
      resize("+")
    } else if ( pressed == "s") {
      resize("-")
    }
  }

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleCycling}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
