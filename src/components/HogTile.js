import React, { Component } from 'react';

class HogTile extends Component {

  constructor() {
    super()
    this.state = {
      clicked: false,
      hidden: false
    }
  }


  handleClick = () => {
    this.setState((prevState) => {
      return ({
        clicked: !prevState.clicked
      })
    })
  }

  hogData = () => {
    if (this.state.clicked) {
      return (
        <ul>
        <li>{this.props.hog.specialty}</li>
        <li>{this.props.hog.greased}</li>
        <li>{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
        <li>{this.props.hog['highest medal achieved']}</li>
        </ul>
      )
    }
    else {
      return ""
    }
  }

  render() {
    const imgName = this.props.hog.name.split(" ").join("_").toLowerCase() + ".jpg"

    return(
      <div class="pigTile">
      <h1>{this.props.hog.name}</h1>
      <img src={require("../hog-imgs/" + imgName)} alt=""/>
        {this.hogData()}
      <button type="button" class="button" onClick={this.handleClick}>Details</button>
      </div>
    )
  }
}

export default HogTile;
