
  export default function validateForm (scheduleData) {
    for (let input of Object.keys(scheduleData)) {
      if (scheduleData[input] === '') {
        alert(`${input} 를 채워주세요!`);
        return false;
      }
    }

    if (!validateTimings()) {
      return false;
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

      if (startDate > endDate) {
        alert('날짜가 이상합니다..');
        return false;
      }

      if (startDate === endDate && startTime > endTime) {
        alert(`시간이 이상한데요..`)
        return false;
      }

      return true;
    }

    return true;
  }
