import React, { Component } from 'react';
import HogTile from './HogTile';

class HogList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hogs: this.props.hogs,
      select: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      select: event.target.value
    })
  }

  filterHogs = () => {
    let hogs = this.state.hogs
    if (this.props.searchQuery !== "") {
      hogs = hogs.filter(hog => hog.name.includes(this.props.searchQuery))
    }
    if (this.state.select === "") {
      return hogs
    }
    if (this.state.select === "Name") {
      return hogs.sort((a,b) => a.name.localeCompare(b.name));
    }
    if (this.state.select === "Weight") {
      return hogs.sort((a,b) => (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']))
    }
    if (this.state.select === "Greased") {
      return hogs.filter(hog => hog.greased === true)
    }
  }


  render() {
    console.log(this.state.select)
    const renderHogs = this.filterHogs().map(hog => < HogTile hog={hog}/>)
    return(

      <div>
      <select onChange={this.handleChange}>
        <option value="Name">Sort by Name</option>
        <option value="Weight">Sort by Weight</option>
        <option value="Greased">Filter Greased</option>
      </select>
      <br></br>
      <input type="checkbox" value="Greased" /> Filter Greased <br/>
        {renderHogs}
      </div>
    )
  }


}

export default HogList;
