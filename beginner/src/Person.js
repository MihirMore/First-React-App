import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Bio from './Bio';

import './Person.css';

const shadow = {
  boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2)'
}

class Person extends Component {

  render() {
    return (
      <div className="card col-sm rounded centered container" style= {shadow}>
        <div className="ui unstackable items">
          <div className="ui item mt-5 mb-5 content">
            <div className="image">
              <img
                alt="avatar"
                className="ui avatar image img-fluid"
                src={`https://avatars.dicebear.com/v2/avataaars/${
                  this.props.data.username
                  }.svg?options[mood][]=happy`}
              />
            </div>
            <div className="ml-auto content">
                <h2 className="header mb-3" style={{ fontSize: '32px' }}>
                  {this.props.data.name}
                </h2>
              <Bio data={this.props.data} />

              {/* <div className="extra">Additional Details</div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;