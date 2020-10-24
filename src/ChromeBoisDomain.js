import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    //capture x
    
    const capturedCoords = {
      x: event.clientX,
      y: event.clientY
    }
    return drawChromeBoiAtCoords(capturedCoords.x , capturedCoords.y);

  }
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
  handleToggleCycling = () => {
    return toggleCycling()
  }
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */

  handleResize = (event) =>{
    const letter = event.key;
    let plusOrMinus = "";
    if (letter==='a'){
      plusOrMinus='+'
    }else if(letter==='s'){
      plusOrMinus='-'
    }else{
      return 
    }
    return resize(plusOrMinus)
  }
  
  render() {
    return (
      <canvas
        onKeyPress={this.handleResize}
        onClick={this.handleToggleCycling}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
