import React from "react";
import { useLocation } from "react-router-dom";
import Error from "../Error/Error";
import Event from "../Event/Event";

// TODO onchange에 setState걸어놔서 사용자가 뭐 입력할때마다 리랜더링됨. 디바운스 적용하면 좋을듯?? 아닌가?
// 디바운스 짧게 안하면 submit하기전에 업데이트 안돼서 누락될수도 잇겟다.

export default function EventDetail({ events, selectedEventInfo }) {
  // const history = useHistory();
  const currentUrl = useLocation();
  const isWrongUrl = (selectedEventInfo && currentUrl.pathname !== `/events/${selectedEventInfo.selectedEventId}`) && currentUrl.pathname !== "/events/new";

  return (
    isWrongUrl
    ? <Error />
    : <Event events={events} selectedEventInfo={selectedEventInfo} />
  );
}
