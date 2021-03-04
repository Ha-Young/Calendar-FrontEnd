import React from "react";

import { Modal, Form, Input, Button, DatePicker } from "antd";
import { TwitterPicker } from "react-color";
import styled from "styled-components";
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 3,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 3,
    },
    sm: {
      span: 16,
    },
  },
};

export default function EventModal({
  isModalVisible,
  handleOk,
  handleCancel,
  onAddEvent,
}) {
  return (
    <Modal
      title="Add event!"
      centered={true}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={800}
      bodyStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Form
        onFinish={(e) => {
          onAddEvent(e);
          handleOk();
        }}
        {...formItemLayout}
      >
        <Form.Item name={"eventTitle"} label="eventTitle">
          <Input />
        </Form.Item>
        <Form.Item name={"RangePicker"} label="RangePicker">
          <RangePicker showTime={{ format: "HH" }} format="YYYY-MM-DD HH" />
        </Form.Item>
        <Form.Item name={"eventDescription"} label="eventDescription">
          <Input.TextArea />
        </Form.Item>
        <TwitterPicker />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Button
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
