import React from "react";
import FakeCard from "./FakeCard";
import { Col } from "antd";

class Map extends React.Component {

  render() {
    return this.props.apiData.map(x => {
      return (
        <Col
          key={x.id}
          className="p-5 rounded"
          gutter={2}
          md={8}
          sm={24}
          lg={6}
          xs={24}
          xl={6}
        >
          {/* FakeCard itself is mapped into a row of cards so that we just need to define a 'Col' to arrange them in the form  of a grid */}

          {/* this.props.deleteLogic uses prop to refer to its parent */}
          <FakeCard
            data={x}
            id={x.id}
            name={x.name}
            deleteLogic={this.props.deleteLogic}
            hideName={this.props.hideName}
          />
        </Col>
      );
    });
  }
}

export default Map;
