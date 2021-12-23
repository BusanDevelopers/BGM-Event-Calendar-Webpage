# BGM-Event-Calendar-Webpage

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

부산개발자모임 이벤트 캘린더의 프론트앤드 웹페이지를 위한 저장소입니다.

백앤드 API는 이 [리포지토리](https://github.com/BusanDevelopers/BGM-Event-Calendar-API)를, 지원하는 API 목록과 기능은 [API 문서](https://busandevelopers.github.io/BGM-Event-Calendar-API-Documentation/)를 참고해 주십시오.

## Scripts

아래는 개발, 배포, 그리고 lint를 위한 npm/yarn 스크립트 목록입니다.

1. `lint`: 코드 검사 실행
2. `lint:fix`: 코드 검사 후 자동 수정 시도
3. `dev`: 웹팩 개발 서버 실행
4. `build`: browserslint를 참고하여 웹팩 번들링 수행 (destination: `dist` 디렉터리)

별도의 테스트는 진행하지 않고, 커밋 및 푸시 시에 일관된 코드 스타일의 적용을 위한 lint를 진행합니다.

## Dependencies/Environment

`Ubuntu 20.04.3 LTS`의 `Node v16.13.1` 환경에서 개발 및 테스트되었습니다.

타입스크립트 리엑트 개발 환경은 다른 Boilerplate 코드를 사용하지 않고 직접 ESLint, Prettier, WebPack, Babel을 설정하여 구축하였습니다.
코드 스타일링 규칙 및 배포 환경설정은 각 설정파일을 참고해 주시기 바랍니다.

React는 17.0.2버전, React Router는 6.1.1버전을 사용하였습니다.  
추가로 수려한 디자인을 위해 Material UI (MUI) 라이브러리 (v5.2.5)를 사용하였습니다.
