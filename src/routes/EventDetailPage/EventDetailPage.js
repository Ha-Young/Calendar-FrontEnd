import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from "./EventDetailPage.module.css";
import { extractUrl } from "../../utils/ui";

const EventDetailPage = ({ getEvents }) => {
  const params = useParams();
  const { date, path } = extractUrl(params.event);

  console.log(getEvents(date))
  return (
    <div className={styles.wrapper}>

    </div>
  );
};

export default EventDetailPage;
