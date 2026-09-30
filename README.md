# 한자 티어

한자 8급부터 6급까지 누적 300자를 익히는 한자 전용 설치형 웹앱입니다.

**접속:** https://dew978.github.io/hanja-tier/

- 궁서체·한지 테마, 뜻·음과 한자어 5개, 한 글자마다 획순대로 두 번 쓰기
- 최초 실력 진단 30문항, 하루 최대 10자, 한 번에 5자
- 5자 중 뜻·음을 모두 맞힌 한자가 4자 이상이면 다음 묶음 해제
- 오늘 묶음을 모두 통과하면 +5·10·15점 (하루 한 번)
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
node tests/stroke-practice.test.cjs
node tests/pwa.test.cjs
```

획순은 연습에만 사용합니다. 진단·승급·발전도·5자 확인 시험에는 뜻·음만 나옵니다. 글꼴과 한국 한자 획순 자료의 출처·사용권은 [THIRD_PARTY.md](THIRD_PARTY.md)에 명시했습니다.
