import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Map from "./Map";
import Spinner from "./Spinner";
// import EditForm from './EditForm';

// ANT DESIGN IMPORTS
// import {Button} from 'antd';

// const Description = props => <div> {props.description} </div>

class App extends Component {
  state = { data: [], preloader: true };

  // binding the function in a parent lets us use that functon without an arrow function in its child so that its directly called
  // constructor(props) {
  //   super(props);
  //   this.deleteLogic = this.deleteLogic.bind(this);
  // }

  // fetching the data from JSON file
  // componentDidMount = async () => {
  //   const api = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  //
  //   console.log(api.data);
  //
  //   // updating the state
  //   this.setState({ data: api.data, preloader: false });
  // };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(jsonData => this.setState({data: jsonData.data, preloader: false}))

  }

  // THIS IS AN APPLICATION OF LIFTING THE STATE UP
  deleteLogic = allCards => {
    // SLICE MEANS TO DELETE THE CURRENT AND SHOW THE REST
    // this is amazing. slice() method actually slices the itmes in array.
    // if 1 is passed as arg, then it deletes / slices the 1st value and returns the array of remaining items
    const cards = this.state.data.filter(e => e.name !== allCards); // currentCard => currentCard.name !== allCards
    this.setState({
      data: [...cards]
    });
  };

  render() {

    if (this.state.preloader) {
      return <Spinner msg="Loading..." />;
    }

    // else condition
    return (
      <div >
        {/* <Button type="button">
                    Click Me!
                </Button> */}
        {/* 
  <Card title="Card title">Card content</Card> */}

        {/* deleteLogic on LHS is a function passed as a prop */}
        <Map
          apiData={this.state.data}
          deleteLogic={this.deleteLogic}
          unique={this.state.data.id}
          hideName={this.hideName}
        />
        {this.state.data.map((entry) => (<p key={entry.id}>{entry.name}</p>))}
      </div>
    );
  }
}

export default App;
