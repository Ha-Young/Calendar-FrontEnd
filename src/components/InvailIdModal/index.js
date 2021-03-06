import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button";
import styles from "./invaildIdModal.module.css";
import { BUTTON_PLACEHOLDER, INVAILD_MODAL_MESSAGE } from "../../utils/constants";

export default function InvaildIdModal() {
  const history = useHistory();

  function handleModalButtonClick() {
    history.push("/calendar");
  }

  return (
    <div className={styles.InvaildIdModal}>
      <p>{INVAILD_MODAL_MESSAGE.MESSAGE}</p>
      <Button onClick={handleModalButtonClick} title={BUTTON_PLACEHOLDER.GO_BACK}/>
    </div>
  );
}
