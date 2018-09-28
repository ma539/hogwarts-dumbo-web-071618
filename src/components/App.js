import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogList from './HogList';

class App extends Component {

  constructor() {
    super()
    this.state = {
      searchQuery: ""
    }
  }

  handleSearch = (event) => {

    this.setState({
      searchQuery: event.target.value
    })
  }

  render() {
    
    return (
      <div className="App">
          < Nav handleSearch={this.handleSearch}/>
          < HogList hogs={hogs} searchQuery={this.state.searchQuery}/>
      </div>
    )
  }
}

export default App;
