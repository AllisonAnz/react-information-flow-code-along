import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    //console.log(this.props) //=> {handleColorChange: ƒ}}
    
    // We now want to pass the handleColorChange prop into the Ract event handler
    // Now if you click on either white rectangle Child comp. will cause the parent componenet to change color
    
    //pt2: use the props color from parent comp in child comp, but passing this.props.color
    // We update the onClick of Child to be a function that invokes this.props.handleColorChange and passes 
    // in a random color as the argumnet
    return (
      <div
        onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
