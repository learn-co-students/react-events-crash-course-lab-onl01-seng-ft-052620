import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let x = event.clientX 
    let y = event.clientY
    drawChromeBoiAtCoords(x, y)
  }
  
   clicky = () => {
     toggleCycling()
   }

   pressIt = (event) => {
     if (event.key === 'a'){
       resize("+")
     } else if (event.key === 's'){
       resize("-")
     }
   }

  render() {
    return (
      <canvas 
        onClick={this.clicky}
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.pressIt}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
