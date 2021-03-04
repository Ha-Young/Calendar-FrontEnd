import { Button, DatePicker, Form, Input } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

import { ERROR_MSG_EVENT_DAY_OVER, ERROR_MSG_OVER_START_DAY } from "../../constants/errorMsg";
import { getCurrentMoment } from "../../utils/date";
import styles from "./EventForm.module.css";
import { ERROR_TYPE_EVENT_DAY_OVER, ERROR_TYPE_OVER_START_DAY, layout, makeNewEvent, viewErrMsg } from "./helper";

function EventForm({ userId, onCreate, event }) {
  const history = useHistory();

  function handleSubmitClick(values) {
    const event = values;
    const { newEvent, errorType } = makeNewEvent(event);

    if (!newEvent) {
      //todo. constant화
      if (errorType === ERROR_TYPE_EVENT_DAY_OVER) {
        viewErrMsg(ERROR_MSG_EVENT_DAY_OVER);
      } else if (errorType === ERROR_TYPE_OVER_START_DAY) {
        viewErrMsg(ERROR_MSG_OVER_START_DAY);
      }
      return;
    }

    // 질문 userId도 같이?
    onCreate({
      userId,
      event: newEvent,
    });

    history.push('/calendar');
  };

  function handleCancelClick() {
    history.goBack();
  };

  return (
    <>
      <h2>이벤트 추가</h2>
      <Form
        {...layout}
        className={styles.addForm}
        onFinish={handleSubmitClick}
        initialValues={{
          startDate: getCurrentMoment(),
          endDate: getCurrentMoment().add(1, 'hour'),
        }}
      >
        <Form.Item
          label="제목"
          name='title'
          rules={[
            {
              required: true,
              message: '제목을 입력해주세요',
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="설명"
          name='description'
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="시작날짜"
          name='startDate'
          rules={[
            {
              required: true,
              message: '시작날짜를 입력해주세요',
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
          name='endDate'
          rules={[
            {
              required: true,
              message: '종료날짜를 입력해주세요',
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
            생성
          </Button>
          <Button
            htmlType="button"
            style={{
              margin: '0 10px',
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
