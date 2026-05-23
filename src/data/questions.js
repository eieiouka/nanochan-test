export const questions = [
  {
    id: 1,

    title: "第1問",

    layout: "single-input",

    story:
      "エマは正方形の積み木を使って、正方形を作ろうとしています。",

    question:
      "（1）一辺の積み木が7個のとき、積み木は全部でいくつ？",

    answer: 49,

    answerLabel: "合計",

    answerUnit: "個",
  },

  {
    id: 2,

    title: "第2問",

    layout: "single-input",

    story:
      "エマは正方形の積み木を使って、正方形を作ろうとしています。",

    question:
      "（2）積み木が100個あるとき、一辺の積み木はいくつ？",

    answer: 10,

    answerLabel: "一辺",

    answerUnit: "個",
  },

  {
    id: 3,

    title: "第3問",

    layout: "formula-inputs",

    story:
      "エマはハンナと協力して、2つの正方形を作ることにしました。",

    question:
      "積み木が41個のとき、それぞれの一辺は？（順不同）",

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

    answers: [4, 5],

    answerOrder: "any",
  },

  {
    id: 4,

    title: "第4問",

    layout: "single-input",

    story:
      "エマとハンナの2人は、協力して正方形を作る遊びにハマったようです。",

    question:
      "ハンナ「2人いれば、積み木の数がいくつでも作れるんじゃなくて？\nエマ「ちょっと待ってハンナちゃん。10個以内でも作れない組み合わせが＿通りあるよ。",

    answer: 3,

    answerLabel: "組み合わせ",

    answerUnit: "通り",
  },
];