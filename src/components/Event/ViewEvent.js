import React from "react";

import Container from "../Shared/Container";
import styles from "./ViewEvent.module.scss";

export default function ViewEvent() {
  return (
    <div className={styles.ViewEvent}>
      <Container>
        <div>
          <dl>
            <dt>Event Title</dt>
            <dd>제목</dd>
          </dl>
        </div>
      </Container>
    </div>
  )
}
