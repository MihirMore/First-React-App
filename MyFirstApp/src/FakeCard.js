import React, { Component } from "react";
import Updates from "./Updates";
import { Card, Icon } from "antd";
import { Row, Col } from "antd";

const { Meta } = Card;
const fancy = {
  fontSize: "0.9em"
};

class PersonCard extends Component {
  constructor(props) {
    super(props);

    this.onIconClick = this.onIconClick.bind(this); 
    this.showModal = this.showModal.bind(this); 
    
    const { name, email, phone, website } = this.props.data;

    
    this.state = {
      toggle: true, 
      popup: false, 
      name: name, 
      email: email,
      phone: phone,
      website: website,
      hideName: name,
      showName: true,
      showEmail: true,
      showPhone: true,
      showWeb: true,
      showImg: true
    };
  }
  
  onIconClick = () => {
        this.setState(state => ({     
      toggle: !state.toggle 
    }));
  };

  hideName = n => {
    n.preventDefault();
    this.setState(nameState => ({
      showName: !nameState.showName
    }));
  };

  hideEmail = e => {
    e.preventDefault();
    this.setState(emailState => ({
      showEmail: !emailState.showEmail
    }));
  };

  hidePhone = p => {
    p.preventDefault();
    this.setState(phoneState => ({
      showPhone: !phoneState.showPhone
    }));
  };

  hideWeb = w => {
    w.preventDefault();
    this.setState(webState => ({
      showWeb: !webState.showWeb
    }));
  };

  hideImage = i => {
    i.preventDefault();
    this.setState(imgState => ({
      showImg: !imgState.showImg
    }));
  };

  showModal = () => {
    this.setState({
      popup: true
    });
  };

  cancelLogic = () => {
    this.setState({ popup: false });
  };
  
  updateFormRef = formRef => {    
    this.formRef = formRef;
  };

  
  updateLogic = () => {
    const form = this.formRef.props.form;     
    form.validateFields((error, newData) => {     
      if (error) {
        return;
      }
     
      console.log(" UPDATED DETAILS ", newData);
      this.setState({
        popup: false,
        name: newData.name, 
        email: newData.email,
        phone: newData.phone,
        website: newData.website
      });
    });
  };

  

  render() {    
    const profile = (
      <img
        style={{ backgroundColor: "#f5f5f5" }}
        alt="profile"
        src={`https://avatars.dicebear.com/v2/avataaars/${
          this.props.data.username
        }.svg?options[mood][]=happy`}
      />
    );
    const profileThen = (
      <img
        className="ant-card-cover"
        width="250px"
        height="250px"
        style={{ backgroundColor: "#f5f5f5" }}
        alt="final-card"
      />
    );

    return (
      <Row justify="flex-start">
        <Col md={6} sm={24} lg={8} xl={8}>
          <Card
            className="shadow-sm"
            style={{ width: "280px"}}
            cover={this.state.showImg ? profile : profileThen}
            actions={[
              
              <Icon
                type="heart"
                theme={this.state.toggle ? "outlined" : "filled"}
                style={{ color: "red" }}
                twoToneColor="red"
                onClick={e => this.onIconClick(e)}
              />,

              <Icon type="edit" onClick={this.showModal} />,

              
              <Icon
                type="delete"
                theme="filled"
                onClick={() => this.props.deleteLogic(this.props.name)}
              />,
              
            ]}

            
          >
              <Updates
              wrappedComponentRef={this.updateFormRef}
              popup={this.state.popup}
              cancelLogic={this.cancelLogic}
              updateLogic={this.updateLogic}
              data={this.props.data}
              name={this.props.data.name}
              email={this.props.data.email}
              phone={this.props.data.phone}
              website={this.props.data.website}
            />

            <Row>
              <Col span={22}>
                <Meta
                  className="mb-1"
                  title={this.state.showName ? this.state.name : null}
                />
              </Col>
              
            </Row>

            <Row>
              <Col span={2}>
                <Meta
                  className="pt-1 d-block"
                  avatar={this.state.showEmail ? <Icon type="mail" /> : null}
                />
                <Meta
                  className="pt-1"
                  avatar={this.state.showPhone ?<Icon type="phone" /> : null}
                />
                <Meta
                  className="pt-1"
                  avatar={this.state.showWeb ? <Icon type="global" /> : null}
                />
              </Col>
              <Col span={20} style={fancy}>
                <Meta
                  className="pt-2"
                  avatar={this.state.showEmail ? this.state.email : null}
                />
                <Meta
                  className="pt-2"
                  avatar={this.state.showPhone ? this.state.phone : null}
                />
                <Meta
                  className="pt-2"
                  avatar={this.state.showWeb ? this.state.website : null}
                />
              </Col>

              <Col span={2}>
                <Icon
                  className="mt-1"
                  //type="eye"
                  //onClick={e => this.hideEmail(e)}
                />
                <Icon
                  className="mt-1"
                  //type="eye"
                  //onClick={p => this.hidePhone(p)}
                />
                <Icon
                  className="mt-1"
                  //type="eye"
                  //onClick={w => this.hideWeb(w)}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default PersonCard;
