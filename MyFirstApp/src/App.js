import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Map from "./Map";
import Spinner from "./Spinner";

class App extends Component {
  state = { data: [], preloader: true };

  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(jsonData => this.setState({data: jsonData.data, preloader: false}))

  }

  
  deleteLogic = allCards => {
    
    const cards = this.state.data.filter(e => e.name !== allCards); 
    this.setState({
      data: [...cards]
    });
  };

  render() {

    if (this.state.preloader) {
      return <Spinner msg="" />;
    }

    
    return (
      <div >
        
        <Map
          apiData={this.state.data}
          deleteLogic={this.deleteLogic}
          unique={this.state.data.id}
          hideName={this.hideName}
        />
        
      </div>
    );
  }
}

export default App;
