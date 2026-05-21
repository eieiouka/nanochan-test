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
      "100個のサイコロを、\n2人で分けて正方形を作ろう。",

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
];