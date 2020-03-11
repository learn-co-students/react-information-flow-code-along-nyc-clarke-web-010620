import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  state = {
      color: getRandomColor(),
      childrenColor: "#FFF"
    }

  changeColor = () => {
    this.setState({color: getRandomColor()})
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child handleColorChange={this.changeColor}/>
        < Child handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
