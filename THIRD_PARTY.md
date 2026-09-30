# 글꼴과 획순 자료

## 궁서 글꼴

- 출처: [Google Fonts · Gungsuh](https://github.com/google/fonts/tree/main/ofl/gungsuh)
- 원본 `Gungsuh-Regular.ttf` Git blob: `1e17298c26e41dfed31abf8b054845ee648201f3`.
- 라이선스: SIL Open Font License 1.1. 전체 고지는 [Gungsuh-OFL.txt](licenses/Gungsuh-OFL.txt)에 포함했습니다.
- 도형·이름·문자를 변경하지 않고 웹 배포를 위해 WOFF2 형식으로 변환했습니다. Windows에 설치된 별도 상용 글꼴을 복사한 것이 아닙니다.

## 한국 한자 획순

- 출처: [AnimCJK · svgsKo](https://github.com/parsimonhi/animCJK/tree/ec5e17cca76c87587790bcbce5ea0b4d4fb753d6/svgsKo)
- 원본 기준: `ec5e17cca76c87587790bcbce5ea0b4d4fb753d6`, 앱의 한국 한자 300자에 해당하는 SVG.
- Copyright 2016–2026 FM&SH / AnimCJK. 원본의 상세 저작권·파생 자료 출처는 [ANIMCJK-COPYING.txt](licenses/ANIMCJK-COPYING.txt)를 보존했습니다.
- 도형 자료 라이선스: [Arphic Public License](licenses/ARPHICPL.txt).
- 변경: SVG에서 각 획의 윤곽과 중심선 경로를 추출하여 `js/hanja-strokes.js`의 JSON 객체로 묶었습니다. 원본 획 순서와 좌표를 유지했습니다.
- 앱의 연습 판정·두 번 완료·저장 처리는 별도로 구현했습니다. 도형은 획순 연습용이며 궁서체 본문과 모양이 다를 수 있습니다.
