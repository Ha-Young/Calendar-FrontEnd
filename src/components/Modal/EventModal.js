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
  onDeleteEvent,
  onEditEvent,
  eventInfo,
}) {
  let isAddClicked = false;
  let isEditClicked = false;
  let isDeleteClicked = false;
  console.log("eventInfo of element that you clicked", eventInfo);

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
          if (isAddClicked) {
            onAddEvent(e);
            handleOk();
          }
          if (isEditClicked) {
            console.log("edit clicked");
          }

          if (isDeleteClicked) {
            console.log(eventInfo.id);
            onDeleteEvent(eventInfo.id);
            // handleOk();
          }
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
          {onAddEvent && (
            <Button
              type="primary"
              htmlType="submit"
              onClick={(e) => {
                isAddClicked = true;
              }}
            >
              Add
            </Button>
          )}
          {onEditEvent && (
            <Button
              type="primary"
              htmlType="submit"
              onClick={(e) => {
                isEditClicked = true;
              }}
            >
              Edit
            </Button>
          )}
          {onDeleteEvent && (
            <Button
              type="primary"
              htmlType="submit"
              onClick={(e) => {
                isDeleteClicked = true;
              }}
            >
              Delete
            </Button>
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
}
