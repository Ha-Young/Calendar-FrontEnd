# Calendar

![Calendar](/readme-assets/weekly_view.png)

**React + React Router + Redux**를 복합적으로 이용해 Single Page Application 스타일의 Google Calendar를 만들어 보는 과제입니다. 그리고 Firebase를 이용해 사용자 데이터를 저장하도록 합니다.

_✅ 아래 README 내용을 상세히 읽고 시작하세요. (특히, Tips 필독!)_

## Installation

```sh
npm install
```

## Development

```sh
npm start
```

## Prerequisites

이번 과제에서는 Firebase를 사용하셔야 합니다. 아래 단계를 순차적으로 따라하시거나, [Firebase Database 공식 가이드](https://firebase.google.com/docs/database/web/start)를 참고하여 `/src/api/firebase` 파일을 적절히 수정한 후 시작하세요.

- [ ] 우선 [Firebase 웹사이트](https://firebase.google.com/)를 방문하여 로그인 및 회원가입을 완료하세요.
- [ ] [Firebase Console](https://console.firebase.google.com)로 이동하세요.
- [ ] 새 프로젝트를 생성하세요.
- [ ] Database 서비스 중, **Realtime Database**를 생성하세요. 주의) 🚨 Cloud Firestore가 아닙니다.
- [ ] **프로젝트 설정에서 본인의 config 정보를 이용하여 `/src/api/firebase`를 수정하세요.**

작업을 진행하시면서 Firebase 관련 정보는 아래 링크에서 찾아보세요.

- [Firebase Database 가이드](https://firebase.google.com/docs/database/web/start)
- [Firebase Database API Doc](https://firebase.google.com/docs/reference/js/firebase.database)
- **Firebase Database에 저장하는 데이터의 구조에 대해 신중하게 결정하고 시작하시기 바랍니다. 참고: [Firebase Database 구조 설계 가이드](https://firebase.google.com/docs/database/web/structure-data)**
- **Firebase Database에 저장하는 날짜 및 시간 정보는 ISO 형식으로 저장하시기 바랍니다.**

## Tips

1. Container component는 우선 최상위에 하나만 두고 시작하시되, 추후 필요할 경우 추가적으로 만들어 사용하세요. (필요할 경우는 언제일까요?)
2. 처음부터 컨테이너나 컴포넌트 트리를 다 계획하고 시작하는 방향은 비효율적이고 시간이 오래 걸릴 확률이 많습니다. 현재 수준에서는 절대 첫 계획대로 되지 않을테니, 작업하면서 결정하세요.
3. Firebase 데이터 구조, Redux State 구조만 결정하고 바로 뛰어드시길 권장합니다. ex) [Redux State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape), [Firebase Database 구조 설계 가이드](https://firebase.google.com/docs/database/web/structure-data)
4. 설정되어 있는 [Redux-logger](https://github.com/LogRocket/redux-logger) 외의 Redux Middleware는 아직 사용하지 마세요.

> ⏰ 꼭 읽어보세요. [Redux Style Guide](https://redux.js.org/style-guide/style-guide)

## TODO

- [ ] 우선 다음과 같이 페이지를 구성하세요. 필요하다면 React Router의 `HashRouter`를 사용하셔도 괜찮습니다.
  - `/calendar`: 메인 달력 페이지
  - `/events/new`: 이벤트 생성 페이지
  - `/events/:eventId`: 이벤트 상세 페이지
  - `/`: `/calendar`로 이동

### `/calendar` 메인 달력 페이지

- [ ] 현재 날짜에 해당하는 달력이 보여져야 합니다. (일별로 보기)
- [ ] 사용자는 일간 스케줄 보기, 주간 스케줄 보기 중 하나를 선택할 수 있어야 합니다.
- [ ] 사용자가 일간 스케줄 보기를 선택했을 경우, 현재 날짜에 해당하는 이벤트 정보가 보여져야 합니다.
- [ ] 사용자가 주간 스케줄 보기를 선택했을 경우, 현재 날짜가 속한 주에 해당하는 이벤트 정보가 보여져야 합니다.
- [ ] 구글 캘린더와 같이 Y축 방향으로는 시간대 정보가 보여져야 합니다.
- [ ] 일간 스케줄 보기의 경우, X축 방향으로는 현재 날짜가 보여져야 합니다.
- [ ] 주간 스케줄 보기의 경우, X축 방향으로는 현재 주에 해당하는 날짜가 보여져야 합니다.
- [ ] 이전 날짜/주 혹은 다음 날짜/주로 이동할 수 있는 버튼이 있어야 합니다.
- [ ] 달력에서 이벤트를 클릭했을 경우, 해당 이벤트 상세 페이지(`/event/<EVENT_ID>`)로 이동해야 합니다.

#### 일간 스케줄 보기의 예시 UI

![Calendar](/readme-assets/daily_view.png)

#### 주간 스케줄 보기의 예시 UI

![Calendar](/readme-assets/weekly_view.png)

### `/events/new` 이벤트 생성 페이지

- [ ] 이벤트를 생성할 수 있는 Form이 보여져야 하고 사용자는 아래 정보를 입력할 수 있어야 합니다.
  - 이벤트 제목
  - 이벤트 설명
  - 이벤트 시작 날짜 및 시간
  - 이벤트 종료 날짜 및 시간
- [ ] 위 정보는 모두 필수 정보입니다. 최대한 상식 선에서 스스로 유효성 검사를 실행해 주시기 바랍니다.
- [ ] 이벤트가 성공적으로 생성되었을 경우, 메인 달력 페이지로 이동해야 합니다.
- [ ] 모든 이벤트는 시작 날짜와 종료 날짜가 같아야 합니다.
- [ ] 모든 이벤트는 1시간 단위로만 길이를 조정할 수 있습니다.
- [ ] 이벤트는 1시 00분, 2시 00분 등 정시에만 시작하거나 끝날 수 있습니다.
- [ ] 같은 시간에 중복된 이벤트는 있을 수 없습니다.

### `/events/<EVENT_ID>` 이벤트 상세 페이지

- [ ] `<EVENT_ID>`에 해당하는 이벤트의 상세 정보를 보여주어야 합니다.
  - 이벤트 제목
  - 이벤트 설명
  - 이벤트 시작 날짜 및 시간
  - 이벤트 종료 날짜 및 시간
- [ ] 사용자는 모든 입력 사항에 대해 수정할 수 있습니다.
- [ ] 사용자는 이벤트를 삭제할 수 있어야 합니다.
- [ ] 만약 유효하지 않은 `<EVENT_ID>`로 접근한다면 유효하지 않은 이벤트라는 정보를 표시해주어야 합니다.

## Advanced

### Component Unit Test

가장 간단한 컴포넌트부터 시작하여 최소한 1-2개라도 단위 테스트를 작성해보세요. 현재 과제에는 `@testing-library/react`가 설치되어 있습니다. [문서](https://testing-library.com/docs/react-testing-library/example-intro)를 읽고 작성해보시기 바랍니다.

### Firebase Authentication

Firebase를 이용하여 로그인 기능을 쉽게 구현할 수 있습니다. [Firebase Authentication 문서](https://firebase.google.com/docs/auth/web/start)를 읽고 소셜 로그인 기능을 추가해보세요. _단, 로그인 기능을 추가한다면 이벤트 정보 또한 사용자 별로 관리가 되어야 합니다._

### Firebase Hosting

Firebase를 이용하여 호스팅 또한 쉽게 할 수 있습니다. [Firebase Hosting 문서](https://firebase.google.com/docs/hosting)를 읽고 본인의 작업 결과물을 웹에 배포해보세요.
