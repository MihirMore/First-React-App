import React, { Component } from "react";

import { Modal, Form, Input } from "antd";

 // name of the newly created form inside ()
const Updates = Form.create()(
 

  class extends Component {
    render() {
      // const { name, email, phone, website } = this.props;

      // data definition
      const { popup, cancelLogic, updateLogic, form } = this.props;
      const { getFieldDecorator } = form; // getFieldDecorator is a function to define form elements
      // const { name, email, phone, website } = this.props.data;

      var { name, email, phone, website } = this.props.data;

      return (
        <Modal
          visible={popup}
          title="Edit Personal Information" // title of modal
          okText="UPDATE"
          cancelText="CANCEL"
          onCancel={cancelLogic}
          onOk={updateLogic}
          centered
        >
          <Form centered layout="inline">
            <Form.Item label="Name: ">
              {getFieldDecorator(
                "name",
                { initialValue: name },
                {
                  rules: [
                    { required: true, message: "Please enter your Name !" }
                  ]
                }
              )(<Input />)}
            </Form.Item>

            <Form.Item label="Email: ">
              {getFieldDecorator(
                "email",
                { initialValue: email },
                {
                  rules: [
                    { required: true, message: "Please enter your email !" }
                  ]
                }
              )(<Input />)}
            </Form.Item>

            <Form.Item label="Phone: ">
              {getFieldDecorator(
                "phone",
                { initialValue: phone },
                {
                  rules: [
                    { required: true, message: "Please enter your phone !" }
                  ]
                }
              )(<Input />)}
            </Form.Item>

            <Form.Item label="Website: ">
              {getFieldDecorator(
                "website",
                { initialValue: website },
                {
                  rules: [
                    { required: true, message: "Please enter your website !" }
                  ]
                }
              )(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export default Updates;
