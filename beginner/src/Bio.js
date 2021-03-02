import React, { Component } from "react";

const fancy = {
  fontSize: "16px"
};

// using props to reuse JSX code such as props.detail and props.bio
const Description = props => (
  <div className="description mt-2">
    <span style={fancy}>
      <strong>{props.detail}</strong> {props.bio}
    </span>
  </div>
);

const Address = props => (
  <div className="description mt-2" style={fancy}>
    <span>
      <strong>{props.detail}</strong>
    </span>
    <span> {props.street}, </span>
    <span> {props.suite}</span>, <span> {props.city}</span>,
    <span> {props.zipcode}</span>
  </div>
);

class Bio extends Component {
  render() {
    const { email, phone, company, website, address } = this.props.data; // destructuring

    return (
      <div>
        <Description detail="Email: " bio={email} />
        <Description detail="Phone: " bio={phone} />
        <Description detail="Company: " bio={company.name} />
        <Description detail="Website: " bio={website} />
        <Address
          detail="Address: "
          street={address.street}
          suite={address.suite}
          city={address.city}
          zipcode={address.zipcode}
        />
      </div>
    );
  }
}

export default Bio;
