import React, { useState } from "react";

import { Modal, Form, Input, Button, DatePicker } from "antd";
import { TwitterPicker } from "react-color";
import { useHistory } from "react-router-dom";

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
  const [activeButton, setActiveButton] = useState({ buttonType: "null" });
  const history = useHistory();

  return (
    <Modal
      title="Add event!"
      centered={true}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={800}
      footer={null}
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
          console.log(e);
          if (activeButton.buttonType === "add") {
            onAddEvent(e);
            handleOk();
          }
          if (activeButton.buttonType === "edit") {
            onEditEvent(eventInfo.id, e);
            handleOk();
          }

          if (activeButton.buttonType === "delete") {
            onDeleteEvent(eventInfo.id);
            handleOk();
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
        <Form.Item name={"colorPicker"} label="colorPicker">
          <TwitterPicker
            onChangeComplete={(color, event) => {
              console.log(color, event);
              return color;
            }}
          />
        </Form.Item>

        <Form.Item name={"button"}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={(e) => {
              setActiveButton({ buttonType: "add" });
            }}
          >
            Add
          </Button>

          <Button
            type="default"
            htmlType="submit"
            onClick={(e) => {
              setActiveButton({ buttonType: "edit" });
            }}
          >
            Edit
          </Button>

          <Button
            type="default"
            htmlType="submit"
            onClick={(e) => {
              setActiveButton({ buttonType: "delete" });
            }}
          >
            Delete
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
