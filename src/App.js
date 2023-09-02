import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Searchbox from "./Searchbox";
import CardList from "./CardList";
import { robots } from "./robots";

class App extends Component {

  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })  
    return (
      <div>
        <div className="header">
          <h1>ROBOFRIENDS</h1>
          <Searchbox searchChange={this.onSearchChange}/>
        </div>
        <CardList robots={filteredRobots} />
      </div>
      
    );
  }
  
}

export default App;
