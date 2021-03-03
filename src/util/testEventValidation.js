export default function testEventValidation(submitEvent, eventData, allEvents, setMessage) {
  const {
    title,
    date,
    startHour,
    endHour,
  } = eventData;

  
  if (!title) {
    setMessage("제목을 입력해주세요.");
    submitEvent.currentTarget.title.focus();
    return false;
  }

  if (!date) {
    setMessage("이벤트를 등록할 날짜를 입력해주세요.");
    submitEvent.currentTarget.date.focus();
    return false;
  }

  if (!startHour) {
    setMessage("이벤트 시작 시간을 입력해주세요.");
    submitEvent.currentTarget.startHour.focus();
    return false;
  }

  if (!endHour) {
    setMessage("이벤트 종료 시간을 입력해주세요.");
    submitEvent.currentTarget.endHour.focus();
    return false;
  }

  if (endHour <= startHour) {
    setMessage("이벤트 종료 시간은 이벤트 시작 시간 이후여야 합니다.");
    return false;
  }

}