import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {
  // Parent Comp. has a state called color 
  // it initially is set to a random color
  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      // Store the color of the Child in the state of the Parent componenet so that 
      // keep track of the color
      childrenColor: '#FFF'
    }
  }

  //CODED: We set the state 
  // if we are going to run changeColor() method when either Child componenet is clicked. 
  // We need to pass this state changing function as a prop to both Child componenets. 
  // pt2: we have to update the changeColor() method in the Parent to change not just the color state, 
  // but also the childrenColor. 
  // to practice sending data BACK to the parent, change our changeColor to take in an argument of newChildColor
  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  } //Now that the function takes in an argumnet, we'll need to update the onClick of Child to be afunction that 
    //invokes this.props.handleColorChange and passes in a random color as the argument 

  render() { 
    //handleColorChange = this.ChangeColor was added from the codealong 
    //Now Child will have a prop called handleColorChange that is a function. 
    //pt2: Since the data that represents the color of the two Child comp. lives in Parent, we should pass that data down as props 
    // color={this.state.childrenColor}
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor} />
        <Child color={this.state.childrenColor} handleColorChange = {this.changeColor} />
      </div>
    )
  }
}

export default Parent
