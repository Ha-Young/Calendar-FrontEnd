import { Button, DatePicker, Form, Input } from "antd";
import React from "react";

import { DATE_FORMAT_WITH_HOUR } from "../../constants/common";
import {
  ERROR_MSG_EVENT_DAY_OVER,
  ERROR_MSG_OVER_START_DAY,
} from "../../constants/errorMsg";
import { getMoment } from "../../utils/date";
import styles from "./EventForm.module.css";
import {
  ERROR_TYPE_EVENT_DAY_OVER,
  ERROR_TYPE_OVER_START_DAY,
  FORM_DEFAULT_TITLE,
  FORM_TYPE_CREATE,
  FORM_TYPE_DELETE,
  FORM_TYPE_UPDATE,
  layout,
  makeNewEvent,
  viewErrMsg,
} from "./helper";

function EventForm({ onSubmit, onCancel, onDelete, event }) {
  function handleSubmitClick(values) {
    const exisitId = event ? event.id : null;
    const { newEvent, errorType } = makeNewEvent(values, exisitId);

    if (!newEvent) {
      //todo. constant화
      if (errorType === ERROR_TYPE_EVENT_DAY_OVER) {
        viewErrMsg(ERROR_MSG_EVENT_DAY_OVER);
      } else if (errorType === ERROR_TYPE_OVER_START_DAY) {
        viewErrMsg(ERROR_MSG_OVER_START_DAY);
      }
      return;
    }

    const isUpdate = event ? true : false;
    // 질문 userId도 같이?
    onSubmit(newEvent, isUpdate);
  }

  function handleCancelClick() {
    onCancel();
  }

  function handleDeleteClick() {
    onDelete({
      eventId: event.id,
      date: event.date,
    });
  }

  const initialValues = event
    ? {
      title: event.title,
      description: event.description,
      startDate: getMoment(event.startDate, DATE_FORMAT_WITH_HOUR),
      endDate: getMoment(event.endDate, DATE_FORMAT_WITH_HOUR),
    }
    : {
      title: "",
      description: "",
      startDate: getMoment(),
      endDate: getMoment().add(1, "hour"),
    };

  return (
    <>
      <h2>{`${FORM_DEFAULT_TITLE} ${event ? FORM_TYPE_UPDATE : FORM_TYPE_CREATE}`}</h2>
      {event && <Button onClick={handleDeleteClick} danger>{FORM_TYPE_DELETE}</Button>}
      <Form
        {...layout}
        className={styles.addForm}
        onFinish={handleSubmitClick}
        initialValues={initialValues}
      >
        <Form.Item
          label="제목"
          name="title"
          rules={[
            {
              required: true,
              message: "제목을 입력해주세요",
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="설명" name="description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="시작날짜"
          name="startDate"
          rules={[
            {
              required: true,
              message: "시작날짜를 입력해주세요",
            }
          ]}
        >
          <DatePicker
            className={styles.datePicker}
            format="YYYY년 MM월 DD일 HH시"
            showTime
          />
        </Form.Item>
        <Form.Item
          label="종료날짜"
          name="endDate"
          rules={[
            {
              required: true,
              message: "종료날짜를 입력해주세요",
            }
          ]}
        >
          <DatePicker
            className={styles.datePicker}
            format="YYYY년 MM월 DD일 HH시"
            showTime
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          className={styles.btnWrapper}
        >
          <Button type="primary" htmlType="submit">
            {event ? FORM_TYPE_UPDATE : FORM_TYPE_CREATE}
          </Button>
          <Button
            htmlType="button"
            style={{
              margin: "0 10px",
            }}
            onClick={handleCancelClick}
          >
            취소
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default EventForm;
