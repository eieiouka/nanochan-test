export const questions = [
  {
    id: 1,

    title: "第1問",

    layout: "single-input",

    story:
      "エマはサイコロを使って、正方形を作ろうとしています。",

    question:
      "（1）一辺のサイコロが7個のとき、サイコロは全部でいくつ？",

    answer: 49,

    answerLabel: "合計",

    answerUnit: "個",
  },

  {
    id: 2,

    title: "第2問",

    layout: "single-input",

    story:
      "エマはサイコロを使って、正方形を作ろうとしています。",

    question:
      "（2）サイコロが169個あるとき、一辺のサイコロはいくつ？",

    answer: 13,

    answerLabel: "一辺",

    answerUnit: "個",
  },

  {
    id: 3,

    title: "第3問",

    layout: "formula-inputs",

    story:
      "エマとハンナは、2人で正方形を作ろうとしています。",

    question:
      "100個のサイコロを使うとき、それぞれ何個ずつ使う？（順不同）",

    formula: [
      {
        label: "エマ：",
        unit: "個",
      },

      {
        label: "ハンナ：",
        unit: "個",
      },
    ],

    answers: [6, 8],

    answerOrder: "any",
  },

  {
    id: 4,

    title: "第4問",

    layout: "single-input",

    story:
      "",

    question:
      "ハンナ「ピッタリ正方形が2つできましたわね。サイコロがいくつでも作れるんじゃなくて？\nエマ「ちょっと待ってハンナちゃん。絶対に作れないサイコロの個数があるよ。それは…",

    answer: 3,

    answerLabel: "4で割ったあまりが",

    answerUnit: "のとき",
  },
];