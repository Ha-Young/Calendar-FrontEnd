
  export default function validateForm (scheduleData) {
    let isFormValidate = false;

    for (let state of Object.keys(scheduleData)) {
      if (scheduleData[state] === '') {
        alert(`${state} 를 채워주세요!`);
        return isFormValidate;
      }
    }

    if (!validateTimings()) {
      return isFormValidate;
    }

    function validateTimings () {
      const startTime = timeStringToInt(scheduleData['startTime']);
      const endTime = timeStringToInt(scheduleData['endTime']);
      const startDate = dateStringToInt(scheduleData['startDate']);
      const endDate = dateStringToInt(scheduleData['endDate']);

      function timeStringToInt (str) {
        return parseInt(str.split(':').join(''));
      }

      function dateStringToInt (str) {
        return parseInt(str.split('-').join(''));
      }

      // 날짜가 안맞는 경우
      if (startDate > endDate) {
        alert('날짜가 이상합니다..');
        return false;
      }

      // 시간이 안맞는 경우 (날짜가 같은 경우에만)
      if (startDate === endDate && startTime > endTime) {
        alert(`시간이 이상한데요..`)
        return false;
      }

      return true;
    }

    return isFormValidate = true;
  }