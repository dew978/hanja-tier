# 한자 티어

한자 8급부터 6급까지 누적 300자를 익히는 한자 전용 설치형 웹앱입니다.

**접속:** https://dew978.github.io/hanja-tier/

- 뜻·음과 한자어 5개, 따라쓰기 학습
- 최초 실력 진단 30문항, 하루 최대 20자
- 일일 확인 90% 이상: +5·10·15점 (하루 한 번)
- 승급 시험 80% 이상: 최초 승급마다 +100점
- 발전도·절대 진도의 두 가지 순위
- 관리자는 한자 학습 현황·학생 관리·학습 설정만 제공
- GitHub Pages와 전용 Firebase 프로젝트 `hanja-tier` 사용

운영 규칙은 [HANJA_GUIDE.md](HANJA_GUIDE.md), 배포 방법은 [GITHUB_DEPLOY.md](GITHUB_DEPLOY.md)를 참고하세요.

## 로컬 확인

`serve.ps1`을 실행한 뒤 `http://localhost:8767/preview.html`에 접속합니다. 체험 학생으로 자동 로그인되며, 체험 관리자 계정은 `teacher / demo-only`입니다. 모두 가상 데이터입니다. 실제 계정 비밀번호는 소스에 저장하지 않습니다.

## 검증

```sh
node tests/hanja.test.cjs
node tests/hanja-storage.test.cjs
node tests/pwa.test.cjs
```
