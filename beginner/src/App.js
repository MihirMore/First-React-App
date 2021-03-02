import React from 'react';
import axios from 'axios';
import Map from './Map';
import Spinner from './Spinner';

class App extends React.Component {

    state = { data: [], preloader: true}  // initially the loader is active 

    componentDidMount = async () => {
        const api = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        //         componentDidMount() {
        //    fetch('https://jsonplaceholder.typicode.com/users')
        //   .then(response => response.json())
        //   .then(json => this.setState({data: json.name,
        //     } , console.log(json)))
        //     }

        // api is a resolved promise and data is the array of object in JSON file
        console.log(api.data);

        this.setState({ data: api.data, preloader: false }) // when JSX re-renders itself, loader deactivates
    }


    render() {
        if (this.state.preloader === true) {
            return (
                <Spinner msg="Fetching data..." />
            );

        }

        else return (
            <div className="ui container">
                <Map apiData={this.state.data} key={this.state.data.id}  />
            </div>
        );
    }
}

export default App;
