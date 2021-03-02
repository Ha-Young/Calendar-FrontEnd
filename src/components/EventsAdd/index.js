import { Button, DatePicker, Form, Input } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./EventAdd.module.css";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

function EventsAdd() {
  const history = useHistory();

  function handleSubmitClick(values) {
    console.log('Submit:', values);
  };

  function handleCancelClick(e) {
    history.goBack();
  };

  return (
    <>
      <h2>이벤트 추가</h2>
      <Form
        {...layout}
        className={styles.addForm}
        onFinish={handleSubmitClick}
      >
        <Form.Item label="제목" name={['events', 'title']}>
          <Input />
        </Form.Item>
        <Form.Item label="설명" name={['events', 'description']}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="시작 날짜" name={['events', 'startDate']}>
          <DatePicker showTime format="YYYY-MM-DD HH"/>
        </Form.Item>
        <Form.Item label="종료 날짜" name={['events', 'endDate']}>
          <DatePicker showTime format="YYYY-MM-DD HH"/>
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

export default EventsAdd;
