/* 8급~6급 300자. 배정 출처와 검토 범위는 HANJA_GUIDE.md 참고. */
(function(){
const LIST=[
  {
    "h": "敎",
    "hun": "가르칠",
    "eum": "교",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "敎室",
        "read": "교실",
        "mean": "학생들이 모여 공부하는 방"
      },
      {
        "word": "敎育",
        "read": "교육",
        "mean": "지식과 바른 태도를 가르치고 기름"
      },
      {
        "word": "敎科書",
        "read": "교과서",
        "mean": "학교 수업에 쓰는 책"
      },
      {
        "word": "敎師",
        "read": "교사",
        "mean": "학생을 가르치는 선생님"
      },
      {
        "word": "敎訓",
        "read": "교훈",
        "mean": ""
      }
    ],
    "grade": 8,
    "hunAliases": [
      "가르칠"
    ],
    "eumAliases": [
      "교"
    ]
  },
  {
    "h": "校",
    "hun": "학교",
    "eum": "교",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "學校",
        "read": "학교",
        "mean": "학생들이 모여 배우는 곳"
      },
      {
        "word": "校長",
        "read": "교장",
        "mean": "학교에서 가장 높은 선생님"
      },
      {
        "word": "校門",
        "read": "교문",
        "mean": "학교의 정문"
      },
      {
        "word": "登校",
        "read": "등교",
        "mean": "학교에 감"
      },
      {
        "word": "下校",
        "read": "하교",
        "mean": "공부를 마치고 집으로 돌아감"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "학교"
    ],
    "eumAliases": [
      "교"
    ]
  },
  {
    "h": "九",
    "hun": "아홉",
    "eum": "구",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "九月",
        "read": "구월",
        "mean": "한 해의 아홉째 달"
      },
      {
        "word": "九十",
        "read": "구십",
        "mean": "열의 아홉 배인 수"
      },
      {
        "word": "九九段",
        "read": "구구단",
        "mean": "한 자리 수끼리 곱한 값을 외우는 법"
      },
      {
        "word": "九回",
        "read": "구회",
        "mean": ""
      },
      {
        "word": "九段",
        "read": "구단",
        "mean": ""
      }
    ],
    "grade": 8,
    "hunAliases": [
      "아홉"
    ],
    "eumAliases": [
      "구"
    ]
  },
  {
    "h": "國",
    "hun": "나라",
    "eum": "국",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "國民",
        "read": "국민",
        "mean": "한 나라를 이루는 사람들"
      },
      {
        "word": "韓國",
        "read": "한국",
        "mean": "우리나라, 대한민국"
      },
      {
        "word": "外國",
        "read": "외국",
        "mean": "우리나라가 아닌 다른 나라"
      },
      {
        "word": "國語",
        "read": "국어",
        "mean": "우리말, 또는 우리말을 배우는 과목"
      },
      {
        "word": "國旗",
        "read": "국기",
        "mean": "나라를 나타내는 깃발"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "나라"
    ],
    "eumAliases": [
      "국"
    ]
  },
  {
    "h": "軍",
    "hun": "군사",
    "eum": "군",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "軍人",
        "read": "군인",
        "mean": "나라를 지키는 일을 하는 사람"
      },
      {
        "word": "國軍",
        "read": "국군",
        "mean": "나라의 군대"
      },
      {
        "word": "海軍",
        "read": "해군",
        "mean": "바다를 지키는 군대"
      },
      {
        "word": "空軍",
        "read": "공군",
        "mean": "하늘을 지키는 군대"
      },
      {
        "word": "陸軍",
        "read": "육군",
        "mean": ""
      }
    ],
    "grade": 8,
    "hunAliases": [
      "군사"
    ],
    "eumAliases": [
      "군"
    ]
  },
  {
    "h": "金",
    "hun": "쇠",
    "eum": "금",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "金色",
        "read": "금색",
        "mean": "금처럼 누런 빛깔"
      },
      {
        "word": "白金",
        "read": "백금",
        "mean": "은백색의 귀한 금속"
      },
      {
        "word": "金曜日",
        "read": "금요일",
        "mean": "한 주의 다섯째 날"
      },
      {
        "word": "年金",
        "read": "연금",
        "mean": "나이가 들면 해마다 받는 돈"
      },
      {
        "word": "金庫",
        "read": "금고",
        "mean": "돈이나 귀한 물건을 넣어 두는 튼튼한 상자"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "쇠"
    ],
    "eumAliases": [
      "금"
    ]
  },
  {
    "h": "南",
    "hun": "남녘",
    "eum": "남",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "南北",
        "read": "남북",
        "mean": "남쪽과 북쪽"
      },
      {
        "word": "南山",
        "read": "남산",
        "mean": "서울 가운데에 있는 산"
      },
      {
        "word": "南大門",
        "read": "남대문",
        "mean": "서울 남쪽의 큰 문(숭례문)"
      },
      {
        "word": "南極",
        "read": "남극",
        "mean": "지구의 가장 남쪽 끝"
      },
      {
        "word": "江南",
        "read": "강남",
        "mean": "강의 남쪽"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "남녘"
    ],
    "eumAliases": [
      "남"
    ]
  },
  {
    "h": "女",
    "hun": "계집",
    "eum": "녀",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "女子",
        "read": "여자",
        "mean": "여성인 사람"
      },
      {
        "word": "女王",
        "read": "여왕",
        "mean": "여자 임금"
      },
      {
        "word": "母女",
        "read": "모녀",
        "mean": "어머니와 딸"
      },
      {
        "word": "少女",
        "read": "소녀",
        "mean": "어린 여자아이"
      },
      {
        "word": "長女",
        "read": "장녀",
        "mean": "맏딸"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "계집",
      "여자"
    ],
    "eumAliases": [
      "녀",
      "여",
      "여"
    ]
  },
  {
    "h": "年",
    "hun": "해",
    "eum": "년",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "靑年",
        "read": "청년",
        "mean": "젊은 사람"
      },
      {
        "word": "中年",
        "read": "중년",
        "mean": "마흔 살 안팎의 나이"
      },
      {
        "word": "來年",
        "read": "내년",
        "mean": "올해의 다음 해"
      },
      {
        "word": "每年",
        "read": "매년",
        "mean": "해마다"
      },
      {
        "word": "少年",
        "read": "소년",
        "mean": "어린 남자아이"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "해"
    ],
    "eumAliases": [
      "년",
      "연"
    ]
  },
  {
    "h": "大",
    "hun": "큰",
    "eum": "대",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "大學",
        "read": "대학",
        "mean": "고등학교를 마치고 가는 학교"
      },
      {
        "word": "大門",
        "read": "대문",
        "mean": "집의 큰 문"
      },
      {
        "word": "大韓民國",
        "read": "대한민국",
        "mean": "우리나라의 이름"
      },
      {
        "word": "大小",
        "read": "대소",
        "mean": "크고 작음"
      },
      {
        "word": "大會",
        "read": "대회",
        "mean": "여럿이 모여 겨루는 큰 모임"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "큰"
    ],
    "eumAliases": [
      "대"
    ]
  },
  {
    "h": "東",
    "hun": "동녘",
    "eum": "동",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "東西",
        "read": "동서",
        "mean": "동쪽과 서쪽"
      },
      {
        "word": "東海",
        "read": "동해",
        "mean": "우리나라 동쪽 바다"
      },
      {
        "word": "東大門",
        "read": "동대문",
        "mean": "서울 동쪽의 큰 문"
      },
      {
        "word": "東洋",
        "read": "동양",
        "mean": "아시아의 동쪽 지역"
      },
      {
        "word": "東北",
        "read": "동북",
        "mean": "동쪽과 북쪽 사이 방향"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "동녘"
    ],
    "eumAliases": [
      "동"
    ]
  },
  {
    "h": "六",
    "hun": "여섯",
    "eum": "륙",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "六十",
        "read": "육십",
        "mean": "열의 여섯 배인 수"
      },
      {
        "word": "六月",
        "read": "유월",
        "mean": "한 해의 여섯째 달(유월로 읽어요)"
      },
      {
        "word": "六角形",
        "read": "육각형",
        "mean": "각이 여섯 개인 도형"
      },
      {
        "word": "六寸",
        "read": "육촌",
        "mean": "사촌의 자녀끼리의 친척 관계"
      },
      {
        "word": "六年",
        "read": "육년",
        "mean": ""
      }
    ],
    "grade": 8,
    "hunAliases": [
      "여섯"
    ],
    "eumAliases": [
      "륙",
      "육"
    ]
  },
  {
    "h": "萬",
    "hun": "일만",
    "eum": "만",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "萬一",
        "read": "만일",
        "mean": "혹시 그런 경우에"
      },
      {
        "word": "萬物",
        "read": "만물",
        "mean": "세상의 모든 것"
      },
      {
        "word": "萬歲",
        "read": "만세",
        "mean": "기쁨을 나타내며 외치는 말"
      },
      {
        "word": "萬能",
        "read": "만능",
        "mean": "무엇이든 다 잘함"
      },
      {
        "word": "萬年筆",
        "read": "만년필",
        "mean": "잉크를 넣어 쓰는 펜"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "일만"
    ],
    "eumAliases": [
      "만"
    ]
  },
  {
    "h": "母",
    "hun": "어미",
    "eum": "모",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "父母",
        "read": "부모",
        "mean": "아버지와 어머니"
      },
      {
        "word": "母女",
        "read": "모녀",
        "mean": "어머니와 딸"
      },
      {
        "word": "母國",
        "read": "모국",
        "mean": "자기가 태어난 나라"
      },
      {
        "word": "祖母",
        "read": "조모",
        "mean": "할머니"
      },
      {
        "word": "母音",
        "read": "모음",
        "mean": "ㅏ, ㅓ처럼 홀로 소리 나는 글자"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "어미"
    ],
    "eumAliases": [
      "모"
    ]
  },
  {
    "h": "木",
    "hun": "나무",
    "eum": "목",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "木手",
        "read": "목수",
        "mean": "나무로 집이나 물건을 만드는 사람"
      },
      {
        "word": "木曜日",
        "read": "목요일",
        "mean": "한 주의 넷째 날"
      },
      {
        "word": "草木",
        "read": "초목",
        "mean": "풀과 나무"
      },
      {
        "word": "植木日",
        "read": "식목일",
        "mean": "나무를 심는 날(4월 5일)"
      },
      {
        "word": "木材",
        "read": "목재",
        "mean": "집이나 가구를 만드는 데 쓰는 나무"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "나무"
    ],
    "eumAliases": [
      "목"
    ]
  },
  {
    "h": "門",
    "hun": "문",
    "eum": "문",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "大門",
        "read": "대문",
        "mean": "집의 큰 문"
      },
      {
        "word": "校門",
        "read": "교문",
        "mean": "학교의 정문"
      },
      {
        "word": "正門",
        "read": "정문",
        "mean": "건물 정면에 있는 문"
      },
      {
        "word": "名門",
        "read": "명문",
        "mean": "이름난 좋은 학교나 집안"
      },
      {
        "word": "南大門",
        "read": "남대문",
        "mean": "서울 남쪽의 큰 문(숭례문)"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "문"
    ],
    "eumAliases": [
      "문"
    ]
  },
  {
    "h": "民",
    "hun": "백성",
    "eum": "민",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "國民",
        "read": "국민",
        "mean": "한 나라를 이루는 사람들"
      },
      {
        "word": "市民",
        "read": "시민",
        "mean": "도시에 사는 사람"
      },
      {
        "word": "農民",
        "read": "농민",
        "mean": "농사를 짓는 사람"
      },
      {
        "word": "住民",
        "read": "주민",
        "mean": "그 지역에 사는 사람"
      },
      {
        "word": "民族",
        "read": "민족",
        "mean": "같은 말과 문화를 가진 사람들의 무리"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "백성"
    ],
    "eumAliases": [
      "민"
    ]
  },
  {
    "h": "白",
    "hun": "흰",
    "eum": "백",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "白色",
        "read": "백색",
        "mean": "흰색"
      },
      {
        "word": "白紙",
        "read": "백지",
        "mean": "아무것도 쓰지 않은 흰 종이"
      },
      {
        "word": "白人",
        "read": "백인",
        "mean": "피부가 흰 사람"
      },
      {
        "word": "明白",
        "read": "명백",
        "mean": "아주 뚜렷하고 분명함"
      },
      {
        "word": "白雪",
        "read": "백설",
        "mean": "하얀 눈"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "흰"
    ],
    "eumAliases": [
      "백"
    ]
  },
  {
    "h": "父",
    "hun": "아비",
    "eum": "부",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "父母",
        "read": "부모",
        "mean": "아버지와 어머니"
      },
      {
        "word": "父子",
        "read": "부자",
        "mean": "아버지와 아들"
      },
      {
        "word": "祖父",
        "read": "조부",
        "mean": "할아버지"
      },
      {
        "word": "學父母",
        "read": "학부모",
        "mean": "학생의 부모"
      },
      {
        "word": "祖父母",
        "read": "조부모",
        "mean": "할아버지와 할머니"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "아비"
    ],
    "eumAliases": [
      "부"
    ]
  },
  {
    "h": "北",
    "hun": "북녘",
    "eum": "북",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "南北",
        "read": "남북",
        "mean": "남쪽과 북쪽"
      },
      {
        "word": "北韓",
        "read": "북한",
        "mean": "휴전선 북쪽의 우리 땅"
      },
      {
        "word": "北極",
        "read": "북극",
        "mean": "지구의 가장 북쪽 끝"
      },
      {
        "word": "東北",
        "read": "동북",
        "mean": "동쪽과 북쪽 사이 방향"
      },
      {
        "word": "北斗七星",
        "read": "북두칠성",
        "mean": "국자 모양으로 늘어선 일곱 별"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "북녘"
    ],
    "eumAliases": [
      "북"
    ]
  },
  {
    "h": "四",
    "hun": "넉",
    "eum": "사",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "四月",
        "read": "사월",
        "mean": "한 해의 넷째 달"
      },
      {
        "word": "四寸",
        "read": "사촌",
        "mean": "아버지나 어머니의 형제자매의 자녀"
      },
      {
        "word": "四方",
        "read": "사방",
        "mean": "동서남북 네 방향, 모든 방향"
      },
      {
        "word": "四季節",
        "read": "사계절",
        "mean": "봄, 여름, 가을, 겨울"
      },
      {
        "word": "四角形",
        "read": "사각형",
        "mean": "각이 네 개인 도형"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "넉"
    ],
    "eumAliases": [
      "사"
    ]
  },
  {
    "h": "山",
    "hun": "메",
    "eum": "산",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "登山",
        "read": "등산",
        "mean": "산에 오름"
      },
      {
        "word": "山水",
        "read": "산수",
        "mean": "산과 물, 자연의 경치"
      },
      {
        "word": "火山",
        "read": "화산",
        "mean": "땅속의 뜨거운 물질이 터져 나와 생긴 산"
      },
      {
        "word": "江山",
        "read": "강산",
        "mean": "강과 산, 나라의 땅"
      },
      {
        "word": "山林",
        "read": "산림",
        "mean": "산과 숲"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "메"
    ],
    "eumAliases": [
      "산"
    ]
  },
  {
    "h": "三",
    "hun": "석",
    "eum": "삼",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "三月",
        "read": "삼월",
        "mean": "한 해의 셋째 달"
      },
      {
        "word": "三寸",
        "read": "삼촌",
        "mean": "아버지의 형제"
      },
      {
        "word": "三角形",
        "read": "삼각형",
        "mean": "각이 세 개인 도형"
      },
      {
        "word": "三國",
        "read": "삼국",
        "mean": "고구려, 백제, 신라 세 나라"
      },
      {
        "word": "外三寸",
        "read": "외삼촌",
        "mean": "어머니의 남자 형제"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "석"
    ],
    "eumAliases": [
      "삼"
    ]
  },
  {
    "h": "生",
    "hun": "날",
    "eum": "생",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "學生",
        "read": "학생",
        "mean": "학교에 다니며 배우는 사람"
      },
      {
        "word": "先生",
        "read": "선생",
        "mean": "학생을 가르치는 사람"
      },
      {
        "word": "生日",
        "read": "생일",
        "mean": "태어난 날"
      },
      {
        "word": "生活",
        "read": "생활",
        "mean": "살아가며 활동함"
      },
      {
        "word": "生命",
        "read": "생명",
        "mean": "목숨, 살아 있게 하는 힘"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "날"
    ],
    "eumAliases": [
      "생"
    ]
  },
  {
    "h": "西",
    "hun": "서녘",
    "eum": "서",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "東西",
        "read": "동서",
        "mean": "동쪽과 서쪽"
      },
      {
        "word": "西海",
        "read": "서해",
        "mean": "우리나라 서쪽 바다"
      },
      {
        "word": "西洋",
        "read": "서양",
        "mean": "유럽과 아메리카 쪽 지역"
      },
      {
        "word": "西大門",
        "read": "서대문",
        "mean": "서울 서쪽의 큰 문"
      },
      {
        "word": "西南",
        "read": "서남",
        "mean": ""
      }
    ],
    "grade": 8,
    "hunAliases": [
      "서녘"
    ],
    "eumAliases": [
      "서"
    ]
  },
  {
    "h": "先",
    "hun": "먼저",
    "eum": "선",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "先生",
        "read": "선생",
        "mean": "학생을 가르치는 사람"
      },
      {
        "word": "先後",
        "read": "선후",
        "mean": "먼저와 나중"
      },
      {
        "word": "先金",
        "read": "선금",
        "mean": "물건을 받기 전에 먼저 내는 돈"
      },
      {
        "word": "先祖",
        "read": "선조",
        "mean": "먼 윗대의 조상"
      },
      {
        "word": "優先",
        "read": "우선",
        "mean": "다른 것보다 먼저"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "먼저"
    ],
    "eumAliases": [
      "선"
    ]
  },
  {
    "h": "小",
    "hun": "작을",
    "eum": "소",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "大小",
        "read": "대소",
        "mean": "크고 작음"
      },
      {
        "word": "小國",
        "read": "소국",
        "mean": "작은 나라"
      },
      {
        "word": "小說",
        "read": "소설",
        "mean": "꾸며 낸 이야기를 쓴 글"
      },
      {
        "word": "小便",
        "read": "소변",
        "mean": "오줌"
      },
      {
        "word": "小型",
        "read": "소형",
        "mean": ""
      }
    ],
    "grade": 8,
    "hunAliases": [
      "작을"
    ],
    "eumAliases": [
      "소"
    ]
  },
  {
    "h": "水",
    "hun": "물",
    "eum": "수",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "水門",
        "read": "수문",
        "mean": "물의 흐름을 막거나 여는 문"
      },
      {
        "word": "生水",
        "read": "생수",
        "mean": "끓이지 않은 깨끗한 물"
      },
      {
        "word": "水曜日",
        "read": "수요일",
        "mean": "한 주의 셋째 날"
      },
      {
        "word": "水道",
        "read": "수도",
        "mean": "물을 끌어와 쓰는 시설"
      },
      {
        "word": "食水",
        "read": "식수",
        "mean": "마시는 물"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "물"
    ],
    "eumAliases": [
      "수"
    ]
  },
  {
    "h": "室",
    "hun": "집",
    "eum": "실",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "敎室",
        "read": "교실",
        "mean": "학생들이 모여 공부하는 방"
      },
      {
        "word": "室內",
        "read": "실내",
        "mean": "방이나 건물의 안"
      },
      {
        "word": "王室",
        "read": "왕실",
        "mean": "임금의 집안"
      },
      {
        "word": "化粧室",
        "read": "화장실",
        "mean": "용변을 보는 곳"
      },
      {
        "word": "圖書室",
        "read": "도서실",
        "mean": "책을 모아 두고 읽는 방"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "집"
    ],
    "eumAliases": [
      "실"
    ]
  },
  {
    "h": "十",
    "hun": "열",
    "eum": "십",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "十月",
        "read": "시월",
        "mean": "한 해의 열째 달(시월로 읽어요)"
      },
      {
        "word": "十萬",
        "read": "십만",
        "mean": "만의 열 배인 수"
      },
      {
        "word": "十字",
        "read": "십자",
        "mean": "十 모양"
      },
      {
        "word": "十年",
        "read": "십년",
        "mean": "열 해"
      },
      {
        "word": "九十",
        "read": "구십",
        "mean": "열의 아홉 배인 수"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "열"
    ],
    "eumAliases": [
      "십"
    ]
  },
  {
    "h": "五",
    "hun": "다섯",
    "eum": "오",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "五月",
        "read": "오월",
        "mean": "한 해의 다섯째 달"
      },
      {
        "word": "五十",
        "read": "오십",
        "mean": "열의 다섯 배인 수"
      },
      {
        "word": "五色",
        "read": "오색",
        "mean": "다섯 가지 빛깔, 여러 빛깔"
      },
      {
        "word": "五感",
        "read": "오감",
        "mean": "보고 듣고 맡고 맛보고 느끼는 다섯 감각"
      },
      {
        "word": "第五",
        "read": "제오",
        "mean": ""
      }
    ],
    "grade": 8,
    "hunAliases": [
      "다섯"
    ],
    "eumAliases": [
      "오"
    ]
  },
  {
    "h": "王",
    "hun": "임금",
    "eum": "왕",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "王國",
        "read": "왕국",
        "mean": "임금이 다스리는 나라"
      },
      {
        "word": "女王",
        "read": "여왕",
        "mean": "여자 임금"
      },
      {
        "word": "王子",
        "read": "왕자",
        "mean": "임금의 아들"
      },
      {
        "word": "大王",
        "read": "대왕",
        "mean": "훌륭한 임금을 높여 부르는 말"
      },
      {
        "word": "王室",
        "read": "왕실",
        "mean": "임금의 집안"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "임금"
    ],
    "eumAliases": [
      "왕"
    ]
  },
  {
    "h": "外",
    "hun": "바깥",
    "eum": "외",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "外國",
        "read": "외국",
        "mean": "우리나라가 아닌 다른 나라"
      },
      {
        "word": "外出",
        "read": "외출",
        "mean": "집 밖에 나감"
      },
      {
        "word": "外三寸",
        "read": "외삼촌",
        "mean": "어머니의 남자 형제"
      },
      {
        "word": "內外",
        "read": "내외",
        "mean": "안과 밖"
      },
      {
        "word": "外食",
        "read": "외식",
        "mean": "집 밖에서 사 먹는 식사"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "바깥"
    ],
    "eumAliases": [
      "외"
    ]
  },
  {
    "h": "月",
    "hun": "달",
    "eum": "월",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "月曜日",
        "read": "월요일",
        "mean": "한 주의 첫째 날"
      },
      {
        "word": "每月",
        "read": "매월",
        "mean": "달마다"
      },
      {
        "word": "月末",
        "read": "월말",
        "mean": "그달의 끝 무렵"
      },
      {
        "word": "正月",
        "read": "정월",
        "mean": "음력으로 한 해의 첫째 달"
      },
      {
        "word": "九月",
        "read": "구월",
        "mean": "한 해의 아홉째 달"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "달"
    ],
    "eumAliases": [
      "월"
    ]
  },
  {
    "h": "二",
    "hun": "두",
    "eum": "이",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "二月",
        "read": "이월",
        "mean": "한 해의 둘째 달"
      },
      {
        "word": "二十",
        "read": "이십",
        "mean": "열의 두 배인 수"
      },
      {
        "word": "二重",
        "read": "이중",
        "mean": "두 겹"
      },
      {
        "word": "二等",
        "read": "이등",
        "mean": "둘째 등수"
      },
      {
        "word": "第二",
        "read": "제이",
        "mean": ""
      }
    ],
    "grade": 8,
    "hunAliases": [
      "두"
    ],
    "eumAliases": [
      "이"
    ]
  },
  {
    "h": "人",
    "hun": "사람",
    "eum": "인",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "人間",
        "read": "인간",
        "mean": "사람"
      },
      {
        "word": "人生",
        "read": "인생",
        "mean": "사람이 살아가는 일"
      },
      {
        "word": "軍人",
        "read": "군인",
        "mean": "나라를 지키는 일을 하는 사람"
      },
      {
        "word": "主人",
        "read": "주인",
        "mean": "물건이나 집을 가진 사람"
      },
      {
        "word": "人口",
        "read": "인구",
        "mean": "한 지역에 사는 사람의 수"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "사람"
    ],
    "eumAliases": [
      "인"
    ]
  },
  {
    "h": "一",
    "hun": "한",
    "eum": "일",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "一月",
        "read": "일월",
        "mean": "한 해의 첫째 달"
      },
      {
        "word": "一生",
        "read": "일생",
        "mean": "태어나서 죽을 때까지"
      },
      {
        "word": "一等",
        "read": "일등",
        "mean": "첫째 등수"
      },
      {
        "word": "同一",
        "read": "동일",
        "mean": "똑같음"
      },
      {
        "word": "萬一",
        "read": "만일",
        "mean": "혹시 그런 경우에"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "한"
    ],
    "eumAliases": [
      "일"
    ]
  },
  {
    "h": "日",
    "hun": "날",
    "eum": "일",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "生日",
        "read": "생일",
        "mean": "태어난 날"
      },
      {
        "word": "每日",
        "read": "매일",
        "mean": "날마다"
      },
      {
        "word": "日記",
        "read": "일기",
        "mean": "하루 동안 겪은 일을 적은 글"
      },
      {
        "word": "休日",
        "read": "휴일",
        "mean": "쉬는 날"
      },
      {
        "word": "日出",
        "read": "일출",
        "mean": "해가 뜸"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "날"
    ],
    "eumAliases": [
      "일"
    ]
  },
  {
    "h": "長",
    "hun": "긴",
    "eum": "장",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "校長",
        "read": "교장",
        "mean": "학교에서 가장 높은 선생님"
      },
      {
        "word": "長女",
        "read": "장녀",
        "mean": "맏딸"
      },
      {
        "word": "長男",
        "read": "장남",
        "mean": "맏아들"
      },
      {
        "word": "成長",
        "read": "성장",
        "mean": "자라서 커짐"
      },
      {
        "word": "長點",
        "read": "장점",
        "mean": "좋은 점"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "긴"
    ],
    "eumAliases": [
      "장"
    ]
  },
  {
    "h": "弟",
    "hun": "아우",
    "eum": "제",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "兄弟",
        "read": "형제",
        "mean": "형과 아우"
      },
      {
        "word": "弟子",
        "read": "제자",
        "mean": "가르침을 받는 사람"
      },
      {
        "word": "子弟",
        "read": "자제",
        "mean": "남의 아들을 높여 부르는 말"
      },
      {
        "word": "師弟",
        "read": "사제",
        "mean": "스승과 제자"
      },
      {
        "word": "弟婦",
        "read": "제부",
        "mean": ""
      }
    ],
    "grade": 8,
    "hunAliases": [
      "아우"
    ],
    "eumAliases": [
      "제"
    ]
  },
  {
    "h": "中",
    "hun": "가운데",
    "eum": "중",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "中心",
        "read": "중심",
        "mean": "한가운데"
      },
      {
        "word": "中學校",
        "read": "중학교",
        "mean": "초등학교 다음에 다니는 학교"
      },
      {
        "word": "空中",
        "read": "공중",
        "mean": "하늘과 땅 사이"
      },
      {
        "word": "中間",
        "read": "중간",
        "mean": "두 사물의 사이"
      },
      {
        "word": "集中",
        "read": "집중",
        "mean": "한곳에 모음"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "가운데"
    ],
    "eumAliases": [
      "중"
    ]
  },
  {
    "h": "靑",
    "hun": "푸를",
    "eum": "청",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "靑年",
        "read": "청년",
        "mean": "젊은 사람"
      },
      {
        "word": "靑山",
        "read": "청산",
        "mean": "푸른 산"
      },
      {
        "word": "靑少年",
        "read": "청소년",
        "mean": "십 대의 젊은이"
      },
      {
        "word": "靑色",
        "read": "청색",
        "mean": "파란색"
      },
      {
        "word": "靑春",
        "read": "청춘",
        "mean": "젊은 시절"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "푸를"
    ],
    "eumAliases": [
      "청"
    ]
  },
  {
    "h": "寸",
    "hun": "마디",
    "eum": "촌",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "三寸",
        "read": "삼촌",
        "mean": "아버지의 형제"
      },
      {
        "word": "四寸",
        "read": "사촌",
        "mean": "아버지나 어머니의 형제자매의 자녀"
      },
      {
        "word": "外三寸",
        "read": "외삼촌",
        "mean": "어머니의 남자 형제"
      },
      {
        "word": "寸數",
        "read": "촌수",
        "mean": "친척 사이의 가깝고 먼 정도를 나타내는 수"
      },
      {
        "word": "六寸",
        "read": "육촌",
        "mean": "사촌의 자녀끼리의 친척 관계"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "마디"
    ],
    "eumAliases": [
      "촌"
    ]
  },
  {
    "h": "七",
    "hun": "일곱",
    "eum": "칠",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "七月",
        "read": "칠월",
        "mean": "한 해의 일곱째 달"
      },
      {
        "word": "七十",
        "read": "칠십",
        "mean": "열의 일곱 배인 수"
      },
      {
        "word": "七夕",
        "read": "칠석",
        "mean": "음력 7월 7일, 견우와 직녀가 만나는 날"
      },
      {
        "word": "北斗七星",
        "read": "북두칠성",
        "mean": "국자 모양으로 늘어선 일곱 별"
      },
      {
        "word": "七色",
        "read": "칠색",
        "mean": ""
      }
    ],
    "grade": 8,
    "hunAliases": [
      "일곱"
    ],
    "eumAliases": [
      "칠"
    ]
  },
  {
    "h": "土",
    "hun": "흙",
    "eum": "토",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "國土",
        "read": "국토",
        "mean": "나라의 땅"
      },
      {
        "word": "土地",
        "read": "토지",
        "mean": "땅"
      },
      {
        "word": "土曜日",
        "read": "토요일",
        "mean": "한 주의 여섯째 날"
      },
      {
        "word": "黃土",
        "read": "황토",
        "mean": "누런 흙"
      },
      {
        "word": "土木",
        "read": "토목",
        "mean": "땅을 고르고 길이나 다리를 만드는 일"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "흙"
    ],
    "eumAliases": [
      "토"
    ]
  },
  {
    "h": "八",
    "hun": "여덟",
    "eum": "팔",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "八月",
        "read": "팔월",
        "mean": "한 해의 여덟째 달"
      },
      {
        "word": "八十",
        "read": "팔십",
        "mean": "열의 여덟 배인 수"
      },
      {
        "word": "八道",
        "read": "팔도",
        "mean": "우리나라 전체를 이르는 말"
      },
      {
        "word": "八方",
        "read": "팔방",
        "mean": "여덟 방향, 모든 방향"
      },
      {
        "word": "八角",
        "read": "팔각",
        "mean": ""
      }
    ],
    "grade": 8,
    "hunAliases": [
      "여덟"
    ],
    "eumAliases": [
      "팔"
    ]
  },
  {
    "h": "學",
    "hun": "배울",
    "eum": "학",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "學校",
        "read": "학교",
        "mean": "학생들이 모여 배우는 곳"
      },
      {
        "word": "學生",
        "read": "학생",
        "mean": "학교에 다니며 배우는 사람"
      },
      {
        "word": "學年",
        "read": "학년",
        "mean": "학교에서 한 해 단위로 나눈 단계"
      },
      {
        "word": "數學",
        "read": "수학",
        "mean": "수와 양을 다루는 과목"
      },
      {
        "word": "入學",
        "read": "입학",
        "mean": "학교에 들어감"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "배울"
    ],
    "eumAliases": [
      "학"
    ]
  },
  {
    "h": "韓",
    "hun": "한국",
    "eum": "한",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "韓國",
        "read": "한국",
        "mean": "우리나라, 대한민국"
      },
      {
        "word": "大韓民國",
        "read": "대한민국",
        "mean": "우리나라의 이름"
      },
      {
        "word": "韓服",
        "read": "한복",
        "mean": "우리나라 전통 옷"
      },
      {
        "word": "韓食",
        "read": "한식",
        "mean": "우리나라 전통 음식"
      },
      {
        "word": "韓屋",
        "read": "한옥",
        "mean": "우리나라 전통 집"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "나라",
      "한국"
    ],
    "eumAliases": [
      "한"
    ]
  },
  {
    "h": "兄",
    "hun": "형",
    "eum": "형",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "兄弟",
        "read": "형제",
        "mean": "형과 아우"
      },
      {
        "word": "兄夫",
        "read": "형부",
        "mean": "언니의 남편"
      },
      {
        "word": "親兄",
        "read": "친형",
        "mean": "같은 부모에게서 난 형"
      },
      {
        "word": "兄弟愛",
        "read": "형제애",
        "mean": ""
      },
      {
        "word": "兄弟間",
        "read": "형제간",
        "mean": ""
      }
    ],
    "grade": 8,
    "hunAliases": [
      "형"
    ],
    "eumAliases": [
      "형"
    ]
  },
  {
    "h": "火",
    "hun": "불",
    "eum": "화",
    "level": 0,
    "levelName": "8급",
    "words": [
      {
        "word": "火山",
        "read": "화산",
        "mean": "땅속의 뜨거운 물질이 터져 나와 생긴 산"
      },
      {
        "word": "火曜日",
        "read": "화요일",
        "mean": "한 주의 둘째 날"
      },
      {
        "word": "火災",
        "read": "화재",
        "mean": "불이 나는 사고"
      },
      {
        "word": "火力",
        "read": "화력",
        "mean": "불의 힘"
      },
      {
        "word": "消火器",
        "read": "소화기",
        "mean": "불을 끄는 기구"
      }
    ],
    "grade": 8,
    "hunAliases": [
      "불"
    ],
    "eumAliases": [
      "화"
    ]
  },
  {
    "h": "家",
    "hun": "집",
    "eum": "가",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "家族",
        "read": "가족",
        "mean": "한집에 사는 부모와 자녀"
      },
      {
        "word": "國家",
        "read": "국가",
        "mean": "나라"
      },
      {
        "word": "家門",
        "read": "가문",
        "mean": "집안"
      },
      {
        "word": "作家",
        "read": "작가",
        "mean": "글이나 작품을 만드는 사람"
      },
      {
        "word": "家事",
        "read": "가사",
        "mean": "집안일"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "집"
    ],
    "eumAliases": [
      "가"
    ]
  },
  {
    "h": "間",
    "hun": "사이",
    "eum": "간",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "時間",
        "read": "시간",
        "mean": "어떤 때부터 어떤 때까지의 동안"
      },
      {
        "word": "人間",
        "read": "인간",
        "mean": "사람"
      },
      {
        "word": "空間",
        "read": "공간",
        "mean": "비어 있는 자리"
      },
      {
        "word": "中間",
        "read": "중간",
        "mean": "두 사물의 사이"
      },
      {
        "word": "夜間",
        "read": "야간",
        "mean": "밤 동안"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "사이"
    ],
    "eumAliases": [
      "간"
    ]
  },
  {
    "h": "江",
    "hun": "강",
    "eum": "강",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "漢江",
        "read": "한강",
        "mean": "서울을 흐르는 큰 강"
      },
      {
        "word": "江山",
        "read": "강산",
        "mean": "강과 산, 나라의 땅"
      },
      {
        "word": "江南",
        "read": "강남",
        "mean": "강의 남쪽"
      },
      {
        "word": "江村",
        "read": "강촌",
        "mean": "강가에 있는 마을"
      },
      {
        "word": "江邊",
        "read": "강변",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "강"
    ],
    "eumAliases": [
      "강"
    ]
  },
  {
    "h": "車",
    "hun": "수레",
    "eum": "거·차",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "自動車",
        "read": "자동차",
        "mean": "엔진의 힘으로 움직이는 차"
      },
      {
        "word": "車道",
        "read": "차도",
        "mean": "차가 다니는 길"
      },
      {
        "word": "電車",
        "read": "전차",
        "mean": "전기로 움직이는 차"
      },
      {
        "word": "自轉車",
        "read": "자전거",
        "mean": "발로 바퀴를 굴려 타는 것(거로 읽어요)"
      },
      {
        "word": "人力車",
        "read": "인력거",
        "mean": "사람이 끄는 수레(거로 읽어요)"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "수레"
    ],
    "eumAliases": [
      "거"
    ]
  },
  {
    "h": "工",
    "hun": "장인",
    "eum": "공",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "工場",
        "read": "공장",
        "mean": "물건을 만드는 곳"
      },
      {
        "word": "人工",
        "read": "인공",
        "mean": "사람이 만든 것"
      },
      {
        "word": "工夫",
        "read": "공부",
        "mean": "학문이나 기술을 배우고 익힘"
      },
      {
        "word": "工事",
        "read": "공사",
        "mean": "건물이나 길을 짓는 일"
      },
      {
        "word": "工作",
        "read": "공작",
        "mean": "물건을 만듦"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "장인"
    ],
    "eumAliases": [
      "공"
    ]
  },
  {
    "h": "空",
    "hun": "빌",
    "eum": "공",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "空間",
        "read": "공간",
        "mean": "비어 있는 자리"
      },
      {
        "word": "空氣",
        "read": "공기",
        "mean": "우리가 숨 쉬는 기체"
      },
      {
        "word": "空中",
        "read": "공중",
        "mean": "하늘과 땅 사이"
      },
      {
        "word": "空港",
        "read": "공항",
        "mean": "비행기가 뜨고 내리는 곳"
      },
      {
        "word": "空白",
        "read": "공백",
        "mean": "아무것도 없이 비어 있음"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "빌"
    ],
    "eumAliases": [
      "공"
    ]
  },
  {
    "h": "記",
    "hun": "기록할",
    "eum": "기",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "日記",
        "read": "일기",
        "mean": "하루 동안 겪은 일을 적은 글"
      },
      {
        "word": "記入",
        "read": "기입",
        "mean": "적어 넣음"
      },
      {
        "word": "記者",
        "read": "기자",
        "mean": "신문이나 방송의 소식을 취재하는 사람"
      },
      {
        "word": "記錄",
        "read": "기록",
        "mean": "나중에 알 수 있게 적어 둠"
      },
      {
        "word": "暗記",
        "read": "암기",
        "mean": "외움"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "기록할"
    ],
    "eumAliases": [
      "기"
    ]
  },
  {
    "h": "氣",
    "hun": "기운",
    "eum": "기",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "空氣",
        "read": "공기",
        "mean": "우리가 숨 쉬는 기체"
      },
      {
        "word": "電氣",
        "read": "전기",
        "mean": "빛과 열을 내는 에너지"
      },
      {
        "word": "氣分",
        "read": "기분",
        "mean": "마음의 상태"
      },
      {
        "word": "人氣",
        "read": "인기",
        "mean": "많은 사람이 좋아함"
      },
      {
        "word": "氣溫",
        "read": "기온",
        "mean": "공기의 온도"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "기운"
    ],
    "eumAliases": [
      "기"
    ]
  },
  {
    "h": "男",
    "hun": "사내",
    "eum": "남",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "男子",
        "read": "남자",
        "mean": "남성인 사람"
      },
      {
        "word": "男女",
        "read": "남녀",
        "mean": "남자와 여자"
      },
      {
        "word": "長男",
        "read": "장남",
        "mean": "맏아들"
      },
      {
        "word": "美男",
        "read": "미남",
        "mean": "잘생긴 남자"
      },
      {
        "word": "男兒",
        "read": "남아",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "사내"
    ],
    "eumAliases": [
      "남"
    ]
  },
  {
    "h": "內",
    "hun": "안",
    "eum": "내",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "室內",
        "read": "실내",
        "mean": "방이나 건물의 안"
      },
      {
        "word": "內外",
        "read": "내외",
        "mean": "안과 밖"
      },
      {
        "word": "內容",
        "read": "내용",
        "mean": "속에 담긴 것"
      },
      {
        "word": "案內",
        "read": "안내",
        "mean": "어떤 곳이나 일을 알려 줌"
      },
      {
        "word": "以內",
        "read": "이내",
        "mean": "일정한 범위의 안"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "안"
    ],
    "eumAliases": [
      "내"
    ]
  },
  {
    "h": "農",
    "hun": "농사",
    "eum": "농",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "農民",
        "read": "농민",
        "mean": "농사를 짓는 사람"
      },
      {
        "word": "農村",
        "read": "농촌",
        "mean": "농사짓는 사람들이 사는 마을"
      },
      {
        "word": "農事",
        "read": "농사",
        "mean": "곡식이나 채소를 기르는 일"
      },
      {
        "word": "農夫",
        "read": "농부",
        "mean": "농사짓는 사람"
      },
      {
        "word": "農業",
        "read": "농업",
        "mean": "농사를 짓는 산업"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "농사"
    ],
    "eumAliases": [
      "농"
    ]
  },
  {
    "h": "答",
    "hun": "대답",
    "eum": "답",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "正答",
        "read": "정답",
        "mean": "옳은 답"
      },
      {
        "word": "問答",
        "read": "문답",
        "mean": "묻고 대답함"
      },
      {
        "word": "對答",
        "read": "대답",
        "mean": "물음에 답함"
      },
      {
        "word": "答狀",
        "read": "답장",
        "mean": "받은 편지에 답하여 보내는 편지"
      },
      {
        "word": "答案",
        "read": "답안",
        "mean": "문제에 대한 답"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "대답"
    ],
    "eumAliases": [
      "답"
    ]
  },
  {
    "h": "道",
    "hun": "길",
    "eum": "도",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "道路",
        "read": "도로",
        "mean": "사람과 차가 다니는 길"
      },
      {
        "word": "車道",
        "read": "차도",
        "mean": "차가 다니는 길"
      },
      {
        "word": "人道",
        "read": "인도",
        "mean": "사람이 다니는 길"
      },
      {
        "word": "孝道",
        "read": "효도",
        "mean": "부모를 잘 모시는 일"
      },
      {
        "word": "水道",
        "read": "수도",
        "mean": "물을 끌어와 쓰는 시설"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "길"
    ],
    "eumAliases": [
      "도"
    ]
  },
  {
    "h": "動",
    "hun": "움직일",
    "eum": "동",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "動物",
        "read": "동물",
        "mean": "움직이며 사는 생물"
      },
      {
        "word": "運動",
        "read": "운동",
        "mean": "몸을 움직이는 일"
      },
      {
        "word": "自動",
        "read": "자동",
        "mean": "스스로 움직임"
      },
      {
        "word": "活動",
        "read": "활동",
        "mean": "힘차게 움직임"
      },
      {
        "word": "感動",
        "read": "감동",
        "mean": "크게 느껴 마음이 움직임"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "움직일"
    ],
    "eumAliases": [
      "동"
    ]
  },
  {
    "h": "力",
    "hun": "힘",
    "eum": "력",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "電力",
        "read": "전력",
        "mean": "전기의 힘"
      },
      {
        "word": "國力",
        "read": "국력",
        "mean": "나라의 힘"
      },
      {
        "word": "努力",
        "read": "노력",
        "mean": "힘을 다해 애씀"
      },
      {
        "word": "能力",
        "read": "능력",
        "mean": "일을 해낼 수 있는 힘"
      },
      {
        "word": "體力",
        "read": "체력",
        "mean": "몸의 힘"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "힘"
    ],
    "eumAliases": [
      "력",
      "역"
    ]
  },
  {
    "h": "立",
    "hun": "설",
    "eum": "립",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "國立",
        "read": "국립",
        "mean": "나라에서 세움"
      },
      {
        "word": "自立",
        "read": "자립",
        "mean": "남에게 기대지 않고 스스로 섬"
      },
      {
        "word": "立場",
        "read": "입장",
        "mean": "처한 형편이나 생각"
      },
      {
        "word": "起立",
        "read": "기립",
        "mean": "일어섬"
      },
      {
        "word": "中立",
        "read": "중립",
        "mean": "어느 편에도 서지 않음"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "설"
    ],
    "eumAliases": [
      "립"
    ]
  },
  {
    "h": "每",
    "hun": "매양",
    "eum": "매",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "每日",
        "read": "매일",
        "mean": "날마다"
      },
      {
        "word": "每年",
        "read": "매년",
        "mean": "해마다"
      },
      {
        "word": "每週",
        "read": "매주",
        "mean": "주마다"
      },
      {
        "word": "每月",
        "read": "매월",
        "mean": "달마다"
      },
      {
        "word": "每事",
        "read": "매사",
        "mean": "모든 일"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "매양"
    ],
    "eumAliases": [
      "매"
    ]
  },
  {
    "h": "名",
    "hun": "이름",
    "eum": "명",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "姓名",
        "read": "성명",
        "mean": "성과 이름"
      },
      {
        "word": "有名",
        "read": "유명",
        "mean": "이름이 널리 알려짐"
      },
      {
        "word": "名門",
        "read": "명문",
        "mean": "이름난 좋은 학교나 집안"
      },
      {
        "word": "名作",
        "read": "명작",
        "mean": "훌륭한 작품"
      },
      {
        "word": "地名",
        "read": "지명",
        "mean": "땅의 이름"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "이름"
    ],
    "eumAliases": [
      "명"
    ]
  },
  {
    "h": "物",
    "hun": "물건",
    "eum": "물",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "動物",
        "read": "동물",
        "mean": "움직이며 사는 생물"
      },
      {
        "word": "植物",
        "read": "식물",
        "mean": "뿌리를 내리고 자라는 생물"
      },
      {
        "word": "人物",
        "read": "인물",
        "mean": "사람"
      },
      {
        "word": "物件",
        "read": "물건",
        "mean": "사람이 쓰는 여러 물체"
      },
      {
        "word": "生物",
        "read": "생물",
        "mean": "살아 있는 것"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "물건"
    ],
    "eumAliases": [
      "물"
    ]
  },
  {
    "h": "方",
    "hun": "모",
    "eum": "방",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "四方",
        "read": "사방",
        "mean": "동서남북 네 방향, 모든 방향"
      },
      {
        "word": "地方",
        "read": "지방",
        "mean": "어느 한 지역"
      },
      {
        "word": "方法",
        "read": "방법",
        "mean": "일을 해 나가는 길"
      },
      {
        "word": "方向",
        "read": "방향",
        "mean": "향하는 쪽"
      },
      {
        "word": "前方",
        "read": "전방",
        "mean": "앞쪽"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "모"
    ],
    "eumAliases": [
      "방"
    ]
  },
  {
    "h": "不",
    "hun": "아닐",
    "eum": "불",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "不安",
        "read": "불안",
        "mean": "마음이 편하지 않음"
      },
      {
        "word": "不足",
        "read": "부족",
        "mean": "모자람(부로 읽어요)"
      },
      {
        "word": "不便",
        "read": "불편",
        "mean": "편하지 않음"
      },
      {
        "word": "不正",
        "read": "부정",
        "mean": "바르지 않음(부로 읽어요)"
      },
      {
        "word": "不可能",
        "read": "불가능",
        "mean": "할 수 없음"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "아닐"
    ],
    "eumAliases": [
      "불"
    ]
  },
  {
    "h": "事",
    "hun": "일",
    "eum": "사",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "人事",
        "read": "인사",
        "mean": "만나거나 헤어질 때 예를 차림"
      },
      {
        "word": "工事",
        "read": "공사",
        "mean": "건물이나 길을 짓는 일"
      },
      {
        "word": "事實",
        "read": "사실",
        "mean": "실제로 있었던 일"
      },
      {
        "word": "食事",
        "read": "식사",
        "mean": "밥을 먹음"
      },
      {
        "word": "行事",
        "read": "행사",
        "mean": "여럿이 모여 치르는 일"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "일"
    ],
    "eumAliases": [
      "사"
    ]
  },
  {
    "h": "上",
    "hun": "윗",
    "eum": "상",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "上下",
        "read": "상하",
        "mean": "위와 아래"
      },
      {
        "word": "世上",
        "read": "세상",
        "mean": "사람이 사는 온 누리"
      },
      {
        "word": "頂上",
        "read": "정상",
        "mean": "산의 맨 꼭대기"
      },
      {
        "word": "地上",
        "read": "지상",
        "mean": "땅의 위"
      },
      {
        "word": "上手",
        "read": "상수",
        "mean": "솜씨가 뛰어난 사람"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "윗"
    ],
    "eumAliases": [
      "상"
    ]
  },
  {
    "h": "姓",
    "hun": "성",
    "eum": "성",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "姓名",
        "read": "성명",
        "mean": "성과 이름"
      },
      {
        "word": "百姓",
        "read": "백성",
        "mean": "나라의 일반 사람들"
      },
      {
        "word": "同姓",
        "read": "동성",
        "mean": "같은 성"
      },
      {
        "word": "姓氏",
        "read": "성씨",
        "mean": "성을 높여 부르는 말"
      },
      {
        "word": "異姓",
        "read": "이성",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "성"
    ],
    "eumAliases": [
      "성"
    ]
  },
  {
    "h": "世",
    "hun": "인간",
    "eum": "세",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "世上",
        "read": "세상",
        "mean": "사람이 사는 온 누리"
      },
      {
        "word": "世界",
        "read": "세계",
        "mean": "지구 위의 모든 나라"
      },
      {
        "word": "後世",
        "read": "후세",
        "mean": "다음에 오는 세대"
      },
      {
        "word": "世代",
        "read": "세대",
        "mean": "비슷한 나이의 사람들"
      },
      {
        "word": "世間",
        "read": "세간",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "인간"
    ],
    "eumAliases": [
      "세"
    ]
  },
  {
    "h": "手",
    "hun": "손",
    "eum": "수",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "手足",
        "read": "수족",
        "mean": "손과 발"
      },
      {
        "word": "木手",
        "read": "목수",
        "mean": "나무로 집이나 물건을 만드는 사람"
      },
      {
        "word": "歌手",
        "read": "가수",
        "mean": "노래를 부르는 사람"
      },
      {
        "word": "選手",
        "read": "선수",
        "mean": "운동 경기에 나가는 사람"
      },
      {
        "word": "拍手",
        "read": "박수",
        "mean": "손뼉을 침"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "손"
    ],
    "eumAliases": [
      "수"
    ]
  },
  {
    "h": "市",
    "hun": "저자",
    "eum": "시",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "市場",
        "read": "시장",
        "mean": "물건을 사고파는 곳"
      },
      {
        "word": "市民",
        "read": "시민",
        "mean": "도시에 사는 사람"
      },
      {
        "word": "都市",
        "read": "도시",
        "mean": "사람이 많이 사는 큰 고장"
      },
      {
        "word": "市內",
        "read": "시내",
        "mean": "도시의 안"
      },
      {
        "word": "市外",
        "read": "시외",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "저자"
    ],
    "eumAliases": [
      "시"
    ]
  },
  {
    "h": "時",
    "hun": "때",
    "eum": "시",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "時間",
        "read": "시간",
        "mean": "어떤 때부터 어떤 때까지의 동안"
      },
      {
        "word": "時計",
        "read": "시계",
        "mean": "시간을 알려 주는 기계"
      },
      {
        "word": "同時",
        "read": "동시",
        "mean": "같은 때"
      },
      {
        "word": "當時",
        "read": "당시",
        "mean": "일이 있었던 그때"
      },
      {
        "word": "時代",
        "read": "시대",
        "mean": "역사의 어느 기간"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "때"
    ],
    "eumAliases": [
      "시"
    ]
  },
  {
    "h": "食",
    "hun": "밥",
    "eum": "식",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "食事",
        "read": "식사",
        "mean": "밥을 먹음"
      },
      {
        "word": "食口",
        "read": "식구",
        "mean": "한집에 함께 사는 사람"
      },
      {
        "word": "韓食",
        "read": "한식",
        "mean": "우리나라 전통 음식"
      },
      {
        "word": "外食",
        "read": "외식",
        "mean": "집 밖에서 사 먹는 식사"
      },
      {
        "word": "給食",
        "read": "급식",
        "mean": "학교나 단체에서 주는 밥"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "먹을",
      "밥"
    ],
    "eumAliases": [
      "식"
    ]
  },
  {
    "h": "安",
    "hun": "편안",
    "eum": "안",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "安全",
        "read": "안전",
        "mean": "위험하지 않음"
      },
      {
        "word": "平安",
        "read": "평안",
        "mean": "걱정 없이 편안함"
      },
      {
        "word": "不安",
        "read": "불안",
        "mean": "마음이 편하지 않음"
      },
      {
        "word": "安心",
        "read": "안심",
        "mean": "걱정 없이 마음을 놓음"
      },
      {
        "word": "便安",
        "read": "편안",
        "mean": "편하고 걱정이 없음"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "편안"
    ],
    "eumAliases": [
      "안"
    ]
  },
  {
    "h": "午",
    "hun": "낮",
    "eum": "오",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "午前",
        "read": "오전",
        "mean": "밤 12시부터 낮 12시까지"
      },
      {
        "word": "午後",
        "read": "오후",
        "mean": "낮 12시부터 밤 12시까지"
      },
      {
        "word": "正午",
        "read": "정오",
        "mean": "낮 12시"
      },
      {
        "word": "午睡",
        "read": "오수",
        "mean": ""
      },
      {
        "word": "午餐",
        "read": "오찬",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "낮"
    ],
    "eumAliases": [
      "오"
    ]
  },
  {
    "h": "右",
    "hun": "오른",
    "eum": "우",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "左右",
        "read": "좌우",
        "mean": "왼쪽과 오른쪽"
      },
      {
        "word": "右側",
        "read": "우측",
        "mean": "오른쪽"
      },
      {
        "word": "右回轉",
        "read": "우회전",
        "mean": "오른쪽으로 돎"
      },
      {
        "word": "右手",
        "read": "우수",
        "mean": ""
      },
      {
        "word": "右岸",
        "read": "우안",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "오를",
      "오른"
    ],
    "eumAliases": [
      "우"
    ]
  },
  {
    "h": "子",
    "hun": "아들",
    "eum": "자",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "子女",
        "read": "자녀",
        "mean": "아들과 딸"
      },
      {
        "word": "父子",
        "read": "부자",
        "mean": "아버지와 아들"
      },
      {
        "word": "王子",
        "read": "왕자",
        "mean": "임금의 아들"
      },
      {
        "word": "孝子",
        "read": "효자",
        "mean": "부모를 잘 모시는 아들"
      },
      {
        "word": "子孫",
        "read": "자손",
        "mean": "아들과 손자, 뒤에 이어지는 후손"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "아들"
    ],
    "eumAliases": [
      "자"
    ]
  },
  {
    "h": "自",
    "hun": "스스로",
    "eum": "자",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "自動",
        "read": "자동",
        "mean": "스스로 움직임"
      },
      {
        "word": "自然",
        "read": "자연",
        "mean": "사람이 만들지 않은 산, 강, 바다 같은 세상"
      },
      {
        "word": "自身",
        "read": "자신",
        "mean": "바로 그 사람 자기"
      },
      {
        "word": "自信",
        "read": "자신",
        "mean": "스스로 할 수 있다고 믿음"
      },
      {
        "word": "自由",
        "read": "자유",
        "mean": "남에게 얽매이지 않고 마음대로 함"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "스스로"
    ],
    "eumAliases": [
      "자"
    ]
  },
  {
    "h": "場",
    "hun": "마당",
    "eum": "장",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "市場",
        "read": "시장",
        "mean": "물건을 사고파는 곳"
      },
      {
        "word": "工場",
        "read": "공장",
        "mean": "물건을 만드는 곳"
      },
      {
        "word": "運動場",
        "read": "운동장",
        "mean": "운동을 하는 넓은 마당"
      },
      {
        "word": "入場",
        "read": "입장",
        "mean": "안으로 들어감"
      },
      {
        "word": "場所",
        "read": "장소",
        "mean": "어떤 일이 일어나는 곳"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "마당"
    ],
    "eumAliases": [
      "장"
    ]
  },
  {
    "h": "全",
    "hun": "온전",
    "eum": "전",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "安全",
        "read": "안전",
        "mean": "위험하지 않음"
      },
      {
        "word": "全國",
        "read": "전국",
        "mean": "온 나라"
      },
      {
        "word": "全部",
        "read": "전부",
        "mean": "모두"
      },
      {
        "word": "完全",
        "read": "완전",
        "mean": "모자람이 없음"
      },
      {
        "word": "全體",
        "read": "전체",
        "mean": "모든 부분"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "온전"
    ],
    "eumAliases": [
      "전"
    ]
  },
  {
    "h": "前",
    "hun": "앞",
    "eum": "전",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "午前",
        "read": "오전",
        "mean": "밤 12시부터 낮 12시까지"
      },
      {
        "word": "前後",
        "read": "전후",
        "mean": "앞과 뒤"
      },
      {
        "word": "以前",
        "read": "이전",
        "mean": "지금보다 앞선 때"
      },
      {
        "word": "前進",
        "read": "전진",
        "mean": "앞으로 나아감"
      },
      {
        "word": "事前",
        "read": "사전",
        "mean": "일이 일어나기 전"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "앞"
    ],
    "eumAliases": [
      "전"
    ]
  },
  {
    "h": "電",
    "hun": "번개",
    "eum": "전",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "電氣",
        "read": "전기",
        "mean": "빛과 열을 내는 에너지"
      },
      {
        "word": "電話",
        "read": "전화",
        "mean": "멀리 있는 사람과 말할 수 있는 기계"
      },
      {
        "word": "電車",
        "read": "전차",
        "mean": "전기로 움직이는 차"
      },
      {
        "word": "電力",
        "read": "전력",
        "mean": "전기의 힘"
      },
      {
        "word": "發電",
        "read": "발전",
        "mean": "전기를 만듦"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "번개"
    ],
    "eumAliases": [
      "전"
    ]
  },
  {
    "h": "正",
    "hun": "바를",
    "eum": "정",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "正答",
        "read": "정답",
        "mean": "옳은 답"
      },
      {
        "word": "正直",
        "read": "정직",
        "mean": "거짓 없이 바름"
      },
      {
        "word": "正門",
        "read": "정문",
        "mean": "건물 정면에 있는 문"
      },
      {
        "word": "公正",
        "read": "공정",
        "mean": "공평하고 올바름"
      },
      {
        "word": "正月",
        "read": "정월",
        "mean": "음력으로 한 해의 첫째 달"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "바를"
    ],
    "eumAliases": [
      "정"
    ]
  },
  {
    "h": "足",
    "hun": "발",
    "eum": "족",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "手足",
        "read": "수족",
        "mean": "손과 발"
      },
      {
        "word": "不足",
        "read": "부족",
        "mean": "모자람"
      },
      {
        "word": "滿足",
        "read": "만족",
        "mean": "마음에 흡족함"
      },
      {
        "word": "足球",
        "read": "족구",
        "mean": "발로 공을 차서 넘기는 운동"
      },
      {
        "word": "足跡",
        "read": "족적",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "발"
    ],
    "eumAliases": [
      "족"
    ]
  },
  {
    "h": "左",
    "hun": "왼",
    "eum": "좌",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "左右",
        "read": "좌우",
        "mean": "왼쪽과 오른쪽"
      },
      {
        "word": "左側",
        "read": "좌측",
        "mean": "왼쪽"
      },
      {
        "word": "左回轉",
        "read": "좌회전",
        "mean": "왼쪽으로 돎"
      },
      {
        "word": "左手",
        "read": "좌수",
        "mean": ""
      },
      {
        "word": "左岸",
        "read": "좌안",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "왼"
    ],
    "eumAliases": [
      "좌"
    ]
  },
  {
    "h": "直",
    "hun": "곧을",
    "eum": "직",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "正直",
        "read": "정직",
        "mean": "거짓 없이 바름"
      },
      {
        "word": "直立",
        "read": "직립",
        "mean": "똑바로 섬"
      },
      {
        "word": "直線",
        "read": "직선",
        "mean": "곧은 선"
      },
      {
        "word": "直接",
        "read": "직접",
        "mean": "중간에 거치지 않고 바로"
      },
      {
        "word": "直前",
        "read": "직전",
        "mean": "바로 앞"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "곧을"
    ],
    "eumAliases": [
      "직"
    ]
  },
  {
    "h": "平",
    "hun": "평평할",
    "eum": "평",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "平日",
        "read": "평일",
        "mean": "휴일이 아닌 보통 날"
      },
      {
        "word": "平和",
        "read": "평화",
        "mean": "싸움 없이 평온함"
      },
      {
        "word": "公平",
        "read": "공평",
        "mean": "한쪽으로 치우치지 않음"
      },
      {
        "word": "平地",
        "read": "평지",
        "mean": "평평한 땅"
      },
      {
        "word": "平安",
        "read": "평안",
        "mean": "걱정 없이 편안함"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "평평할"
    ],
    "eumAliases": [
      "평"
    ]
  },
  {
    "h": "下",
    "hun": "아래",
    "eum": "하",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "上下",
        "read": "상하",
        "mean": "위와 아래"
      },
      {
        "word": "下校",
        "read": "하교",
        "mean": "공부를 마치고 집으로 돌아감"
      },
      {
        "word": "地下",
        "read": "지하",
        "mean": "땅속"
      },
      {
        "word": "下車",
        "read": "하차",
        "mean": "차에서 내림"
      },
      {
        "word": "天下",
        "read": "천하",
        "mean": "온 세상"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "아래"
    ],
    "eumAliases": [
      "하"
    ]
  },
  {
    "h": "漢",
    "hun": "한수",
    "eum": "한",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "漢江",
        "read": "한강",
        "mean": "서울을 흐르는 큰 강"
      },
      {
        "word": "漢字",
        "read": "한자",
        "mean": "중국에서 만들어 우리도 쓰는 글자"
      },
      {
        "word": "漢文",
        "read": "한문",
        "mean": "한자로 쓴 글"
      },
      {
        "word": "漢陽",
        "read": "한양",
        "mean": "조선 시대 서울의 이름"
      },
      {
        "word": "漢詩",
        "read": "한시",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "한수",
      "한나라"
    ],
    "eumAliases": [
      "한"
    ]
  },
  {
    "h": "海",
    "hun": "바다",
    "eum": "해",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "海軍",
        "read": "해군",
        "mean": "바다를 지키는 군대"
      },
      {
        "word": "東海",
        "read": "동해",
        "mean": "우리나라 동쪽 바다"
      },
      {
        "word": "海水",
        "read": "해수",
        "mean": "바닷물"
      },
      {
        "word": "海外",
        "read": "해외",
        "mean": "바다 건너 다른 나라"
      },
      {
        "word": "海物",
        "read": "해물",
        "mean": "바다에서 나는 먹을거리"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "바다"
    ],
    "eumAliases": [
      "해"
    ]
  },
  {
    "h": "話",
    "hun": "말씀",
    "eum": "화",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "電話",
        "read": "전화",
        "mean": "멀리 있는 사람과 말할 수 있는 기계"
      },
      {
        "word": "對話",
        "read": "대화",
        "mean": "마주 보고 이야기함"
      },
      {
        "word": "童話",
        "read": "동화",
        "mean": "어린이를 위한 이야기"
      },
      {
        "word": "手話",
        "read": "수화",
        "mean": "손짓으로 하는 말"
      },
      {
        "word": "會話",
        "read": "회화",
        "mean": "서로 말을 주고받음"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "말씀"
    ],
    "eumAliases": [
      "화"
    ]
  },
  {
    "h": "活",
    "hun": "살",
    "eum": "활",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "生活",
        "read": "생활",
        "mean": "살아가며 활동함"
      },
      {
        "word": "活動",
        "read": "활동",
        "mean": "힘차게 움직임"
      },
      {
        "word": "活力",
        "read": "활력",
        "mean": "살아 움직이는 힘"
      },
      {
        "word": "活用",
        "read": "활용",
        "mean": "잘 이용함"
      },
      {
        "word": "活性",
        "read": "활성",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "살"
    ],
    "eumAliases": [
      "활"
    ]
  },
  {
    "h": "孝",
    "hun": "효도",
    "eum": "효",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "孝道",
        "read": "효도",
        "mean": "부모를 잘 모시는 일"
      },
      {
        "word": "孝子",
        "read": "효자",
        "mean": "부모를 잘 모시는 아들"
      },
      {
        "word": "孝女",
        "read": "효녀",
        "mean": "부모를 잘 모시는 딸"
      },
      {
        "word": "不孝",
        "read": "불효",
        "mean": "효도를 하지 않음"
      },
      {
        "word": "孝心",
        "read": "효심",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "효도"
    ],
    "eumAliases": [
      "효"
    ]
  },
  {
    "h": "後",
    "hun": "뒤",
    "eum": "후",
    "level": 1,
    "levelName": "7급Ⅱ",
    "words": [
      {
        "word": "午後",
        "read": "오후",
        "mean": "낮 12시부터 밤 12시까지"
      },
      {
        "word": "前後",
        "read": "전후",
        "mean": "앞과 뒤"
      },
      {
        "word": "以後",
        "read": "이후",
        "mean": "그 뒤"
      },
      {
        "word": "最後",
        "read": "최후",
        "mean": "맨 마지막"
      },
      {
        "word": "後世",
        "read": "후세",
        "mean": "다음에 오는 세대"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "뒤"
    ],
    "eumAliases": [
      "후"
    ]
  },
  {
    "h": "歌",
    "hun": "노래",
    "eum": "가",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "國歌",
        "read": "국가",
        "mean": "나라를 대표하는 노래(애국가)"
      },
      {
        "word": "校歌",
        "read": "교가",
        "mean": "학교를 상징하는 노래"
      },
      {
        "word": "歌手",
        "read": "가수",
        "mean": "노래를 부르는 사람"
      },
      {
        "word": "歌詞",
        "read": "가사",
        "mean": "노래의 말"
      },
      {
        "word": "歌曲",
        "read": "가곡",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "노래"
    ],
    "eumAliases": [
      "가"
    ]
  },
  {
    "h": "口",
    "hun": "입",
    "eum": "구",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "食口",
        "read": "식구",
        "mean": "한집에 함께 사는 사람"
      },
      {
        "word": "入口",
        "read": "입구",
        "mean": "들어가는 곳"
      },
      {
        "word": "出口",
        "read": "출구",
        "mean": "나가는 곳"
      },
      {
        "word": "人口",
        "read": "인구",
        "mean": "한 지역에 사는 사람의 수"
      },
      {
        "word": "洞口",
        "read": "동구",
        "mean": "동네 어귀"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "입"
    ],
    "eumAliases": [
      "구"
    ]
  },
  {
    "h": "旗",
    "hun": "기",
    "eum": "기",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "國旗",
        "read": "국기",
        "mean": "나라를 나타내는 깃발"
      },
      {
        "word": "太極旗",
        "read": "태극기",
        "mean": "우리나라의 국기"
      },
      {
        "word": "校旗",
        "read": "교기",
        "mean": "학교를 나타내는 깃발"
      },
      {
        "word": "白旗",
        "read": "백기",
        "mean": "항복을 뜻하는 흰 깃발"
      },
      {
        "word": "旗手",
        "read": "기수",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "기"
    ],
    "eumAliases": [
      "기"
    ]
  },
  {
    "h": "同",
    "hun": "한가지",
    "eum": "동",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "同生",
        "read": "동생",
        "mean": "나보다 어린 형제"
      },
      {
        "word": "同時",
        "read": "동시",
        "mean": "같은 때"
      },
      {
        "word": "同一",
        "read": "동일",
        "mean": "똑같음"
      },
      {
        "word": "共同",
        "read": "공동",
        "mean": "여럿이 함께 함"
      },
      {
        "word": "同感",
        "read": "동감",
        "mean": "남과 같은 생각이나 느낌"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "한가지"
    ],
    "eumAliases": [
      "동"
    ]
  },
  {
    "h": "洞",
    "hun": "골",
    "eum": "동",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "洞口",
        "read": "동구",
        "mean": "동네 어귀"
      },
      {
        "word": "洞長",
        "read": "동장",
        "mean": "동의 일을 맡은 책임자"
      },
      {
        "word": "洞里",
        "read": "동리",
        "mean": "마을"
      },
      {
        "word": "洞窟",
        "read": "동굴",
        "mean": "땅속이나 바위에 깊숙이 뚫린 굴"
      },
      {
        "word": "洞內",
        "read": "동내",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "골"
    ],
    "eumAliases": [
      "동"
    ]
  },
  {
    "h": "冬",
    "hun": "겨울",
    "eum": "동",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "冬至",
        "read": "동지",
        "mean": "밤이 가장 긴 날"
      },
      {
        "word": "立冬",
        "read": "입동",
        "mean": "겨울이 시작되는 날"
      },
      {
        "word": "冬眠",
        "read": "동면",
        "mean": "겨울잠"
      },
      {
        "word": "春夏秋冬",
        "read": "춘하추동",
        "mean": "봄, 여름, 가을, 겨울"
      },
      {
        "word": "冬季",
        "read": "동계",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "겨울"
    ],
    "eumAliases": [
      "동"
    ]
  },
  {
    "h": "登",
    "hun": "오를",
    "eum": "등",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "登山",
        "read": "등산",
        "mean": "산에 오름"
      },
      {
        "word": "登校",
        "read": "등교",
        "mean": "학교에 감"
      },
      {
        "word": "登場",
        "read": "등장",
        "mean": "무대나 이야기에 나타남"
      },
      {
        "word": "登錄",
        "read": "등록",
        "mean": "이름을 문서에 올림"
      },
      {
        "word": "登用",
        "read": "등용",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "오를"
    ],
    "eumAliases": [
      "등"
    ]
  },
  {
    "h": "來",
    "hun": "올",
    "eum": "래",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "來日",
        "read": "내일",
        "mean": "오늘의 다음 날"
      },
      {
        "word": "來年",
        "read": "내년",
        "mean": "올해의 다음 해"
      },
      {
        "word": "未來",
        "read": "미래",
        "mean": "앞으로 올 때"
      },
      {
        "word": "外來語",
        "read": "외래어",
        "mean": "다른 나라에서 들어온 말"
      },
      {
        "word": "往來",
        "read": "왕래",
        "mean": "오고 감"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "올"
    ],
    "eumAliases": [
      "래",
      "내"
    ]
  },
  {
    "h": "老",
    "hun": "늙을",
    "eum": "로",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "老人",
        "read": "노인",
        "mean": "나이가 많은 사람"
      },
      {
        "word": "老母",
        "read": "노모",
        "mean": "늙은 어머니"
      },
      {
        "word": "老少",
        "read": "노소",
        "mean": "늙은이와 젊은이"
      },
      {
        "word": "敬老",
        "read": "경로",
        "mean": "노인을 공경함"
      },
      {
        "word": "老化",
        "read": "노화",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "늙을"
    ],
    "eumAliases": [
      "로",
      "노"
    ]
  },
  {
    "h": "里",
    "hun": "마을",
    "eum": "리",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "里長",
        "read": "이장",
        "mean": "마을의 일을 맡은 사람"
      },
      {
        "word": "洞里",
        "read": "동리",
        "mean": "마을"
      },
      {
        "word": "千里",
        "read": "천리",
        "mean": "아주 먼 거리"
      },
      {
        "word": "萬里長城",
        "read": "만리장성",
        "mean": "중국에 있는 아주 긴 성벽"
      },
      {
        "word": "里程",
        "read": "이정",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "마을"
    ],
    "eumAliases": [
      "리",
      "이"
    ]
  },
  {
    "h": "林",
    "hun": "수풀",
    "eum": "림",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "山林",
        "read": "산림",
        "mean": "산과 숲"
      },
      {
        "word": "林業",
        "read": "임업",
        "mean": "숲을 가꾸고 나무를 얻는 일"
      },
      {
        "word": "密林",
        "read": "밀림",
        "mean": "나무가 빽빽하게 들어선 숲"
      },
      {
        "word": "森林",
        "read": "삼림",
        "mean": "나무가 많이 우거진 숲"
      },
      {
        "word": "樹林",
        "read": "수림",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "수풀"
    ],
    "eumAliases": [
      "림",
      "임"
    ]
  },
  {
    "h": "面",
    "hun": "낯",
    "eum": "면",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "地面",
        "read": "지면",
        "mean": "땅의 겉"
      },
      {
        "word": "表面",
        "read": "표면",
        "mean": "겉면"
      },
      {
        "word": "面長",
        "read": "면장",
        "mean": "면의 일을 맡은 책임자"
      },
      {
        "word": "面談",
        "read": "면담",
        "mean": "서로 만나서 이야기함"
      },
      {
        "word": "前面",
        "read": "전면",
        "mean": "앞면"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "낯"
    ],
    "eumAliases": [
      "면"
    ]
  },
  {
    "h": "命",
    "hun": "목숨",
    "eum": "명",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "生命",
        "read": "생명",
        "mean": "목숨, 살아 있게 하는 힘"
      },
      {
        "word": "人命",
        "read": "인명",
        "mean": "사람의 목숨"
      },
      {
        "word": "命令",
        "read": "명령",
        "mean": "윗사람이 시키는 일"
      },
      {
        "word": "運命",
        "read": "운명",
        "mean": "정해져 있다고 여기는 삶의 흐름"
      },
      {
        "word": "使命",
        "read": "사명",
        "mean": "맡겨진 중요한 일"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "목숨"
    ],
    "eumAliases": [
      "명"
    ]
  },
  {
    "h": "文",
    "hun": "글월",
    "eum": "문",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "文字",
        "read": "문자",
        "mean": "글자"
      },
      {
        "word": "文章",
        "read": "문장",
        "mean": "생각을 글로 나타낸 한 덩어리"
      },
      {
        "word": "作文",
        "read": "작문",
        "mean": "글을 지음"
      },
      {
        "word": "國文",
        "read": "국문",
        "mean": "우리나라의 글"
      },
      {
        "word": "文化",
        "read": "문화",
        "mean": "사람들이 이루어 온 생활 방식"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "글월"
    ],
    "eumAliases": [
      "문"
    ]
  },
  {
    "h": "問",
    "hun": "물을",
    "eum": "문",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "質問",
        "read": "질문",
        "mean": "모르는 것을 물음"
      },
      {
        "word": "問題",
        "read": "문제",
        "mean": "풀어야 할 물음"
      },
      {
        "word": "問答",
        "read": "문답",
        "mean": "묻고 대답함"
      },
      {
        "word": "學問",
        "read": "학문",
        "mean": "배우고 익히는 지식"
      },
      {
        "word": "訪問",
        "read": "방문",
        "mean": "찾아가서 만남"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "물을"
    ],
    "eumAliases": [
      "문"
    ]
  },
  {
    "h": "百",
    "hun": "일백",
    "eum": "백",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "百姓",
        "read": "백성",
        "mean": "나라의 일반 사람들"
      },
      {
        "word": "百年",
        "read": "백년",
        "mean": "백 해, 아주 오랜 세월"
      },
      {
        "word": "百貨店",
        "read": "백화점",
        "mean": "여러 물건을 파는 큰 가게"
      },
      {
        "word": "百科事典",
        "read": "백과사전",
        "mean": "여러 분야의 지식을 모은 책"
      },
      {
        "word": "百科",
        "read": "백과",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "일백"
    ],
    "eumAliases": [
      "백"
    ]
  },
  {
    "h": "夫",
    "hun": "지아비",
    "eum": "부",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "夫人",
        "read": "부인",
        "mean": "남의 아내를 높여 부르는 말"
      },
      {
        "word": "農夫",
        "read": "농부",
        "mean": "농사짓는 사람"
      },
      {
        "word": "工夫",
        "read": "공부",
        "mean": "학문이나 기술을 배우고 익힘"
      },
      {
        "word": "夫婦",
        "read": "부부",
        "mean": "남편과 아내"
      },
      {
        "word": "兄夫",
        "read": "형부",
        "mean": "언니의 남편"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "지아비"
    ],
    "eumAliases": [
      "부"
    ]
  },
  {
    "h": "算",
    "hun": "셈",
    "eum": "산",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "算數",
        "read": "산수",
        "mean": "셈하는 방법"
      },
      {
        "word": "計算",
        "read": "계산",
        "mean": "수를 셈"
      },
      {
        "word": "暗算",
        "read": "암산",
        "mean": "머릿속으로 계산함"
      },
      {
        "word": "算出",
        "read": "산출",
        "mean": "계산하여 냄"
      },
      {
        "word": "豫算",
        "read": "예산",
        "mean": "미리 계산해 둔 돈"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "셈"
    ],
    "eumAliases": [
      "산"
    ]
  },
  {
    "h": "色",
    "hun": "빛",
    "eum": "색",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "色紙",
        "read": "색지",
        "mean": "색깔이 있는 종이"
      },
      {
        "word": "白色",
        "read": "백색",
        "mean": "흰색"
      },
      {
        "word": "特色",
        "read": "특색",
        "mean": "다른 것과 다른 점"
      },
      {
        "word": "色感",
        "read": "색감",
        "mean": "색깔에서 받는 느낌"
      },
      {
        "word": "顔色",
        "read": "안색",
        "mean": "얼굴빛"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "빛"
    ],
    "eumAliases": [
      "색"
    ]
  },
  {
    "h": "夕",
    "hun": "저녁",
    "eum": "석",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "秋夕",
        "read": "추석",
        "mean": "음력 8월 15일 명절"
      },
      {
        "word": "夕食",
        "read": "석식",
        "mean": "저녁밥"
      },
      {
        "word": "七夕",
        "read": "칠석",
        "mean": "음력 7월 7일, 견우와 직녀가 만나는 날"
      },
      {
        "word": "夕陽",
        "read": "석양",
        "mean": "저녁 해"
      },
      {
        "word": "夕刊",
        "read": "석간",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "저녁"
    ],
    "eumAliases": [
      "석"
    ]
  },
  {
    "h": "少",
    "hun": "적을",
    "eum": "소",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "少年",
        "read": "소년",
        "mean": "어린 남자아이"
      },
      {
        "word": "少女",
        "read": "소녀",
        "mean": "어린 여자아이"
      },
      {
        "word": "老少",
        "read": "노소",
        "mean": "늙은이와 젊은이"
      },
      {
        "word": "多少",
        "read": "다소",
        "mean": "많고 적음, 조금"
      },
      {
        "word": "減少",
        "read": "감소",
        "mean": "줄어듦"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "적을"
    ],
    "eumAliases": [
      "소"
    ]
  },
  {
    "h": "所",
    "hun": "바",
    "eum": "소",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "住所",
        "read": "주소",
        "mean": "사는 곳을 적은 것"
      },
      {
        "word": "場所",
        "read": "장소",
        "mean": "어떤 일이 일어나는 곳"
      },
      {
        "word": "所有",
        "read": "소유",
        "mean": "가지고 있음"
      },
      {
        "word": "所重",
        "read": "소중",
        "mean": "매우 귀하고 중요함"
      },
      {
        "word": "所聞",
        "read": "소문",
        "mean": "사람들 사이에 퍼진 말"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "바"
    ],
    "eumAliases": [
      "소"
    ]
  },
  {
    "h": "數",
    "hun": "셈",
    "eum": "수",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "數學",
        "read": "수학",
        "mean": "수와 양을 다루는 과목"
      },
      {
        "word": "算數",
        "read": "산수",
        "mean": "셈하는 방법"
      },
      {
        "word": "數字",
        "read": "숫자",
        "mean": "수를 나타내는 글자"
      },
      {
        "word": "點數",
        "read": "점수",
        "mean": "성적을 나타내는 수"
      },
      {
        "word": "多數",
        "read": "다수",
        "mean": "수가 많음"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "셈"
    ],
    "eumAliases": [
      "수"
    ]
  },
  {
    "h": "植",
    "hun": "심을",
    "eum": "식",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "植物",
        "read": "식물",
        "mean": "뿌리를 내리고 자라는 생물"
      },
      {
        "word": "植木日",
        "read": "식목일",
        "mean": "나무를 심는 날(4월 5일)"
      },
      {
        "word": "移植",
        "read": "이식",
        "mean": "옮겨 심음"
      },
      {
        "word": "植民地",
        "read": "식민지",
        "mean": "다른 나라에 빼앗겨 지배를 받는 땅"
      },
      {
        "word": "植物園",
        "read": "식물원",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "심을"
    ],
    "eumAliases": [
      "식"
    ]
  },
  {
    "h": "心",
    "hun": "마음",
    "eum": "심",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "中心",
        "read": "중심",
        "mean": "한가운데"
      },
      {
        "word": "安心",
        "read": "안심",
        "mean": "걱정 없이 마음을 놓음"
      },
      {
        "word": "關心",
        "read": "관심",
        "mean": "마음이 끌려 주의를 기울임"
      },
      {
        "word": "決心",
        "read": "결심",
        "mean": "마음을 굳게 정함"
      },
      {
        "word": "心臟",
        "read": "심장",
        "mean": "피를 온몸에 보내는 기관"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "마음"
    ],
    "eumAliases": [
      "심"
    ]
  },
  {
    "h": "語",
    "hun": "말씀",
    "eum": "어",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "國語",
        "read": "국어",
        "mean": "우리말, 또는 우리말을 배우는 과목"
      },
      {
        "word": "英語",
        "read": "영어",
        "mean": "영국과 미국 등에서 쓰는 말"
      },
      {
        "word": "單語",
        "read": "단어",
        "mean": "뜻을 가진 가장 작은 말"
      },
      {
        "word": "外來語",
        "read": "외래어",
        "mean": "다른 나라에서 들어온 말"
      },
      {
        "word": "語學",
        "read": "어학",
        "mean": "말을 배우는 공부"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "말씀"
    ],
    "eumAliases": [
      "어"
    ]
  },
  {
    "h": "然",
    "hun": "그럴",
    "eum": "연",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "自然",
        "read": "자연",
        "mean": "사람이 만들지 않은 산, 강, 바다 같은 세상"
      },
      {
        "word": "天然",
        "read": "천연",
        "mean": "사람이 손대지 않은 그대로"
      },
      {
        "word": "當然",
        "read": "당연",
        "mean": "마땅히 그러함"
      },
      {
        "word": "突然",
        "read": "돌연",
        "mean": "갑자기"
      },
      {
        "word": "偶然",
        "read": "우연",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "그럴"
    ],
    "eumAliases": [
      "연"
    ]
  },
  {
    "h": "有",
    "hun": "있을",
    "eum": "유",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "有名",
        "read": "유명",
        "mean": "이름이 널리 알려짐"
      },
      {
        "word": "所有",
        "read": "소유",
        "mean": "가지고 있음"
      },
      {
        "word": "有利",
        "read": "유리",
        "mean": "이익이 있음"
      },
      {
        "word": "共有",
        "read": "공유",
        "mean": "여럿이 함께 가짐"
      },
      {
        "word": "有能",
        "read": "유능",
        "mean": "능력이 있음"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "있을"
    ],
    "eumAliases": [
      "유"
    ]
  },
  {
    "h": "育",
    "hun": "기를",
    "eum": "육",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "敎育",
        "read": "교육",
        "mean": "지식과 바른 태도를 가르치고 기름"
      },
      {
        "word": "體育",
        "read": "체육",
        "mean": "몸을 튼튼하게 하는 활동이나 과목"
      },
      {
        "word": "育兒",
        "read": "육아",
        "mean": "아이를 기름"
      },
      {
        "word": "飼育",
        "read": "사육",
        "mean": "동물을 먹여 기름"
      },
      {
        "word": "育成",
        "read": "육성",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "기를"
    ],
    "eumAliases": [
      "육"
    ]
  },
  {
    "h": "邑",
    "hun": "고을",
    "eum": "읍",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "邑內",
        "read": "읍내",
        "mean": "읍의 안"
      },
      {
        "word": "邑長",
        "read": "읍장",
        "mean": "읍의 일을 맡은 책임자"
      },
      {
        "word": "邑民",
        "read": "읍민",
        "mean": "읍에 사는 사람"
      },
      {
        "word": "都邑",
        "read": "도읍",
        "mean": "한 나라의 서울"
      },
      {
        "word": "邑城",
        "read": "읍성",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "고을"
    ],
    "eumAliases": [
      "읍"
    ]
  },
  {
    "h": "入",
    "hun": "들",
    "eum": "입",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "入口",
        "read": "입구",
        "mean": "들어가는 곳"
      },
      {
        "word": "入學",
        "read": "입학",
        "mean": "학교에 들어감"
      },
      {
        "word": "出入",
        "read": "출입",
        "mean": "나가고 들어옴"
      },
      {
        "word": "入場",
        "read": "입장",
        "mean": "안으로 들어감"
      },
      {
        "word": "收入",
        "read": "수입",
        "mean": "들어오는 돈"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "들"
    ],
    "eumAliases": [
      "입"
    ]
  },
  {
    "h": "字",
    "hun": "글자",
    "eum": "자",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "漢字",
        "read": "한자",
        "mean": "중국에서 만들어 우리도 쓰는 글자"
      },
      {
        "word": "文字",
        "read": "문자",
        "mean": "글자"
      },
      {
        "word": "數字",
        "read": "숫자",
        "mean": "수를 나타내는 글자"
      },
      {
        "word": "十字",
        "read": "십자",
        "mean": "十 모양"
      },
      {
        "word": "誤字",
        "read": "오자",
        "mean": "잘못 쓴 글자"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "글자"
    ],
    "eumAliases": [
      "자"
    ]
  },
  {
    "h": "祖",
    "hun": "할아비",
    "eum": "조",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "祖上",
        "read": "조상",
        "mean": "먼 윗대의 어른들"
      },
      {
        "word": "祖國",
        "read": "조국",
        "mean": "조상 때부터 살아온 나라"
      },
      {
        "word": "祖父母",
        "read": "조부모",
        "mean": "할아버지와 할머니"
      },
      {
        "word": "先祖",
        "read": "선조",
        "mean": "먼 윗대의 조상"
      },
      {
        "word": "始祖",
        "read": "시조",
        "mean": "한 집안의 맨 처음 조상"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "할아비"
    ],
    "eumAliases": [
      "조"
    ]
  },
  {
    "h": "住",
    "hun": "살",
    "eum": "주",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "住民",
        "read": "주민",
        "mean": "그 지역에 사는 사람"
      },
      {
        "word": "住所",
        "read": "주소",
        "mean": "사는 곳을 적은 것"
      },
      {
        "word": "住宅",
        "read": "주택",
        "mean": "사람이 사는 집"
      },
      {
        "word": "居住",
        "read": "거주",
        "mean": "일정한 곳에 머물러 삶"
      },
      {
        "word": "移住",
        "read": "이주",
        "mean": "다른 곳으로 옮겨 가서 삶"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "살"
    ],
    "eumAliases": [
      "주"
    ]
  },
  {
    "h": "主",
    "hun": "주인",
    "eum": "주",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "主人",
        "read": "주인",
        "mean": "물건이나 집을 가진 사람"
      },
      {
        "word": "主人公",
        "read": "주인공",
        "mean": "이야기의 중심이 되는 인물"
      },
      {
        "word": "主題",
        "read": "주제",
        "mean": "중심이 되는 생각"
      },
      {
        "word": "主食",
        "read": "주식",
        "mean": "밥처럼 끼니에 주로 먹는 음식"
      },
      {
        "word": "民主",
        "read": "민주",
        "mean": "국민이 나라의 주인임"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "임금",
      "주인"
    ],
    "eumAliases": [
      "주"
    ]
  },
  {
    "h": "重",
    "hun": "무거울",
    "eum": "중",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "重要",
        "read": "중요",
        "mean": "귀하고 꼭 필요함"
      },
      {
        "word": "所重",
        "read": "소중",
        "mean": "매우 귀하고 중요함"
      },
      {
        "word": "體重",
        "read": "체중",
        "mean": "몸무게"
      },
      {
        "word": "重大",
        "read": "중대",
        "mean": "매우 중요하고 큼"
      },
      {
        "word": "尊重",
        "read": "존중",
        "mean": "높이어 귀하게 여김"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "무거울"
    ],
    "eumAliases": [
      "중"
    ]
  },
  {
    "h": "地",
    "hun": "따",
    "eum": "지",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "地球",
        "read": "지구",
        "mean": "우리가 사는 별"
      },
      {
        "word": "地圖",
        "read": "지도",
        "mean": "땅의 모양을 줄여 그린 그림"
      },
      {
        "word": "地下",
        "read": "지하",
        "mean": "땅속"
      },
      {
        "word": "土地",
        "read": "토지",
        "mean": "땅"
      },
      {
        "word": "天地",
        "read": "천지",
        "mean": "하늘과 땅"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "따",
      "땅"
    ],
    "eumAliases": [
      "지"
    ]
  },
  {
    "h": "紙",
    "hun": "종이",
    "eum": "지",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "便紙",
        "read": "편지",
        "mean": "안부나 소식을 적어 보내는 글"
      },
      {
        "word": "休紙",
        "read": "휴지",
        "mean": "닦는 데 쓰는 얇은 종이"
      },
      {
        "word": "色紙",
        "read": "색지",
        "mean": "색깔이 있는 종이"
      },
      {
        "word": "白紙",
        "read": "백지",
        "mean": "아무것도 쓰지 않은 흰 종이"
      },
      {
        "word": "韓紙",
        "read": "한지",
        "mean": "우리나라 전통 종이"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "종이"
    ],
    "eumAliases": [
      "지"
    ]
  },
  {
    "h": "千",
    "hun": "일천",
    "eum": "천",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "千年",
        "read": "천년",
        "mean": "천 해, 아주 오랜 세월"
      },
      {
        "word": "千萬",
        "read": "천만",
        "mean": "만의 천 배, 아주 많음"
      },
      {
        "word": "千里",
        "read": "천리",
        "mean": "아주 먼 거리"
      },
      {
        "word": "千字文",
        "read": "천자문",
        "mean": "한자 천 글자를 모은 책"
      },
      {
        "word": "千金",
        "read": "천금",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "일천"
    ],
    "eumAliases": [
      "천"
    ]
  },
  {
    "h": "天",
    "hun": "하늘",
    "eum": "천",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "天地",
        "read": "천지",
        "mean": "하늘과 땅"
      },
      {
        "word": "天國",
        "read": "천국",
        "mean": "하늘나라"
      },
      {
        "word": "天才",
        "read": "천재",
        "mean": "타고난 뛰어난 재주를 가진 사람"
      },
      {
        "word": "天使",
        "read": "천사",
        "mean": "하늘의 심부름꾼"
      },
      {
        "word": "天然",
        "read": "천연",
        "mean": "사람이 손대지 않은 그대로"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "하늘"
    ],
    "eumAliases": [
      "천"
    ]
  },
  {
    "h": "川",
    "hun": "내",
    "eum": "천",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "山川",
        "read": "산천",
        "mean": "산과 내, 자연"
      },
      {
        "word": "河川",
        "read": "하천",
        "mean": "시내와 강"
      },
      {
        "word": "春川",
        "read": "춘천",
        "mean": "강원도에 있는 도시"
      },
      {
        "word": "仁川",
        "read": "인천",
        "mean": "서해안의 큰 항구 도시"
      },
      {
        "word": "川邊",
        "read": "천변",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "내"
    ],
    "eumAliases": [
      "천"
    ]
  },
  {
    "h": "草",
    "hun": "풀",
    "eum": "초",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "草木",
        "read": "초목",
        "mean": "풀과 나무"
      },
      {
        "word": "花草",
        "read": "화초",
        "mean": "꽃과 풀"
      },
      {
        "word": "草原",
        "read": "초원",
        "mean": "풀이 자란 넓은 들"
      },
      {
        "word": "藥草",
        "read": "약초",
        "mean": "약으로 쓰는 풀"
      },
      {
        "word": "雜草",
        "read": "잡초",
        "mean": "저절로 자라는 여러 풀"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "풀"
    ],
    "eumAliases": [
      "초"
    ]
  },
  {
    "h": "村",
    "hun": "마을",
    "eum": "촌",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "農村",
        "read": "농촌",
        "mean": "농사짓는 사람들이 사는 마을"
      },
      {
        "word": "山村",
        "read": "산촌",
        "mean": "산속에 있는 마을"
      },
      {
        "word": "漁村",
        "read": "어촌",
        "mean": "고기잡이를 하는 바닷가 마을"
      },
      {
        "word": "地球村",
        "read": "지구촌",
        "mean": "온 세계를 한 마을처럼 이르는 말"
      },
      {
        "word": "江村",
        "read": "강촌",
        "mean": "강가에 있는 마을"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "마을"
    ],
    "eumAliases": [
      "촌"
    ]
  },
  {
    "h": "秋",
    "hun": "가을",
    "eum": "추",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "秋夕",
        "read": "추석",
        "mean": "음력 8월 15일 명절"
      },
      {
        "word": "春秋",
        "read": "춘추",
        "mean": "봄과 가을, 어른의 나이"
      },
      {
        "word": "秋收",
        "read": "추수",
        "mean": "가을에 곡식을 거두어들임"
      },
      {
        "word": "立秋",
        "read": "입추",
        "mean": "가을이 시작되는 날"
      },
      {
        "word": "春夏秋冬",
        "read": "춘하추동",
        "mean": "봄, 여름, 가을, 겨울"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "가을"
    ],
    "eumAliases": [
      "추"
    ]
  },
  {
    "h": "春",
    "hun": "봄",
    "eum": "춘",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "靑春",
        "read": "청춘",
        "mean": "젊은 시절"
      },
      {
        "word": "立春",
        "read": "입춘",
        "mean": "봄이 시작되는 날"
      },
      {
        "word": "春秋",
        "read": "춘추",
        "mean": "봄과 가을, 어른의 나이"
      },
      {
        "word": "春風",
        "read": "춘풍",
        "mean": "봄바람"
      },
      {
        "word": "思春期",
        "read": "사춘기",
        "mean": "몸과 마음이 어른으로 자라는 시기"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "봄"
    ],
    "eumAliases": [
      "춘"
    ]
  },
  {
    "h": "出",
    "hun": "날",
    "eum": "출",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "出口",
        "read": "출구",
        "mean": "나가는 곳"
      },
      {
        "word": "出發",
        "read": "출발",
        "mean": "길을 떠남"
      },
      {
        "word": "外出",
        "read": "외출",
        "mean": "집 밖에 나감"
      },
      {
        "word": "出入",
        "read": "출입",
        "mean": "나가고 들어옴"
      },
      {
        "word": "日出",
        "read": "일출",
        "mean": "해가 뜸"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "날"
    ],
    "eumAliases": [
      "출"
    ]
  },
  {
    "h": "便",
    "hun": "편할",
    "eum": "편",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "便安",
        "read": "편안",
        "mean": "편하고 걱정이 없음"
      },
      {
        "word": "不便",
        "read": "불편",
        "mean": "편하지 않음"
      },
      {
        "word": "便利",
        "read": "편리",
        "mean": "편하고 쉬움"
      },
      {
        "word": "便紙",
        "read": "편지",
        "mean": "안부나 소식을 적어 보내는 글"
      },
      {
        "word": "小便",
        "read": "소변",
        "mean": "오줌(변으로 읽어요)"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "편할"
    ],
    "eumAliases": [
      "편"
    ]
  },
  {
    "h": "夏",
    "hun": "여름",
    "eum": "하",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "夏至",
        "read": "하지",
        "mean": "낮이 가장 긴 날"
      },
      {
        "word": "立夏",
        "read": "입하",
        "mean": "여름이 시작되는 날"
      },
      {
        "word": "夏服",
        "read": "하복",
        "mean": "여름옷"
      },
      {
        "word": "春夏秋冬",
        "read": "춘하추동",
        "mean": "봄, 여름, 가을, 겨울"
      },
      {
        "word": "夏季",
        "read": "하계",
        "mean": ""
      }
    ],
    "grade": 7,
    "hunAliases": [
      "여름"
    ],
    "eumAliases": [
      "하"
    ]
  },
  {
    "h": "花",
    "hun": "꽃",
    "eum": "화",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "花草",
        "read": "화초",
        "mean": "꽃과 풀"
      },
      {
        "word": "國花",
        "read": "국화",
        "mean": "나라를 상징하는 꽃(무궁화)"
      },
      {
        "word": "花園",
        "read": "화원",
        "mean": "꽃을 가꾸는 동산"
      },
      {
        "word": "生花",
        "read": "생화",
        "mean": "살아 있는 꽃"
      },
      {
        "word": "花盆",
        "read": "화분",
        "mean": "꽃을 심어 기르는 그릇"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "꽃"
    ],
    "eumAliases": [
      "화"
    ]
  },
  {
    "h": "休",
    "hun": "쉴",
    "eum": "휴",
    "level": 2,
    "levelName": "7급",
    "words": [
      {
        "word": "休日",
        "read": "휴일",
        "mean": "쉬는 날"
      },
      {
        "word": "休息",
        "read": "휴식",
        "mean": "잠시 쉼"
      },
      {
        "word": "休紙",
        "read": "휴지",
        "mean": "닦는 데 쓰는 얇은 종이"
      },
      {
        "word": "休學",
        "read": "휴학",
        "mean": "학교를 한동안 쉼"
      },
      {
        "word": "連休",
        "read": "연휴",
        "mean": "휴일이 이어짐"
      }
    ],
    "grade": 7,
    "hunAliases": [
      "쉴"
    ],
    "eumAliases": [
      "휴"
    ]
  },
  {
    "h": "各",
    "hun": "각각",
    "eum": "각",
    "words": [
      {
        "word": "各自",
        "read": "각자",
        "mean": ""
      },
      {
        "word": "各國",
        "read": "각국",
        "mean": ""
      },
      {
        "word": "各地",
        "read": "각지",
        "mean": ""
      },
      {
        "word": "各種",
        "read": "각종",
        "mean": ""
      },
      {
        "word": "各別",
        "read": "각별",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "각각"
    ],
    "eumAliases": [
      "각"
    ]
  },
  {
    "h": "角",
    "hun": "뿔",
    "eum": "각",
    "words": [
      {
        "word": "三角",
        "read": "삼각",
        "mean": ""
      },
      {
        "word": "四角",
        "read": "사각",
        "mean": ""
      },
      {
        "word": "角度",
        "read": "각도",
        "mean": ""
      },
      {
        "word": "直角",
        "read": "직각",
        "mean": ""
      },
      {
        "word": "角形",
        "read": "각형",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "뿔"
    ],
    "eumAliases": [
      "각"
    ]
  },
  {
    "h": "界",
    "hun": "지경",
    "eum": "계",
    "words": [
      {
        "word": "世界",
        "read": "세계",
        "mean": ""
      },
      {
        "word": "境界",
        "read": "경계",
        "mean": ""
      },
      {
        "word": "限界",
        "read": "한계",
        "mean": ""
      },
      {
        "word": "學界",
        "read": "학계",
        "mean": ""
      },
      {
        "word": "自然界",
        "read": "자연계",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "지경"
    ],
    "eumAliases": [
      "계"
    ]
  },
  {
    "h": "計",
    "hun": "셀",
    "eum": "계",
    "words": [
      {
        "word": "時計",
        "read": "시계",
        "mean": ""
      },
      {
        "word": "計算",
        "read": "계산",
        "mean": ""
      },
      {
        "word": "合計",
        "read": "합계",
        "mean": ""
      },
      {
        "word": "計劃",
        "read": "계획",
        "mean": ""
      },
      {
        "word": "統計",
        "read": "통계",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "셀"
    ],
    "eumAliases": [
      "계"
    ]
  },
  {
    "h": "高",
    "hun": "높을",
    "eum": "고",
    "words": [
      {
        "word": "高低",
        "read": "고저",
        "mean": ""
      },
      {
        "word": "高山",
        "read": "고산",
        "mean": ""
      },
      {
        "word": "高速",
        "read": "고속",
        "mean": ""
      },
      {
        "word": "最高",
        "read": "최고",
        "mean": ""
      },
      {
        "word": "高級",
        "read": "고급",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "높을"
    ],
    "eumAliases": [
      "고"
    ]
  },
  {
    "h": "公",
    "hun": "공평할",
    "eum": "공",
    "words": [
      {
        "word": "公園",
        "read": "공원",
        "mean": ""
      },
      {
        "word": "公平",
        "read": "공평",
        "mean": ""
      },
      {
        "word": "公共",
        "read": "공공",
        "mean": ""
      },
      {
        "word": "公立",
        "read": "공립",
        "mean": ""
      },
      {
        "word": "公開",
        "read": "공개",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "공평할"
    ],
    "eumAliases": [
      "공"
    ]
  },
  {
    "h": "共",
    "hun": "한가지",
    "eum": "공",
    "words": [
      {
        "word": "共同",
        "read": "공동",
        "mean": ""
      },
      {
        "word": "共通",
        "read": "공통",
        "mean": ""
      },
      {
        "word": "公共",
        "read": "공공",
        "mean": ""
      },
      {
        "word": "共感",
        "read": "공감",
        "mean": ""
      },
      {
        "word": "共存",
        "read": "공존",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "한가지"
    ],
    "eumAliases": [
      "공"
    ]
  },
  {
    "h": "功",
    "hun": "공",
    "eum": "공",
    "words": [
      {
        "word": "成功",
        "read": "성공",
        "mean": ""
      },
      {
        "word": "功勞",
        "read": "공로",
        "mean": ""
      },
      {
        "word": "功績",
        "read": "공적",
        "mean": ""
      },
      {
        "word": "功臣",
        "read": "공신",
        "mean": ""
      },
      {
        "word": "功德",
        "read": "공덕",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "공"
    ],
    "eumAliases": [
      "공"
    ]
  },
  {
    "h": "果",
    "hun": "실과",
    "eum": "과",
    "words": [
      {
        "word": "結果",
        "read": "결과",
        "mean": ""
      },
      {
        "word": "果實",
        "read": "과실",
        "mean": ""
      },
      {
        "word": "果樹",
        "read": "과수",
        "mean": ""
      },
      {
        "word": "效果",
        "read": "효과",
        "mean": ""
      },
      {
        "word": "成果",
        "read": "성과",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "실과"
    ],
    "eumAliases": [
      "과"
    ]
  },
  {
    "h": "科",
    "hun": "과목",
    "eum": "과",
    "words": [
      {
        "word": "科學",
        "read": "과학",
        "mean": ""
      },
      {
        "word": "科目",
        "read": "과목",
        "mean": ""
      },
      {
        "word": "敎科書",
        "read": "교과서",
        "mean": ""
      },
      {
        "word": "學科",
        "read": "학과",
        "mean": ""
      },
      {
        "word": "百科",
        "read": "백과",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "과목"
    ],
    "eumAliases": [
      "과"
    ]
  },
  {
    "h": "光",
    "hun": "빛",
    "eum": "광",
    "words": [
      {
        "word": "光線",
        "read": "광선",
        "mean": ""
      },
      {
        "word": "日光",
        "read": "일광",
        "mean": ""
      },
      {
        "word": "月光",
        "read": "월광",
        "mean": ""
      },
      {
        "word": "觀光",
        "read": "관광",
        "mean": ""
      },
      {
        "word": "光景",
        "read": "광경",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "빛"
    ],
    "eumAliases": [
      "광"
    ]
  },
  {
    "h": "球",
    "hun": "공",
    "eum": "구",
    "words": [
      {
        "word": "地球",
        "read": "지구",
        "mean": ""
      },
      {
        "word": "野球",
        "read": "야구",
        "mean": ""
      },
      {
        "word": "球技",
        "read": "구기",
        "mean": ""
      },
      {
        "word": "球場",
        "read": "구장",
        "mean": ""
      },
      {
        "word": "卓球",
        "read": "탁구",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "공"
    ],
    "eumAliases": [
      "구"
    ]
  },
  {
    "h": "今",
    "hun": "이제",
    "eum": "금",
    "words": [
      {
        "word": "今日",
        "read": "금일",
        "mean": ""
      },
      {
        "word": "今年",
        "read": "금년",
        "mean": ""
      },
      {
        "word": "今後",
        "read": "금후",
        "mean": ""
      },
      {
        "word": "只今",
        "read": "지금",
        "mean": ""
      },
      {
        "word": "古今",
        "read": "고금",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "이제"
    ],
    "eumAliases": [
      "금"
    ]
  },
  {
    "h": "急",
    "hun": "급할",
    "eum": "급",
    "words": [
      {
        "word": "急行",
        "read": "급행",
        "mean": ""
      },
      {
        "word": "急速",
        "read": "급속",
        "mean": ""
      },
      {
        "word": "救急",
        "read": "구급",
        "mean": ""
      },
      {
        "word": "緊急",
        "read": "긴급",
        "mean": ""
      },
      {
        "word": "急病",
        "read": "급병",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "급할"
    ],
    "eumAliases": [
      "급"
    ]
  },
  {
    "h": "短",
    "hun": "짧을",
    "eum": "단",
    "words": [
      {
        "word": "短期",
        "read": "단기",
        "mean": ""
      },
      {
        "word": "短點",
        "read": "단점",
        "mean": ""
      },
      {
        "word": "短文",
        "read": "단문",
        "mean": ""
      },
      {
        "word": "長短",
        "read": "장단",
        "mean": ""
      },
      {
        "word": "短縮",
        "read": "단축",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "짧을"
    ],
    "eumAliases": [
      "단"
    ]
  },
  {
    "h": "堂",
    "hun": "집",
    "eum": "당",
    "words": [
      {
        "word": "食堂",
        "read": "식당",
        "mean": ""
      },
      {
        "word": "講堂",
        "read": "강당",
        "mean": ""
      },
      {
        "word": "堂堂",
        "read": "당당",
        "mean": ""
      },
      {
        "word": "殿堂",
        "read": "전당",
        "mean": ""
      },
      {
        "word": "書堂",
        "read": "서당",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "집"
    ],
    "eumAliases": [
      "당"
    ]
  },
  {
    "h": "代",
    "hun": "대신할",
    "eum": "대",
    "words": [
      {
        "word": "時代",
        "read": "시대",
        "mean": ""
      },
      {
        "word": "代表",
        "read": "대표",
        "mean": ""
      },
      {
        "word": "代身",
        "read": "대신",
        "mean": ""
      },
      {
        "word": "世代",
        "read": "세대",
        "mean": ""
      },
      {
        "word": "交代",
        "read": "교대",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "대신할"
    ],
    "eumAliases": [
      "대"
    ]
  },
  {
    "h": "對",
    "hun": "대할",
    "eum": "대",
    "words": [
      {
        "word": "對話",
        "read": "대화",
        "mean": ""
      },
      {
        "word": "對答",
        "read": "대답",
        "mean": ""
      },
      {
        "word": "對象",
        "read": "대상",
        "mean": ""
      },
      {
        "word": "反對",
        "read": "반대",
        "mean": ""
      },
      {
        "word": "絶對",
        "read": "절대",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "대할"
    ],
    "eumAliases": [
      "대"
    ]
  },
  {
    "h": "圖",
    "hun": "그림",
    "eum": "도",
    "words": [
      {
        "word": "地圖",
        "read": "지도",
        "mean": ""
      },
      {
        "word": "圖書",
        "read": "도서",
        "mean": ""
      },
      {
        "word": "圖形",
        "read": "도형",
        "mean": ""
      },
      {
        "word": "圖表",
        "read": "도표",
        "mean": ""
      },
      {
        "word": "意圖",
        "read": "의도",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "그림"
    ],
    "eumAliases": [
      "도"
    ]
  },
  {
    "h": "讀",
    "hun": "읽을",
    "eum": "독",
    "words": [
      {
        "word": "讀書",
        "read": "독서",
        "mean": ""
      },
      {
        "word": "朗讀",
        "read": "낭독",
        "mean": ""
      },
      {
        "word": "音讀",
        "read": "음독",
        "mean": ""
      },
      {
        "word": "讀者",
        "read": "독자",
        "mean": ""
      },
      {
        "word": "精讀",
        "read": "정독",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "읽을"
    ],
    "eumAliases": [
      "독"
    ]
  },
  {
    "h": "童",
    "hun": "아이",
    "eum": "동",
    "words": [
      {
        "word": "兒童",
        "read": "아동",
        "mean": ""
      },
      {
        "word": "童話",
        "read": "동화",
        "mean": ""
      },
      {
        "word": "童謠",
        "read": "동요",
        "mean": ""
      },
      {
        "word": "童心",
        "read": "동심",
        "mean": ""
      },
      {
        "word": "神童",
        "read": "신동",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "아이"
    ],
    "eumAliases": [
      "동"
    ]
  },
  {
    "h": "等",
    "hun": "무리",
    "eum": "등",
    "words": [
      {
        "word": "等級",
        "read": "등급",
        "mean": ""
      },
      {
        "word": "平等",
        "read": "평등",
        "mean": ""
      },
      {
        "word": "同等",
        "read": "동등",
        "mean": ""
      },
      {
        "word": "一等",
        "read": "일등",
        "mean": ""
      },
      {
        "word": "高等",
        "read": "고등",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "무리"
    ],
    "eumAliases": [
      "등"
    ]
  },
  {
    "h": "樂",
    "hun": "즐길",
    "eum": "락",
    "words": [
      {
        "word": "音樂",
        "read": "음악",
        "mean": ""
      },
      {
        "word": "樂器",
        "read": "악기",
        "mean": ""
      },
      {
        "word": "樂園",
        "read": "낙원",
        "mean": ""
      },
      {
        "word": "娛樂",
        "read": "오락",
        "mean": ""
      },
      {
        "word": "安樂",
        "read": "안락",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "즐길"
    ],
    "eumAliases": [
      "락",
      "낙"
    ]
  },
  {
    "h": "利",
    "hun": "이할",
    "eum": "리",
    "words": [
      {
        "word": "利用",
        "read": "이용",
        "mean": ""
      },
      {
        "word": "利益",
        "read": "이익",
        "mean": ""
      },
      {
        "word": "便利",
        "read": "편리",
        "mean": ""
      },
      {
        "word": "有利",
        "read": "유리",
        "mean": ""
      },
      {
        "word": "勝利",
        "read": "승리",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "이할"
    ],
    "eumAliases": [
      "리",
      "이"
    ]
  },
  {
    "h": "理",
    "hun": "다스릴",
    "eum": "리",
    "words": [
      {
        "word": "理由",
        "read": "이유",
        "mean": ""
      },
      {
        "word": "理解",
        "read": "이해",
        "mean": ""
      },
      {
        "word": "整理",
        "read": "정리",
        "mean": ""
      },
      {
        "word": "料理",
        "read": "요리",
        "mean": ""
      },
      {
        "word": "原理",
        "read": "원리",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "다스릴"
    ],
    "eumAliases": [
      "리",
      "이"
    ]
  },
  {
    "h": "明",
    "hun": "밝을",
    "eum": "명",
    "words": [
      {
        "word": "明日",
        "read": "명일",
        "mean": ""
      },
      {
        "word": "明確",
        "read": "명확",
        "mean": ""
      },
      {
        "word": "說明",
        "read": "설명",
        "mean": ""
      },
      {
        "word": "發明",
        "read": "발명",
        "mean": ""
      },
      {
        "word": "透明",
        "read": "투명",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "밝을"
    ],
    "eumAliases": [
      "명"
    ]
  },
  {
    "h": "聞",
    "hun": "들을",
    "eum": "문",
    "words": [
      {
        "word": "新聞",
        "read": "신문",
        "mean": ""
      },
      {
        "word": "見聞",
        "read": "견문",
        "mean": ""
      },
      {
        "word": "所聞",
        "read": "소문",
        "mean": ""
      },
      {
        "word": "傳聞",
        "read": "전문",
        "mean": ""
      },
      {
        "word": "聽聞",
        "read": "청문",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "들을"
    ],
    "eumAliases": [
      "문"
    ]
  },
  {
    "h": "半",
    "hun": "반",
    "eum": "반",
    "words": [
      {
        "word": "半月",
        "read": "반월",
        "mean": ""
      },
      {
        "word": "半分",
        "read": "반분",
        "mean": ""
      },
      {
        "word": "半島",
        "read": "반도",
        "mean": ""
      },
      {
        "word": "大半",
        "read": "대반",
        "mean": ""
      },
      {
        "word": "前半",
        "read": "전반",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "반"
    ],
    "eumAliases": [
      "반"
    ]
  },
  {
    "h": "反",
    "hun": "돌이킬",
    "eum": "반",
    "words": [
      {
        "word": "反對",
        "read": "반대",
        "mean": ""
      },
      {
        "word": "反省",
        "read": "반성",
        "mean": ""
      },
      {
        "word": "反復",
        "read": "반복",
        "mean": ""
      },
      {
        "word": "反應",
        "read": "반응",
        "mean": ""
      },
      {
        "word": "反射",
        "read": "반사",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "돌이킬",
      "돌아올"
    ],
    "eumAliases": [
      "반"
    ]
  },
  {
    "h": "班",
    "hun": "나눌",
    "eum": "반",
    "words": [
      {
        "word": "學班",
        "read": "학반",
        "mean": ""
      },
      {
        "word": "班長",
        "read": "반장",
        "mean": ""
      },
      {
        "word": "分班",
        "read": "분반",
        "mean": ""
      },
      {
        "word": "班員",
        "read": "반원",
        "mean": ""
      },
      {
        "word": "同班",
        "read": "동반",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "나눌"
    ],
    "eumAliases": [
      "반"
    ]
  },
  {
    "h": "發",
    "hun": "필",
    "eum": "발",
    "words": [
      {
        "word": "出發",
        "read": "출발",
        "mean": ""
      },
      {
        "word": "發見",
        "read": "발견",
        "mean": ""
      },
      {
        "word": "發明",
        "read": "발명",
        "mean": ""
      },
      {
        "word": "發表",
        "read": "발표",
        "mean": ""
      },
      {
        "word": "發展",
        "read": "발전",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "필"
    ],
    "eumAliases": [
      "발"
    ]
  },
  {
    "h": "放",
    "hun": "놓을",
    "eum": "방",
    "words": [
      {
        "word": "放學",
        "read": "방학",
        "mean": ""
      },
      {
        "word": "放送",
        "read": "방송",
        "mean": ""
      },
      {
        "word": "開放",
        "read": "개방",
        "mean": ""
      },
      {
        "word": "放出",
        "read": "방출",
        "mean": ""
      },
      {
        "word": "放置",
        "read": "방치",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "놓을"
    ],
    "eumAliases": [
      "방"
    ]
  },
  {
    "h": "部",
    "hun": "떼",
    "eum": "부",
    "words": [
      {
        "word": "部分",
        "read": "부분",
        "mean": ""
      },
      {
        "word": "部署",
        "read": "부서",
        "mean": ""
      },
      {
        "word": "部長",
        "read": "부장",
        "mean": ""
      },
      {
        "word": "全部",
        "read": "전부",
        "mean": ""
      },
      {
        "word": "部門",
        "read": "부문",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "떼"
    ],
    "eumAliases": [
      "부"
    ]
  },
  {
    "h": "分",
    "hun": "나눌",
    "eum": "분",
    "words": [
      {
        "word": "分數",
        "read": "분수",
        "mean": ""
      },
      {
        "word": "區分",
        "read": "구분",
        "mean": ""
      },
      {
        "word": "分別",
        "read": "분별",
        "mean": ""
      },
      {
        "word": "部分",
        "read": "부분",
        "mean": ""
      },
      {
        "word": "分量",
        "read": "분량",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "나눌"
    ],
    "eumAliases": [
      "분"
    ]
  },
  {
    "h": "社",
    "hun": "모일",
    "eum": "사",
    "words": [
      {
        "word": "社會",
        "read": "사회",
        "mean": ""
      },
      {
        "word": "會社",
        "read": "회사",
        "mean": ""
      },
      {
        "word": "社長",
        "read": "사장",
        "mean": ""
      },
      {
        "word": "入社",
        "read": "입사",
        "mean": ""
      },
      {
        "word": "神社",
        "read": "신사",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "모일"
    ],
    "eumAliases": [
      "사"
    ]
  },
  {
    "h": "書",
    "hun": "글",
    "eum": "서",
    "words": [
      {
        "word": "讀書",
        "read": "독서",
        "mean": ""
      },
      {
        "word": "圖書",
        "read": "도서",
        "mean": ""
      },
      {
        "word": "敎科書",
        "read": "교과서",
        "mean": ""
      },
      {
        "word": "書店",
        "read": "서점",
        "mean": ""
      },
      {
        "word": "書道",
        "read": "서도",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "글"
    ],
    "eumAliases": [
      "서"
    ]
  },
  {
    "h": "線",
    "hun": "줄",
    "eum": "선",
    "words": [
      {
        "word": "直線",
        "read": "직선",
        "mean": ""
      },
      {
        "word": "曲線",
        "read": "곡선",
        "mean": ""
      },
      {
        "word": "光線",
        "read": "광선",
        "mean": ""
      },
      {
        "word": "線路",
        "read": "선로",
        "mean": ""
      },
      {
        "word": "視線",
        "read": "시선",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "줄"
    ],
    "eumAliases": [
      "선"
    ]
  },
  {
    "h": "雪",
    "hun": "눈",
    "eum": "설",
    "words": [
      {
        "word": "白雪",
        "read": "백설",
        "mean": ""
      },
      {
        "word": "大雪",
        "read": "대설",
        "mean": ""
      },
      {
        "word": "降雪",
        "read": "강설",
        "mean": ""
      },
      {
        "word": "雪山",
        "read": "설산",
        "mean": ""
      },
      {
        "word": "積雪",
        "read": "적설",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "눈"
    ],
    "eumAliases": [
      "설"
    ]
  },
  {
    "h": "成",
    "hun": "이룰",
    "eum": "성",
    "words": [
      {
        "word": "成功",
        "read": "성공",
        "mean": ""
      },
      {
        "word": "成長",
        "read": "성장",
        "mean": ""
      },
      {
        "word": "完成",
        "read": "완성",
        "mean": ""
      },
      {
        "word": "成績",
        "read": "성적",
        "mean": ""
      },
      {
        "word": "成立",
        "read": "성립",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "이룰"
    ],
    "eumAliases": [
      "성"
    ]
  },
  {
    "h": "省",
    "hun": "살필",
    "eum": "성",
    "words": [
      {
        "word": "反省",
        "read": "반성",
        "mean": ""
      },
      {
        "word": "省察",
        "read": "성찰",
        "mean": ""
      },
      {
        "word": "省略",
        "read": "생략",
        "mean": ""
      },
      {
        "word": "省力",
        "read": "생력",
        "mean": ""
      },
      {
        "word": "自省",
        "read": "자성",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "살필"
    ],
    "eumAliases": [
      "성"
    ]
  },
  {
    "h": "消",
    "hun": "사라질",
    "eum": "소",
    "words": [
      {
        "word": "消火",
        "read": "소화",
        "mean": ""
      },
      {
        "word": "消費",
        "read": "소비",
        "mean": ""
      },
      {
        "word": "消化",
        "read": "소화",
        "mean": ""
      },
      {
        "word": "消失",
        "read": "소실",
        "mean": ""
      },
      {
        "word": "消毒",
        "read": "소독",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "사라질"
    ],
    "eumAliases": [
      "소"
    ]
  },
  {
    "h": "術",
    "hun": "재주",
    "eum": "술",
    "words": [
      {
        "word": "美術",
        "read": "미술",
        "mean": ""
      },
      {
        "word": "技術",
        "read": "기술",
        "mean": ""
      },
      {
        "word": "手術",
        "read": "수술",
        "mean": ""
      },
      {
        "word": "學術",
        "read": "학술",
        "mean": ""
      },
      {
        "word": "藝術",
        "read": "예술",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "재주"
    ],
    "eumAliases": [
      "술"
    ]
  },
  {
    "h": "始",
    "hun": "비로소",
    "eum": "시",
    "words": [
      {
        "word": "始作",
        "read": "시작",
        "mean": ""
      },
      {
        "word": "開始",
        "read": "개시",
        "mean": ""
      },
      {
        "word": "始終",
        "read": "시종",
        "mean": ""
      },
      {
        "word": "原始",
        "read": "원시",
        "mean": ""
      },
      {
        "word": "始點",
        "read": "시점",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "비로소"
    ],
    "eumAliases": [
      "시"
    ]
  },
  {
    "h": "身",
    "hun": "몸",
    "eum": "신",
    "words": [
      {
        "word": "身體",
        "read": "신체",
        "mean": ""
      },
      {
        "word": "自身",
        "read": "자신",
        "mean": ""
      },
      {
        "word": "出身",
        "read": "출신",
        "mean": ""
      },
      {
        "word": "全身",
        "read": "전신",
        "mean": ""
      },
      {
        "word": "身分",
        "read": "신분",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "몸"
    ],
    "eumAliases": [
      "신"
    ]
  },
  {
    "h": "神",
    "hun": "귀신",
    "eum": "신",
    "words": [
      {
        "word": "精神",
        "read": "정신",
        "mean": ""
      },
      {
        "word": "神話",
        "read": "신화",
        "mean": ""
      },
      {
        "word": "神童",
        "read": "신동",
        "mean": ""
      },
      {
        "word": "神秘",
        "read": "신비",
        "mean": ""
      },
      {
        "word": "神社",
        "read": "신사",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "귀신"
    ],
    "eumAliases": [
      "신"
    ]
  },
  {
    "h": "信",
    "hun": "믿을",
    "eum": "신",
    "words": [
      {
        "word": "信用",
        "read": "신용",
        "mean": ""
      },
      {
        "word": "信賴",
        "read": "신뢰",
        "mean": ""
      },
      {
        "word": "自信",
        "read": "자신",
        "mean": ""
      },
      {
        "word": "通信",
        "read": "통신",
        "mean": ""
      },
      {
        "word": "信號",
        "read": "신호",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "믿을"
    ],
    "eumAliases": [
      "신"
    ]
  },
  {
    "h": "新",
    "hun": "새",
    "eum": "신",
    "words": [
      {
        "word": "新聞",
        "read": "신문",
        "mean": ""
      },
      {
        "word": "新年",
        "read": "신년",
        "mean": ""
      },
      {
        "word": "新入",
        "read": "신입",
        "mean": ""
      },
      {
        "word": "新作",
        "read": "신작",
        "mean": ""
      },
      {
        "word": "最新",
        "read": "최신",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "새"
    ],
    "eumAliases": [
      "신"
    ]
  },
  {
    "h": "弱",
    "hun": "약할",
    "eum": "약",
    "words": [
      {
        "word": "弱點",
        "read": "약점",
        "mean": ""
      },
      {
        "word": "弱化",
        "read": "약화",
        "mean": ""
      },
      {
        "word": "強弱",
        "read": "강약",
        "mean": ""
      },
      {
        "word": "弱小",
        "read": "약소",
        "mean": ""
      },
      {
        "word": "體弱",
        "read": "체약",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "약할"
    ],
    "eumAliases": [
      "약"
    ]
  },
  {
    "h": "藥",
    "hun": "약",
    "eum": "약",
    "words": [
      {
        "word": "藥局",
        "read": "약국",
        "mean": ""
      },
      {
        "word": "藥品",
        "read": "약품",
        "mean": ""
      },
      {
        "word": "藥草",
        "read": "약초",
        "mean": ""
      },
      {
        "word": "韓藥",
        "read": "한약",
        "mean": ""
      },
      {
        "word": "良藥",
        "read": "양약",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "약"
    ],
    "eumAliases": [
      "약"
    ]
  },
  {
    "h": "業",
    "hun": "업",
    "eum": "업",
    "words": [
      {
        "word": "授業",
        "read": "수업",
        "mean": ""
      },
      {
        "word": "卒業",
        "read": "졸업",
        "mean": ""
      },
      {
        "word": "職業",
        "read": "직업",
        "mean": ""
      },
      {
        "word": "作業",
        "read": "작업",
        "mean": ""
      },
      {
        "word": "農業",
        "read": "농업",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "업"
    ],
    "eumAliases": [
      "업"
    ]
  },
  {
    "h": "勇",
    "hun": "날랠",
    "eum": "용",
    "words": [
      {
        "word": "勇氣",
        "read": "용기",
        "mean": ""
      },
      {
        "word": "勇士",
        "read": "용사",
        "mean": ""
      },
      {
        "word": "勇敢",
        "read": "용감",
        "mean": ""
      },
      {
        "word": "勇將",
        "read": "용장",
        "mean": ""
      },
      {
        "word": "武勇",
        "read": "무용",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "날랠"
    ],
    "eumAliases": [
      "용"
    ]
  },
  {
    "h": "用",
    "hun": "쓸",
    "eum": "용",
    "words": [
      {
        "word": "使用",
        "read": "사용",
        "mean": ""
      },
      {
        "word": "利用",
        "read": "이용",
        "mean": ""
      },
      {
        "word": "用意",
        "read": "용의",
        "mean": ""
      },
      {
        "word": "用途",
        "read": "용도",
        "mean": ""
      },
      {
        "word": "費用",
        "read": "비용",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "쓸"
    ],
    "eumAliases": [
      "용"
    ]
  },
  {
    "h": "運",
    "hun": "옮길",
    "eum": "운",
    "words": [
      {
        "word": "運動",
        "read": "운동",
        "mean": ""
      },
      {
        "word": "運轉",
        "read": "운전",
        "mean": ""
      },
      {
        "word": "運命",
        "read": "운명",
        "mean": ""
      },
      {
        "word": "幸運",
        "read": "행운",
        "mean": ""
      },
      {
        "word": "運搬",
        "read": "운반",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "옮길"
    ],
    "eumAliases": [
      "운"
    ]
  },
  {
    "h": "音",
    "hun": "소리",
    "eum": "음",
    "words": [
      {
        "word": "音樂",
        "read": "음악",
        "mean": ""
      },
      {
        "word": "音聲",
        "read": "음성",
        "mean": ""
      },
      {
        "word": "音讀",
        "read": "음독",
        "mean": ""
      },
      {
        "word": "發音",
        "read": "발음",
        "mean": ""
      },
      {
        "word": "錄音",
        "read": "녹음",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "소리"
    ],
    "eumAliases": [
      "음"
    ]
  },
  {
    "h": "飮",
    "hun": "마실",
    "eum": "음",
    "words": [
      {
        "word": "飮食",
        "read": "음식",
        "mean": ""
      },
      {
        "word": "飮料",
        "read": "음료",
        "mean": ""
      },
      {
        "word": "飮水",
        "read": "음수",
        "mean": ""
      },
      {
        "word": "飮用",
        "read": "음용",
        "mean": ""
      },
      {
        "word": "試飮",
        "read": "시음",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "마실"
    ],
    "eumAliases": [
      "음"
    ]
  },
  {
    "h": "意",
    "hun": "뜻",
    "eum": "의",
    "words": [
      {
        "word": "意味",
        "read": "의미",
        "mean": ""
      },
      {
        "word": "意見",
        "read": "의견",
        "mean": ""
      },
      {
        "word": "注意",
        "read": "주의",
        "mean": ""
      },
      {
        "word": "決意",
        "read": "결의",
        "mean": ""
      },
      {
        "word": "同意",
        "read": "동의",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "뜻"
    ],
    "eumAliases": [
      "의"
    ]
  },
  {
    "h": "作",
    "hun": "지을",
    "eum": "작",
    "words": [
      {
        "word": "作文",
        "read": "작문",
        "mean": ""
      },
      {
        "word": "作品",
        "read": "작품",
        "mean": ""
      },
      {
        "word": "作家",
        "read": "작가",
        "mean": ""
      },
      {
        "word": "始作",
        "read": "시작",
        "mean": ""
      },
      {
        "word": "製作",
        "read": "제작",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "지을"
    ],
    "eumAliases": [
      "작"
    ]
  },
  {
    "h": "昨",
    "hun": "어제",
    "eum": "작",
    "words": [
      {
        "word": "昨日",
        "read": "작일",
        "mean": ""
      },
      {
        "word": "昨年",
        "read": "작년",
        "mean": ""
      },
      {
        "word": "昨夜",
        "read": "작야",
        "mean": ""
      },
      {
        "word": "昨今",
        "read": "작금",
        "mean": ""
      },
      {
        "word": "再昨年",
        "read": "재작년",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "어제"
    ],
    "eumAliases": [
      "작"
    ]
  },
  {
    "h": "才",
    "hun": "재주",
    "eum": "재",
    "words": [
      {
        "word": "才能",
        "read": "재능",
        "mean": ""
      },
      {
        "word": "天才",
        "read": "천재",
        "mean": ""
      },
      {
        "word": "英才",
        "read": "영재",
        "mean": ""
      },
      {
        "word": "秀才",
        "read": "수재",
        "mean": ""
      },
      {
        "word": "多才",
        "read": "다재",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "재주"
    ],
    "eumAliases": [
      "재"
    ]
  },
  {
    "h": "戰",
    "hun": "싸움",
    "eum": "전",
    "words": [
      {
        "word": "戰爭",
        "read": "전쟁",
        "mean": ""
      },
      {
        "word": "戰鬪",
        "read": "전투",
        "mean": ""
      },
      {
        "word": "作戰",
        "read": "작전",
        "mean": ""
      },
      {
        "word": "挑戰",
        "read": "도전",
        "mean": ""
      },
      {
        "word": "停戰",
        "read": "정전",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "싸움"
    ],
    "eumAliases": [
      "전"
    ]
  },
  {
    "h": "庭",
    "hun": "뜰",
    "eum": "정",
    "words": [
      {
        "word": "家庭",
        "read": "가정",
        "mean": ""
      },
      {
        "word": "庭園",
        "read": "정원",
        "mean": ""
      },
      {
        "word": "校庭",
        "read": "교정",
        "mean": ""
      },
      {
        "word": "法庭",
        "read": "법정",
        "mean": ""
      },
      {
        "word": "庭球",
        "read": "정구",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "뜰"
    ],
    "eumAliases": [
      "정"
    ]
  },
  {
    "h": "第",
    "hun": "차례",
    "eum": "제",
    "words": [
      {
        "word": "第一",
        "read": "제일",
        "mean": ""
      },
      {
        "word": "第二",
        "read": "제이",
        "mean": ""
      },
      {
        "word": "第三",
        "read": "제삼",
        "mean": ""
      },
      {
        "word": "第四",
        "read": "제사",
        "mean": ""
      },
      {
        "word": "第五",
        "read": "제오",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "차례"
    ],
    "eumAliases": [
      "제"
    ]
  },
  {
    "h": "題",
    "hun": "제목",
    "eum": "제",
    "words": [
      {
        "word": "題目",
        "read": "제목",
        "mean": ""
      },
      {
        "word": "問題",
        "read": "문제",
        "mean": ""
      },
      {
        "word": "主題",
        "read": "주제",
        "mean": ""
      },
      {
        "word": "話題",
        "read": "화제",
        "mean": ""
      },
      {
        "word": "課題",
        "read": "과제",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "제목"
    ],
    "eumAliases": [
      "제"
    ]
  },
  {
    "h": "注",
    "hun": "부을",
    "eum": "주",
    "words": [
      {
        "word": "注意",
        "read": "주의",
        "mean": ""
      },
      {
        "word": "注文",
        "read": "주문",
        "mean": ""
      },
      {
        "word": "注目",
        "read": "주목",
        "mean": ""
      },
      {
        "word": "注入",
        "read": "주입",
        "mean": ""
      },
      {
        "word": "注射",
        "read": "주사",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "부을"
    ],
    "eumAliases": [
      "주"
    ]
  },
  {
    "h": "集",
    "hun": "모을",
    "eum": "집",
    "words": [
      {
        "word": "集合",
        "read": "집합",
        "mean": ""
      },
      {
        "word": "集中",
        "read": "집중",
        "mean": ""
      },
      {
        "word": "募集",
        "read": "모집",
        "mean": ""
      },
      {
        "word": "收集",
        "read": "수집",
        "mean": ""
      },
      {
        "word": "文集",
        "read": "문집",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "모을"
    ],
    "eumAliases": [
      "집"
    ]
  },
  {
    "h": "窓",
    "hun": "창",
    "eum": "창",
    "words": [
      {
        "word": "窓門",
        "read": "창문",
        "mean": ""
      },
      {
        "word": "窓口",
        "read": "창구",
        "mean": ""
      },
      {
        "word": "同窓",
        "read": "동창",
        "mean": ""
      },
      {
        "word": "車窓",
        "read": "차창",
        "mean": ""
      },
      {
        "word": "天窓",
        "read": "천창",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "창"
    ],
    "eumAliases": [
      "창"
    ]
  },
  {
    "h": "淸",
    "hun": "맑을",
    "eum": "청",
    "words": [
      {
        "word": "淸掃",
        "read": "청소",
        "mean": ""
      },
      {
        "word": "淸潔",
        "read": "청결",
        "mean": ""
      },
      {
        "word": "淸水",
        "read": "청수",
        "mean": ""
      },
      {
        "word": "淸明",
        "read": "청명",
        "mean": ""
      },
      {
        "word": "淸白",
        "read": "청백",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "맑을"
    ],
    "eumAliases": [
      "청"
    ]
  },
  {
    "h": "體",
    "hun": "몸",
    "eum": "체",
    "words": [
      {
        "word": "體育",
        "read": "체육",
        "mean": ""
      },
      {
        "word": "身體",
        "read": "신체",
        "mean": ""
      },
      {
        "word": "體溫",
        "read": "체온",
        "mean": ""
      },
      {
        "word": "體力",
        "read": "체력",
        "mean": ""
      },
      {
        "word": "全體",
        "read": "전체",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "몸"
    ],
    "eumAliases": [
      "체"
    ]
  },
  {
    "h": "表",
    "hun": "겉",
    "eum": "표",
    "words": [
      {
        "word": "表現",
        "read": "표현",
        "mean": ""
      },
      {
        "word": "發表",
        "read": "발표",
        "mean": ""
      },
      {
        "word": "代表",
        "read": "대표",
        "mean": ""
      },
      {
        "word": "表情",
        "read": "표정",
        "mean": ""
      },
      {
        "word": "圖表",
        "read": "도표",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "겉"
    ],
    "eumAliases": [
      "표"
    ]
  },
  {
    "h": "風",
    "hun": "바람",
    "eum": "풍",
    "words": [
      {
        "word": "風景",
        "read": "풍경",
        "mean": ""
      },
      {
        "word": "風速",
        "read": "풍속",
        "mean": ""
      },
      {
        "word": "台風",
        "read": "태풍",
        "mean": ""
      },
      {
        "word": "風力",
        "read": "풍력",
        "mean": ""
      },
      {
        "word": "春風",
        "read": "춘풍",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "바람"
    ],
    "eumAliases": [
      "풍"
    ]
  },
  {
    "h": "幸",
    "hun": "다행",
    "eum": "행",
    "words": [
      {
        "word": "幸福",
        "read": "행복",
        "mean": ""
      },
      {
        "word": "幸運",
        "read": "행운",
        "mean": ""
      },
      {
        "word": "多幸",
        "read": "다행",
        "mean": ""
      },
      {
        "word": "不幸",
        "read": "불행",
        "mean": ""
      },
      {
        "word": "幸甚",
        "read": "행심",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "다행"
    ],
    "eumAliases": [
      "행"
    ]
  },
  {
    "h": "現",
    "hun": "나타날",
    "eum": "현",
    "words": [
      {
        "word": "現在",
        "read": "현재",
        "mean": ""
      },
      {
        "word": "現代",
        "read": "현대",
        "mean": ""
      },
      {
        "word": "表現",
        "read": "표현",
        "mean": ""
      },
      {
        "word": "出現",
        "read": "출현",
        "mean": ""
      },
      {
        "word": "現場",
        "read": "현장",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "나타날"
    ],
    "eumAliases": [
      "현"
    ]
  },
  {
    "h": "形",
    "hun": "모양",
    "eum": "형",
    "words": [
      {
        "word": "形態",
        "read": "형태",
        "mean": ""
      },
      {
        "word": "圖形",
        "read": "도형",
        "mean": ""
      },
      {
        "word": "三角形",
        "read": "삼각형",
        "mean": ""
      },
      {
        "word": "四角形",
        "read": "사각형",
        "mean": ""
      },
      {
        "word": "人形",
        "read": "인형",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "모양"
    ],
    "eumAliases": [
      "형"
    ]
  },
  {
    "h": "和",
    "hun": "화할",
    "eum": "화",
    "words": [
      {
        "word": "平和",
        "read": "평화",
        "mean": ""
      },
      {
        "word": "和合",
        "read": "화합",
        "mean": ""
      },
      {
        "word": "和音",
        "read": "화음",
        "mean": ""
      },
      {
        "word": "調和",
        "read": "조화",
        "mean": ""
      },
      {
        "word": "和解",
        "read": "화해",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "화할"
    ],
    "eumAliases": [
      "화"
    ]
  },
  {
    "h": "會",
    "hun": "모일",
    "eum": "회",
    "words": [
      {
        "word": "會議",
        "read": "회의",
        "mean": ""
      },
      {
        "word": "會社",
        "read": "회사",
        "mean": ""
      },
      {
        "word": "大會",
        "read": "대회",
        "mean": ""
      },
      {
        "word": "社會",
        "read": "사회",
        "mean": ""
      },
      {
        "word": "集會",
        "read": "집회",
        "mean": ""
      }
    ],
    "level": 3,
    "levelName": "6급Ⅱ",
    "grade": 6,
    "hunAliases": [
      "모일"
    ],
    "eumAliases": [
      "회"
    ]
  },
  {
    "h": "感",
    "hun": "느낄",
    "eum": "감",
    "words": [
      {
        "word": "感動",
        "read": "감동",
        "mean": ""
      },
      {
        "word": "感謝",
        "read": "감사",
        "mean": ""
      },
      {
        "word": "感情",
        "read": "감정",
        "mean": ""
      },
      {
        "word": "感想",
        "read": "감상",
        "mean": ""
      },
      {
        "word": "共感",
        "read": "공감",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "느낄"
    ],
    "eumAliases": [
      "감"
    ]
  },
  {
    "h": "強",
    "hun": "강할",
    "eum": "강",
    "words": [
      {
        "word": "強力",
        "read": "강력",
        "mean": ""
      },
      {
        "word": "強風",
        "read": "강풍",
        "mean": ""
      },
      {
        "word": "強弱",
        "read": "강약",
        "mean": ""
      },
      {
        "word": "最強",
        "read": "최강",
        "mean": ""
      },
      {
        "word": "強調",
        "read": "강조",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "강할"
    ],
    "eumAliases": [
      "강"
    ]
  },
  {
    "h": "開",
    "hun": "열",
    "eum": "개",
    "words": [
      {
        "word": "開始",
        "read": "개시",
        "mean": ""
      },
      {
        "word": "開放",
        "read": "개방",
        "mean": ""
      },
      {
        "word": "開會",
        "read": "개회",
        "mean": ""
      },
      {
        "word": "開發",
        "read": "개발",
        "mean": ""
      },
      {
        "word": "公開",
        "read": "공개",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "열"
    ],
    "eumAliases": [
      "개"
    ]
  },
  {
    "h": "京",
    "hun": "서울",
    "eum": "경",
    "words": [
      {
        "word": "東京",
        "read": "동경",
        "mean": ""
      },
      {
        "word": "上京",
        "read": "상경",
        "mean": ""
      },
      {
        "word": "北京",
        "read": "북경",
        "mean": ""
      },
      {
        "word": "京畿",
        "read": "경기",
        "mean": ""
      },
      {
        "word": "歸京",
        "read": "귀경",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "서울"
    ],
    "eumAliases": [
      "경"
    ]
  },
  {
    "h": "古",
    "hun": "예",
    "eum": "고",
    "words": [
      {
        "word": "古代",
        "read": "고대",
        "mean": ""
      },
      {
        "word": "古典",
        "read": "고전",
        "mean": ""
      },
      {
        "word": "古城",
        "read": "고성",
        "mean": ""
      },
      {
        "word": "中古",
        "read": "중고",
        "mean": ""
      },
      {
        "word": "古文",
        "read": "고문",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "예"
    ],
    "eumAliases": [
      "고"
    ]
  },
  {
    "h": "苦",
    "hun": "쓸",
    "eum": "고",
    "words": [
      {
        "word": "苦痛",
        "read": "고통",
        "mean": ""
      },
      {
        "word": "苦生",
        "read": "고생",
        "mean": ""
      },
      {
        "word": "苦難",
        "read": "고난",
        "mean": ""
      },
      {
        "word": "苦味",
        "read": "고미",
        "mean": ""
      },
      {
        "word": "辛苦",
        "read": "신고",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "쓸"
    ],
    "eumAliases": [
      "고"
    ]
  },
  {
    "h": "交",
    "hun": "사귈",
    "eum": "교",
    "words": [
      {
        "word": "交通",
        "read": "교통",
        "mean": ""
      },
      {
        "word": "交流",
        "read": "교류",
        "mean": ""
      },
      {
        "word": "交代",
        "read": "교대",
        "mean": ""
      },
      {
        "word": "外交",
        "read": "외교",
        "mean": ""
      },
      {
        "word": "交友",
        "read": "교우",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "사귈"
    ],
    "eumAliases": [
      "교"
    ]
  },
  {
    "h": "區",
    "hun": "구분할",
    "eum": "구",
    "words": [
      {
        "word": "區分",
        "read": "구분",
        "mean": ""
      },
      {
        "word": "區域",
        "read": "구역",
        "mean": ""
      },
      {
        "word": "地區",
        "read": "지구",
        "mean": ""
      },
      {
        "word": "區間",
        "read": "구간",
        "mean": ""
      },
      {
        "word": "特區",
        "read": "특구",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "구분할",
      "지경"
    ],
    "eumAliases": [
      "구"
    ]
  },
  {
    "h": "郡",
    "hun": "고을",
    "eum": "군",
    "words": [
      {
        "word": "郡守",
        "read": "군수",
        "mean": ""
      },
      {
        "word": "郡民",
        "read": "군민",
        "mean": ""
      },
      {
        "word": "郡廳",
        "read": "군청",
        "mean": ""
      },
      {
        "word": "郡內",
        "read": "군내",
        "mean": ""
      },
      {
        "word": "郡立",
        "read": "군립",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "고을"
    ],
    "eumAliases": [
      "군"
    ]
  },
  {
    "h": "根",
    "hun": "뿌리",
    "eum": "근",
    "words": [
      {
        "word": "根本",
        "read": "근본",
        "mean": ""
      },
      {
        "word": "根源",
        "read": "근원",
        "mean": ""
      },
      {
        "word": "根性",
        "read": "근성",
        "mean": ""
      },
      {
        "word": "球根",
        "read": "구근",
        "mean": ""
      },
      {
        "word": "根據",
        "read": "근거",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "뿌리"
    ],
    "eumAliases": [
      "근"
    ]
  },
  {
    "h": "近",
    "hun": "가까울",
    "eum": "근",
    "words": [
      {
        "word": "近所",
        "read": "근소",
        "mean": ""
      },
      {
        "word": "最近",
        "read": "최근",
        "mean": ""
      },
      {
        "word": "近代",
        "read": "근대",
        "mean": ""
      },
      {
        "word": "近接",
        "read": "근접",
        "mean": ""
      },
      {
        "word": "遠近",
        "read": "원근",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "가까울"
    ],
    "eumAliases": [
      "근"
    ]
  },
  {
    "h": "級",
    "hun": "등급",
    "eum": "급",
    "words": [
      {
        "word": "等級",
        "read": "등급",
        "mean": ""
      },
      {
        "word": "學級",
        "read": "학급",
        "mean": ""
      },
      {
        "word": "高級",
        "read": "고급",
        "mean": ""
      },
      {
        "word": "初級",
        "read": "초급",
        "mean": ""
      },
      {
        "word": "進級",
        "read": "진급",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "등급"
    ],
    "eumAliases": [
      "급"
    ]
  },
  {
    "h": "多",
    "hun": "많을",
    "eum": "다",
    "words": [
      {
        "word": "多數",
        "read": "다수",
        "mean": ""
      },
      {
        "word": "多樣",
        "read": "다양",
        "mean": ""
      },
      {
        "word": "多幸",
        "read": "다행",
        "mean": ""
      },
      {
        "word": "多量",
        "read": "다량",
        "mean": ""
      },
      {
        "word": "多少",
        "read": "다소",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "많을"
    ],
    "eumAliases": [
      "다"
    ]
  },
  {
    "h": "待",
    "hun": "기다릴",
    "eum": "대",
    "words": [
      {
        "word": "期待",
        "read": "기대",
        "mean": ""
      },
      {
        "word": "待期",
        "read": "대기",
        "mean": ""
      },
      {
        "word": "待遇",
        "read": "대우",
        "mean": ""
      },
      {
        "word": "招待",
        "read": "초대",
        "mean": ""
      },
      {
        "word": "接待",
        "read": "접대",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "기다릴"
    ],
    "eumAliases": [
      "대"
    ]
  },
  {
    "h": "度",
    "hun": "법도",
    "eum": "도",
    "words": [
      {
        "word": "溫度",
        "read": "온도",
        "mean": ""
      },
      {
        "word": "速度",
        "read": "속도",
        "mean": ""
      },
      {
        "word": "角度",
        "read": "각도",
        "mean": ""
      },
      {
        "word": "態度",
        "read": "태도",
        "mean": ""
      },
      {
        "word": "程度",
        "read": "정도",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "법도"
    ],
    "eumAliases": [
      "도"
    ]
  },
  {
    "h": "頭",
    "hun": "머리",
    "eum": "두",
    "words": [
      {
        "word": "頭痛",
        "read": "두통",
        "mean": ""
      },
      {
        "word": "頭腦",
        "read": "두뇌",
        "mean": ""
      },
      {
        "word": "先頭",
        "read": "선두",
        "mean": ""
      },
      {
        "word": "口頭",
        "read": "구두",
        "mean": ""
      },
      {
        "word": "頭文字",
        "read": "두문자",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "머리"
    ],
    "eumAliases": [
      "두"
    ]
  },
  {
    "h": "例",
    "hun": "법식",
    "eum": "례",
    "words": [
      {
        "word": "例文",
        "read": "예문",
        "mean": ""
      },
      {
        "word": "例外",
        "read": "예외",
        "mean": ""
      },
      {
        "word": "事例",
        "read": "사례",
        "mean": ""
      },
      {
        "word": "比例",
        "read": "비례",
        "mean": ""
      },
      {
        "word": "用例",
        "read": "용례",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "법식"
    ],
    "eumAliases": [
      "례",
      "예"
    ]
  },
  {
    "h": "禮",
    "hun": "예도",
    "eum": "례",
    "words": [
      {
        "word": "禮節",
        "read": "예절",
        "mean": ""
      },
      {
        "word": "禮儀",
        "read": "예의",
        "mean": ""
      },
      {
        "word": "敬禮",
        "read": "경례",
        "mean": ""
      },
      {
        "word": "失禮",
        "read": "실례",
        "mean": ""
      },
      {
        "word": "婚禮",
        "read": "혼례",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "예도"
    ],
    "eumAliases": [
      "례",
      "예"
    ]
  },
  {
    "h": "路",
    "hun": "길",
    "eum": "로",
    "words": [
      {
        "word": "道路",
        "read": "도로",
        "mean": ""
      },
      {
        "word": "路線",
        "read": "노선",
        "mean": ""
      },
      {
        "word": "進路",
        "read": "진로",
        "mean": ""
      },
      {
        "word": "水路",
        "read": "수로",
        "mean": ""
      },
      {
        "word": "線路",
        "read": "선로",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "길"
    ],
    "eumAliases": [
      "로",
      "노"
    ]
  },
  {
    "h": "綠",
    "hun": "푸를",
    "eum": "록",
    "words": [
      {
        "word": "綠色",
        "read": "녹색",
        "mean": ""
      },
      {
        "word": "草綠",
        "read": "초록",
        "mean": ""
      },
      {
        "word": "綠茶",
        "read": "녹차",
        "mean": ""
      },
      {
        "word": "新綠",
        "read": "신록",
        "mean": ""
      },
      {
        "word": "綠地",
        "read": "녹지",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "푸를"
    ],
    "eumAliases": [
      "록",
      "녹"
    ]
  },
  {
    "h": "李",
    "hun": "오얏",
    "eum": "리",
    "words": [
      {
        "word": "李氏",
        "read": "이씨",
        "mean": ""
      },
      {
        "word": "李朝",
        "read": "이조",
        "mean": ""
      },
      {
        "word": "李白",
        "read": "이백",
        "mean": ""
      },
      {
        "word": "李舜臣",
        "read": "이순신",
        "mean": ""
      },
      {
        "word": "李成桂",
        "read": "이성계",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "오얏",
      "성"
    ],
    "eumAliases": [
      "리",
      "이"
    ]
  },
  {
    "h": "目",
    "hun": "눈",
    "eum": "목",
    "words": [
      {
        "word": "目的",
        "read": "목적",
        "mean": ""
      },
      {
        "word": "目標",
        "read": "목표",
        "mean": ""
      },
      {
        "word": "科目",
        "read": "과목",
        "mean": ""
      },
      {
        "word": "注目",
        "read": "주목",
        "mean": ""
      },
      {
        "word": "題目",
        "read": "제목",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "눈"
    ],
    "eumAliases": [
      "목"
    ]
  },
  {
    "h": "美",
    "hun": "아름다울",
    "eum": "미",
    "words": [
      {
        "word": "美術",
        "read": "미술",
        "mean": ""
      },
      {
        "word": "美人",
        "read": "미인",
        "mean": ""
      },
      {
        "word": "美味",
        "read": "미미",
        "mean": ""
      },
      {
        "word": "美化",
        "read": "미화",
        "mean": ""
      },
      {
        "word": "美德",
        "read": "미덕",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "아름다울"
    ],
    "eumAliases": [
      "미"
    ]
  },
  {
    "h": "米",
    "hun": "쌀",
    "eum": "미",
    "words": [
      {
        "word": "白米",
        "read": "백미",
        "mean": ""
      },
      {
        "word": "玄米",
        "read": "현미",
        "mean": ""
      },
      {
        "word": "米穀",
        "read": "미곡",
        "mean": ""
      },
      {
        "word": "新米",
        "read": "신미",
        "mean": ""
      },
      {
        "word": "精米",
        "read": "정미",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "쌀"
    ],
    "eumAliases": [
      "미"
    ]
  },
  {
    "h": "朴",
    "hun": "성",
    "eum": "박",
    "words": [
      {
        "word": "朴氏",
        "read": "박씨",
        "mean": ""
      },
      {
        "word": "素朴",
        "read": "소박",
        "mean": ""
      },
      {
        "word": "質朴",
        "read": "질박",
        "mean": ""
      },
      {
        "word": "淳朴",
        "read": "순박",
        "mean": ""
      },
      {
        "word": "朴素",
        "read": "박소",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "성"
    ],
    "eumAliases": [
      "박"
    ]
  },
  {
    "h": "番",
    "hun": "차례",
    "eum": "번",
    "words": [
      {
        "word": "番號",
        "read": "번호",
        "mean": ""
      },
      {
        "word": "番地",
        "read": "번지",
        "mean": ""
      },
      {
        "word": "番次",
        "read": "번차",
        "mean": ""
      },
      {
        "word": "順番",
        "read": "순번",
        "mean": ""
      },
      {
        "word": "當番",
        "read": "당번",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "차례"
    ],
    "eumAliases": [
      "번"
    ]
  },
  {
    "h": "別",
    "hun": "다를",
    "eum": "별",
    "words": [
      {
        "word": "特別",
        "read": "특별",
        "mean": ""
      },
      {
        "word": "區別",
        "read": "구별",
        "mean": ""
      },
      {
        "word": "分別",
        "read": "분별",
        "mean": ""
      },
      {
        "word": "別名",
        "read": "별명",
        "mean": ""
      },
      {
        "word": "離別",
        "read": "이별",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "나눌",
      "다를"
    ],
    "eumAliases": [
      "별"
    ]
  },
  {
    "h": "病",
    "hun": "병",
    "eum": "병",
    "words": [
      {
        "word": "病院",
        "read": "병원",
        "mean": ""
      },
      {
        "word": "病室",
        "read": "병실",
        "mean": ""
      },
      {
        "word": "病氣",
        "read": "병기",
        "mean": ""
      },
      {
        "word": "看病",
        "read": "간병",
        "mean": ""
      },
      {
        "word": "疾病",
        "read": "질병",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "병"
    ],
    "eumAliases": [
      "병"
    ]
  },
  {
    "h": "服",
    "hun": "옷",
    "eum": "복",
    "words": [
      {
        "word": "衣服",
        "read": "의복",
        "mean": ""
      },
      {
        "word": "校服",
        "read": "교복",
        "mean": ""
      },
      {
        "word": "洋服",
        "read": "양복",
        "mean": ""
      },
      {
        "word": "韓服",
        "read": "한복",
        "mean": ""
      },
      {
        "word": "制服",
        "read": "제복",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "옷"
    ],
    "eumAliases": [
      "복"
    ]
  },
  {
    "h": "本",
    "hun": "근본",
    "eum": "본",
    "words": [
      {
        "word": "基本",
        "read": "기본",
        "mean": ""
      },
      {
        "word": "根本",
        "read": "근본",
        "mean": ""
      },
      {
        "word": "本人",
        "read": "본인",
        "mean": ""
      },
      {
        "word": "日本",
        "read": "일본",
        "mean": ""
      },
      {
        "word": "原本",
        "read": "원본",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "근본"
    ],
    "eumAliases": [
      "본"
    ]
  },
  {
    "h": "使",
    "hun": "하여금",
    "eum": "사",
    "words": [
      {
        "word": "使用",
        "read": "사용",
        "mean": ""
      },
      {
        "word": "使者",
        "read": "사자",
        "mean": ""
      },
      {
        "word": "天使",
        "read": "천사",
        "mean": ""
      },
      {
        "word": "大使",
        "read": "대사",
        "mean": ""
      },
      {
        "word": "行使",
        "read": "행사",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "부릴",
      "하여금"
    ],
    "eumAliases": [
      "사"
    ]
  },
  {
    "h": "死",
    "hun": "죽을",
    "eum": "사",
    "words": [
      {
        "word": "死亡",
        "read": "사망",
        "mean": ""
      },
      {
        "word": "生死",
        "read": "생사",
        "mean": ""
      },
      {
        "word": "死後",
        "read": "사후",
        "mean": ""
      },
      {
        "word": "必死",
        "read": "필사",
        "mean": ""
      },
      {
        "word": "死因",
        "read": "사인",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "죽을"
    ],
    "eumAliases": [
      "사"
    ]
  },
  {
    "h": "席",
    "hun": "자리",
    "eum": "석",
    "words": [
      {
        "word": "座席",
        "read": "좌석",
        "mean": ""
      },
      {
        "word": "出席",
        "read": "출석",
        "mean": ""
      },
      {
        "word": "缺席",
        "read": "결석",
        "mean": ""
      },
      {
        "word": "客席",
        "read": "객석",
        "mean": ""
      },
      {
        "word": "首席",
        "read": "수석",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "자리"
    ],
    "eumAliases": [
      "석"
    ]
  },
  {
    "h": "石",
    "hun": "돌",
    "eum": "석",
    "words": [
      {
        "word": "石油",
        "read": "석유",
        "mean": ""
      },
      {
        "word": "石炭",
        "read": "석탄",
        "mean": ""
      },
      {
        "word": "寶石",
        "read": "보석",
        "mean": ""
      },
      {
        "word": "岩石",
        "read": "암석",
        "mean": ""
      },
      {
        "word": "石像",
        "read": "석상",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "돌"
    ],
    "eumAliases": [
      "석"
    ]
  },
  {
    "h": "速",
    "hun": "빠를",
    "eum": "속",
    "words": [
      {
        "word": "速度",
        "read": "속도",
        "mean": ""
      },
      {
        "word": "高速",
        "read": "고속",
        "mean": ""
      },
      {
        "word": "急速",
        "read": "급속",
        "mean": ""
      },
      {
        "word": "速力",
        "read": "속력",
        "mean": ""
      },
      {
        "word": "快速",
        "read": "쾌속",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "빠를"
    ],
    "eumAliases": [
      "속"
    ]
  },
  {
    "h": "孫",
    "hun": "손자",
    "eum": "손",
    "words": [
      {
        "word": "孫子",
        "read": "손자",
        "mean": ""
      },
      {
        "word": "子孫",
        "read": "자손",
        "mean": ""
      },
      {
        "word": "孫女",
        "read": "손녀",
        "mean": ""
      },
      {
        "word": "後孫",
        "read": "후손",
        "mean": ""
      },
      {
        "word": "外孫",
        "read": "외손",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "손자"
    ],
    "eumAliases": [
      "손"
    ]
  },
  {
    "h": "樹",
    "hun": "나무",
    "eum": "수",
    "words": [
      {
        "word": "樹木",
        "read": "수목",
        "mean": ""
      },
      {
        "word": "樹林",
        "read": "수림",
        "mean": ""
      },
      {
        "word": "樹立",
        "read": "수립",
        "mean": ""
      },
      {
        "word": "果樹",
        "read": "과수",
        "mean": ""
      },
      {
        "word": "植樹",
        "read": "식수",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "나무"
    ],
    "eumAliases": [
      "수"
    ]
  },
  {
    "h": "習",
    "hun": "익힐",
    "eum": "습",
    "words": [
      {
        "word": "學習",
        "read": "학습",
        "mean": ""
      },
      {
        "word": "練習",
        "read": "연습",
        "mean": ""
      },
      {
        "word": "復習",
        "read": "복습",
        "mean": ""
      },
      {
        "word": "習慣",
        "read": "습관",
        "mean": ""
      },
      {
        "word": "實習",
        "read": "실습",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "익힐"
    ],
    "eumAliases": [
      "습"
    ]
  },
  {
    "h": "勝",
    "hun": "이길",
    "eum": "승",
    "words": [
      {
        "word": "勝利",
        "read": "승리",
        "mean": ""
      },
      {
        "word": "優勝",
        "read": "우승",
        "mean": ""
      },
      {
        "word": "勝負",
        "read": "승부",
        "mean": ""
      },
      {
        "word": "連勝",
        "read": "연승",
        "mean": ""
      },
      {
        "word": "決勝",
        "read": "결승",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "이길"
    ],
    "eumAliases": [
      "승"
    ]
  },
  {
    "h": "式",
    "hun": "법",
    "eum": "식",
    "words": [
      {
        "word": "公式",
        "read": "공식",
        "mean": ""
      },
      {
        "word": "形式",
        "read": "형식",
        "mean": ""
      },
      {
        "word": "儀式",
        "read": "의식",
        "mean": ""
      },
      {
        "word": "入學式",
        "read": "입학식",
        "mean": ""
      },
      {
        "word": "卒業式",
        "read": "졸업식",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "법"
    ],
    "eumAliases": [
      "식"
    ]
  },
  {
    "h": "失",
    "hun": "잃을",
    "eum": "실",
    "words": [
      {
        "word": "失敗",
        "read": "실패",
        "mean": ""
      },
      {
        "word": "失手",
        "read": "실수",
        "mean": ""
      },
      {
        "word": "失望",
        "read": "실망",
        "mean": ""
      },
      {
        "word": "分失",
        "read": "분실",
        "mean": ""
      },
      {
        "word": "消失",
        "read": "소실",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "잃을"
    ],
    "eumAliases": [
      "실"
    ]
  },
  {
    "h": "愛",
    "hun": "사랑",
    "eum": "애",
    "words": [
      {
        "word": "愛情",
        "read": "애정",
        "mean": ""
      },
      {
        "word": "愛國",
        "read": "애국",
        "mean": ""
      },
      {
        "word": "友愛",
        "read": "우애",
        "mean": ""
      },
      {
        "word": "親愛",
        "read": "친애",
        "mean": ""
      },
      {
        "word": "博愛",
        "read": "박애",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "사랑"
    ],
    "eumAliases": [
      "애"
    ]
  },
  {
    "h": "夜",
    "hun": "밤",
    "eum": "야",
    "words": [
      {
        "word": "夜間",
        "read": "야간",
        "mean": ""
      },
      {
        "word": "夜景",
        "read": "야경",
        "mean": ""
      },
      {
        "word": "深夜",
        "read": "심야",
        "mean": ""
      },
      {
        "word": "夜行",
        "read": "야행",
        "mean": ""
      },
      {
        "word": "晝夜",
        "read": "주야",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "밤"
    ],
    "eumAliases": [
      "야"
    ]
  },
  {
    "h": "野",
    "hun": "들",
    "eum": "야",
    "words": [
      {
        "word": "野球",
        "read": "야구",
        "mean": ""
      },
      {
        "word": "野外",
        "read": "야외",
        "mean": ""
      },
      {
        "word": "野生",
        "read": "야생",
        "mean": ""
      },
      {
        "word": "平野",
        "read": "평야",
        "mean": ""
      },
      {
        "word": "分野",
        "read": "분야",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "들"
    ],
    "eumAliases": [
      "야"
    ]
  },
  {
    "h": "陽",
    "hun": "볕",
    "eum": "양",
    "words": [
      {
        "word": "太陽",
        "read": "태양",
        "mean": ""
      },
      {
        "word": "陽光",
        "read": "양광",
        "mean": ""
      },
      {
        "word": "陽地",
        "read": "양지",
        "mean": ""
      },
      {
        "word": "陽曆",
        "read": "양력",
        "mean": ""
      },
      {
        "word": "陰陽",
        "read": "음양",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "볕"
    ],
    "eumAliases": [
      "양"
    ]
  },
  {
    "h": "洋",
    "hun": "큰바다",
    "eum": "양",
    "words": [
      {
        "word": "洋服",
        "read": "양복",
        "mean": ""
      },
      {
        "word": "西洋",
        "read": "서양",
        "mean": ""
      },
      {
        "word": "東洋",
        "read": "동양",
        "mean": ""
      },
      {
        "word": "海洋",
        "read": "해양",
        "mean": ""
      },
      {
        "word": "太平洋",
        "read": "태평양",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "큰바다"
    ],
    "eumAliases": [
      "양"
    ]
  },
  {
    "h": "言",
    "hun": "말씀",
    "eum": "언",
    "words": [
      {
        "word": "言語",
        "read": "언어",
        "mean": ""
      },
      {
        "word": "言行",
        "read": "언행",
        "mean": ""
      },
      {
        "word": "方言",
        "read": "방언",
        "mean": ""
      },
      {
        "word": "發言",
        "read": "발언",
        "mean": ""
      },
      {
        "word": "助言",
        "read": "조언",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "말씀"
    ],
    "eumAliases": [
      "언"
    ]
  },
  {
    "h": "英",
    "hun": "꽃부리",
    "eum": "영",
    "words": [
      {
        "word": "英語",
        "read": "영어",
        "mean": ""
      },
      {
        "word": "英文",
        "read": "영문",
        "mean": ""
      },
      {
        "word": "英國",
        "read": "영국",
        "mean": ""
      },
      {
        "word": "英雄",
        "read": "영웅",
        "mean": ""
      },
      {
        "word": "英才",
        "read": "영재",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "꽃부리"
    ],
    "eumAliases": [
      "영"
    ]
  },
  {
    "h": "永",
    "hun": "길",
    "eum": "영",
    "words": [
      {
        "word": "永遠",
        "read": "영원",
        "mean": ""
      },
      {
        "word": "永久",
        "read": "영구",
        "mean": ""
      },
      {
        "word": "永生",
        "read": "영생",
        "mean": ""
      },
      {
        "word": "永續",
        "read": "영속",
        "mean": ""
      },
      {
        "word": "永眠",
        "read": "영면",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "길"
    ],
    "eumAliases": [
      "영"
    ]
  },
  {
    "h": "溫",
    "hun": "따뜻할",
    "eum": "온",
    "words": [
      {
        "word": "溫度",
        "read": "온도",
        "mean": ""
      },
      {
        "word": "溫水",
        "read": "온수",
        "mean": ""
      },
      {
        "word": "體溫",
        "read": "체온",
        "mean": ""
      },
      {
        "word": "氣溫",
        "read": "기온",
        "mean": ""
      },
      {
        "word": "溫泉",
        "read": "온천",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "따뜻할"
    ],
    "eumAliases": [
      "온"
    ]
  },
  {
    "h": "園",
    "hun": "동산",
    "eum": "원",
    "words": [
      {
        "word": "公園",
        "read": "공원",
        "mean": ""
      },
      {
        "word": "花園",
        "read": "화원",
        "mean": ""
      },
      {
        "word": "庭園",
        "read": "정원",
        "mean": ""
      },
      {
        "word": "動物園",
        "read": "동물원",
        "mean": ""
      },
      {
        "word": "幼稚園",
        "read": "유치원",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "동산"
    ],
    "eumAliases": [
      "원"
    ]
  },
  {
    "h": "遠",
    "hun": "멀",
    "eum": "원",
    "words": [
      {
        "word": "遠足",
        "read": "원족",
        "mean": ""
      },
      {
        "word": "永遠",
        "read": "영원",
        "mean": ""
      },
      {
        "word": "遠近",
        "read": "원근",
        "mean": ""
      },
      {
        "word": "遠方",
        "read": "원방",
        "mean": ""
      },
      {
        "word": "遠距離",
        "read": "원거리",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "멀"
    ],
    "eumAliases": [
      "원"
    ]
  },
  {
    "h": "由",
    "hun": "말미암을",
    "eum": "유",
    "words": [
      {
        "word": "理由",
        "read": "이유",
        "mean": ""
      },
      {
        "word": "自由",
        "read": "자유",
        "mean": ""
      },
      {
        "word": "由來",
        "read": "유래",
        "mean": ""
      },
      {
        "word": "事由",
        "read": "사유",
        "mean": ""
      },
      {
        "word": "經由",
        "read": "경유",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "말미암을"
    ],
    "eumAliases": [
      "유"
    ]
  },
  {
    "h": "油",
    "hun": "기름",
    "eum": "유",
    "words": [
      {
        "word": "石油",
        "read": "석유",
        "mean": ""
      },
      {
        "word": "油田",
        "read": "유전",
        "mean": ""
      },
      {
        "word": "食用油",
        "read": "식용유",
        "mean": ""
      },
      {
        "word": "原油",
        "read": "원유",
        "mean": ""
      },
      {
        "word": "油畫",
        "read": "유화",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "기름"
    ],
    "eumAliases": [
      "유"
    ]
  },
  {
    "h": "銀",
    "hun": "은",
    "eum": "은",
    "words": [
      {
        "word": "銀行",
        "read": "은행",
        "mean": ""
      },
      {
        "word": "銀色",
        "read": "은색",
        "mean": ""
      },
      {
        "word": "銀河",
        "read": "은하",
        "mean": ""
      },
      {
        "word": "銀貨",
        "read": "은화",
        "mean": ""
      },
      {
        "word": "銀賞",
        "read": "은상",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "은"
    ],
    "eumAliases": [
      "은"
    ]
  },
  {
    "h": "醫",
    "hun": "의원",
    "eum": "의",
    "words": [
      {
        "word": "醫師",
        "read": "의사",
        "mean": ""
      },
      {
        "word": "醫院",
        "read": "의원",
        "mean": ""
      },
      {
        "word": "醫學",
        "read": "의학",
        "mean": ""
      },
      {
        "word": "韓醫",
        "read": "한의",
        "mean": ""
      },
      {
        "word": "獸醫",
        "read": "수의",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "의원"
    ],
    "eumAliases": [
      "의"
    ]
  },
  {
    "h": "衣",
    "hun": "옷",
    "eum": "의",
    "words": [
      {
        "word": "衣服",
        "read": "의복",
        "mean": ""
      },
      {
        "word": "衣類",
        "read": "의류",
        "mean": ""
      },
      {
        "word": "白衣",
        "read": "백의",
        "mean": ""
      },
      {
        "word": "衣食住",
        "read": "의식주",
        "mean": ""
      },
      {
        "word": "更衣室",
        "read": "갱의실",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "옷"
    ],
    "eumAliases": [
      "의"
    ]
  },
  {
    "h": "者",
    "hun": "놈",
    "eum": "자",
    "words": [
      {
        "word": "記者",
        "read": "기자",
        "mean": ""
      },
      {
        "word": "讀者",
        "read": "독자",
        "mean": ""
      },
      {
        "word": "作者",
        "read": "작자",
        "mean": ""
      },
      {
        "word": "學者",
        "read": "학자",
        "mean": ""
      },
      {
        "word": "患者",
        "read": "환자",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "놈"
    ],
    "eumAliases": [
      "자"
    ]
  },
  {
    "h": "章",
    "hun": "글",
    "eum": "장",
    "words": [
      {
        "word": "文章",
        "read": "문장",
        "mean": ""
      },
      {
        "word": "章節",
        "read": "장절",
        "mean": ""
      },
      {
        "word": "勳章",
        "read": "훈장",
        "mean": ""
      },
      {
        "word": "樂章",
        "read": "악장",
        "mean": ""
      },
      {
        "word": "校章",
        "read": "교장",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "글"
    ],
    "eumAliases": [
      "장"
    ]
  },
  {
    "h": "在",
    "hun": "있을",
    "eum": "재",
    "words": [
      {
        "word": "現在",
        "read": "현재",
        "mean": ""
      },
      {
        "word": "存在",
        "read": "존재",
        "mean": ""
      },
      {
        "word": "在學",
        "read": "재학",
        "mean": ""
      },
      {
        "word": "在住",
        "read": "재주",
        "mean": ""
      },
      {
        "word": "不在",
        "read": "부재",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "있을"
    ],
    "eumAliases": [
      "재"
    ]
  },
  {
    "h": "定",
    "hun": "정할",
    "eum": "정",
    "words": [
      {
        "word": "決定",
        "read": "결정",
        "mean": ""
      },
      {
        "word": "約定",
        "read": "약정",
        "mean": ""
      },
      {
        "word": "固定",
        "read": "고정",
        "mean": ""
      },
      {
        "word": "定員",
        "read": "정원",
        "mean": ""
      },
      {
        "word": "安定",
        "read": "안정",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "정할"
    ],
    "eumAliases": [
      "정"
    ]
  },
  {
    "h": "朝",
    "hun": "아침",
    "eum": "조",
    "words": [
      {
        "word": "朝食",
        "read": "조식",
        "mean": ""
      },
      {
        "word": "朝鮮",
        "read": "조선",
        "mean": ""
      },
      {
        "word": "朝會",
        "read": "조회",
        "mean": ""
      },
      {
        "word": "王朝",
        "read": "왕조",
        "mean": ""
      },
      {
        "word": "早朝",
        "read": "조조",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "아침"
    ],
    "eumAliases": [
      "조"
    ]
  },
  {
    "h": "族",
    "hun": "겨레",
    "eum": "족",
    "words": [
      {
        "word": "家族",
        "read": "가족",
        "mean": ""
      },
      {
        "word": "民族",
        "read": "민족",
        "mean": ""
      },
      {
        "word": "一族",
        "read": "일족",
        "mean": ""
      },
      {
        "word": "親族",
        "read": "친족",
        "mean": ""
      },
      {
        "word": "王族",
        "read": "왕족",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "겨레"
    ],
    "eumAliases": [
      "족"
    ]
  },
  {
    "h": "晝",
    "hun": "낮",
    "eum": "주",
    "words": [
      {
        "word": "晝間",
        "read": "주간",
        "mean": ""
      },
      {
        "word": "晝夜",
        "read": "주야",
        "mean": ""
      },
      {
        "word": "白晝",
        "read": "백주",
        "mean": ""
      },
      {
        "word": "晝食",
        "read": "주식",
        "mean": ""
      },
      {
        "word": "晝行",
        "read": "주행",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "낮"
    ],
    "eumAliases": [
      "주"
    ]
  },
  {
    "h": "親",
    "hun": "친할",
    "eum": "친",
    "words": [
      {
        "word": "親友",
        "read": "친우",
        "mean": ""
      },
      {
        "word": "父親",
        "read": "부친",
        "mean": ""
      },
      {
        "word": "母親",
        "read": "모친",
        "mean": ""
      },
      {
        "word": "親切",
        "read": "친절",
        "mean": ""
      },
      {
        "word": "親族",
        "read": "친족",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "친할"
    ],
    "eumAliases": [
      "친"
    ]
  },
  {
    "h": "太",
    "hun": "클",
    "eum": "태",
    "words": [
      {
        "word": "太陽",
        "read": "태양",
        "mean": ""
      },
      {
        "word": "太平",
        "read": "태평",
        "mean": ""
      },
      {
        "word": "太古",
        "read": "태고",
        "mean": ""
      },
      {
        "word": "太子",
        "read": "태자",
        "mean": ""
      },
      {
        "word": "太平洋",
        "read": "태평양",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "클"
    ],
    "eumAliases": [
      "태"
    ]
  },
  {
    "h": "通",
    "hun": "통할",
    "eum": "통",
    "words": [
      {
        "word": "交通",
        "read": "교통",
        "mean": ""
      },
      {
        "word": "通信",
        "read": "통신",
        "mean": ""
      },
      {
        "word": "通行",
        "read": "통행",
        "mean": ""
      },
      {
        "word": "共通",
        "read": "공통",
        "mean": ""
      },
      {
        "word": "普通",
        "read": "보통",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "통할"
    ],
    "eumAliases": [
      "통"
    ]
  },
  {
    "h": "特",
    "hun": "특별할",
    "eum": "특",
    "words": [
      {
        "word": "特別",
        "read": "특별",
        "mean": ""
      },
      {
        "word": "特殊",
        "read": "특수",
        "mean": ""
      },
      {
        "word": "特技",
        "read": "특기",
        "mean": ""
      },
      {
        "word": "特徵",
        "read": "특징",
        "mean": ""
      },
      {
        "word": "特急",
        "read": "특급",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "특별할"
    ],
    "eumAliases": [
      "특"
    ]
  },
  {
    "h": "合",
    "hun": "합할",
    "eum": "합",
    "words": [
      {
        "word": "合計",
        "read": "합계",
        "mean": ""
      },
      {
        "word": "合格",
        "read": "합격",
        "mean": ""
      },
      {
        "word": "集合",
        "read": "집합",
        "mean": ""
      },
      {
        "word": "合唱",
        "read": "합창",
        "mean": ""
      },
      {
        "word": "結合",
        "read": "결합",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "합할"
    ],
    "eumAliases": [
      "합"
    ]
  },
  {
    "h": "行",
    "hun": "다닐",
    "eum": "행",
    "words": [
      {
        "word": "行動",
        "read": "행동",
        "mean": ""
      },
      {
        "word": "行事",
        "read": "행사",
        "mean": ""
      },
      {
        "word": "旅行",
        "read": "여행",
        "mean": ""
      },
      {
        "word": "通行",
        "read": "통행",
        "mean": ""
      },
      {
        "word": "行列",
        "read": "행렬",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "다닐"
    ],
    "eumAliases": [
      "행"
    ]
  },
  {
    "h": "向",
    "hun": "향할",
    "eum": "향",
    "words": [
      {
        "word": "方向",
        "read": "방향",
        "mean": ""
      },
      {
        "word": "向上",
        "read": "향상",
        "mean": ""
      },
      {
        "word": "向後",
        "read": "향후",
        "mean": ""
      },
      {
        "word": "傾向",
        "read": "경향",
        "mean": ""
      },
      {
        "word": "向學",
        "read": "향학",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "향할"
    ],
    "eumAliases": [
      "향"
    ]
  },
  {
    "h": "號",
    "hun": "이름",
    "eum": "호",
    "words": [
      {
        "word": "番號",
        "read": "번호",
        "mean": ""
      },
      {
        "word": "信號",
        "read": "신호",
        "mean": ""
      },
      {
        "word": "記號",
        "read": "기호",
        "mean": ""
      },
      {
        "word": "號室",
        "read": "호실",
        "mean": ""
      },
      {
        "word": "名號",
        "read": "명호",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "이름"
    ],
    "eumAliases": [
      "호"
    ]
  },
  {
    "h": "畫",
    "hun": "그림",
    "eum": "화",
    "words": [
      {
        "word": "圖畫",
        "read": "도화",
        "mean": ""
      },
      {
        "word": "畫家",
        "read": "화가",
        "mean": ""
      },
      {
        "word": "漫畫",
        "read": "만화",
        "mean": ""
      },
      {
        "word": "映畫",
        "read": "영화",
        "mean": ""
      },
      {
        "word": "油畫",
        "read": "유화",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "그림"
    ],
    "eumAliases": [
      "화"
    ]
  },
  {
    "h": "黃",
    "hun": "누를",
    "eum": "황",
    "words": [
      {
        "word": "黃色",
        "read": "황색",
        "mean": ""
      },
      {
        "word": "黃金",
        "read": "황금",
        "mean": ""
      },
      {
        "word": "黃土",
        "read": "황토",
        "mean": ""
      },
      {
        "word": "黃砂",
        "read": "황사",
        "mean": ""
      },
      {
        "word": "黃海",
        "read": "황해",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "누를"
    ],
    "eumAliases": [
      "황"
    ]
  },
  {
    "h": "訓",
    "hun": "가르칠",
    "eum": "훈",
    "words": [
      {
        "word": "訓練",
        "read": "훈련",
        "mean": ""
      },
      {
        "word": "訓民正音",
        "read": "훈민정음",
        "mean": ""
      },
      {
        "word": "敎訓",
        "read": "교훈",
        "mean": ""
      },
      {
        "word": "校訓",
        "read": "교훈",
        "mean": ""
      },
      {
        "word": "訓示",
        "read": "훈시",
        "mean": ""
      }
    ],
    "level": 4,
    "levelName": "6급",
    "grade": 6,
    "hunAliases": [
      "가르칠"
    ],
    "eumAliases": [
      "훈"
    ]
  }
];
window.Hanja={LIST,LEVELS:["8급", "7급Ⅱ", "7급", "6급Ⅱ", "6급"],BOUNDS:[50,100,150,225,300],BY:Object.fromEntries(LIST.map(x=>[x.h,x]))};
})();
