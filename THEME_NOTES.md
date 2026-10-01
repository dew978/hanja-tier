# 수묵 산수화 테마 제작 기록

- 요청: 첨부 이미지처럼 동양적이고 고풍스러운 먹 그림 분위기, 용 제외.
- 제작 방식: Codex 내장 이미지 생성 도구(image_gen), 사용자 참고 이미지 기반 편집.
- 최종 배경 파일: [assets/ink-landscape-v1.png](assets/ink-landscape-v1.png)
- 생성된 1536×1024 PNG 원본을 이미지 변경 없이 사용했습니다.
- 로그인·학생 학습·관리자 화면에 적용하고, 쓰기판과 문제 영역은 밝은 종이색을 유지했습니다.

## 실제 제작 프롬프트

```text
Use case: stylized-concept / style-transfer.
Asset type: production background illustration for a Korean Hanja learning web app, wide landscape 1536 x 1024.
Edit the supplied reference into a calm antique East Asian ink-wash landscape. Remove the dragon completely. Remove the person, all lettering, seals, logos and title graphics. Preserve the reference's hand-painted, weathered paper, ink brush, misty mountain atmosphere, but make a fresh uncluttered composition for the app.
Scene: old rugged pine at the far left edge, layered craggy ink mountains on the right and far distance, quiet white mist filling the central valley, a small waterfall and rocky ledges at the lower edges. The central 55 percent and top-middle should be mostly pale warm gray paper and fog, with very little detail, so interface panels can sit over it. Darker brush detail belongs to the sides and lower third. Korean sumukhwa-inspired brush and diluted ink blooms; tactile aged hanji, natural irregular edges and delicate dry-brush linework. Muted charcoal, gray-brown stone, a trace of dusty moss green. Elegant, old, contemplative; no modern fantasy gloss.
Constraints: no dragon, no serpent, no animal, no person, no typography or text, no logos, no frames, no UI, no saturated colors. Opaque background. Landscape illustration only.
```

