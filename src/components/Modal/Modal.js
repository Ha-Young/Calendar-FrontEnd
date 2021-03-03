import React, { useState } from "react";
import { Modal, Form, Input, Button, DatePicker } from "antd";
const { RangePicker } = DatePicker;

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
    >
      <Form
        onFinish={(e) => {
          onAddEvent(e);
          console.log(e.RangePicker[0].format("YYYY-MM-DD HH"));
          handleOk();
        }}
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Button
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
