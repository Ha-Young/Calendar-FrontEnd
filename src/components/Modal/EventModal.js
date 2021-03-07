import React, { useState } from "react";

import { Modal, Form, Input, Button, DatePicker } from "antd";
import { uploadData, deleteEventbyId, getEvents } from "api";
import { TwitterPicker } from "react-color";
import { formatUserInput } from "utils";

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
  onClickCloseModal,
  onAddEvent,
  onDeleteEvent,
  onEditEvent,
  eventInfo,
}) {
  const [activeButton, setActiveButton] = useState({ buttonType: "null" });

  return (
    <Modal
      title="Add event!"
      centered={true}
      visible={isModalVisible}
      onOk={onClickCloseModal}
      onCancel={onClickCloseModal}
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
          if (activeButton.buttonType === "add") {
            const event = formatUserInput(null, e);
            uploadData(event);
            onAddEvent(event);
            onClickCloseModal();
          }
          if (activeButton.buttonType === "edit") {
            const event = formatUserInput(eventInfo.id, e);
            uploadData(event);
            onEditEvent(eventInfo.id, event);
            onClickCloseModal();
          }

          if (activeButton.buttonType === "delete") {
            onDeleteEvent(eventInfo.id);
            onClickCloseModal();
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
