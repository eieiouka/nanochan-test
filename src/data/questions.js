export const questions = [
  {
    id: 1,

    title: "第1問",

    layout: "single-input",

    story:
      "エマは正方形の積み木を使って、大きな正方形を作ろうとしています。",

    question:
      "（1）一辺の積み木が4個のとき、積み木は全部でいくつ？",

    answer: 16,

    answerLabel: "合計",

    answerUnit: "個",
  },

  {
    id: 2,

    title: "第2問",

    layout: "single-input",

    story:
      "エマは正方形の積み木を使って、大きな正方形を作ろうとしています。",

    question:
      "（2）積み木が49個あるとき、一辺の積み木はいくつ？",

    answer: 7,

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
      "積み木が41個のとき、それぞれの一辺は？（順番はどちらでもOK）",

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
      "ハンナ「2人いれば、積み木の数がいくつでも作れるんじゃなくて？（1人で作ってもOK）」\nエマ「ちょっと待ってハンナちゃん。20個以内でも作れない組み合わせが＿通りあるよ。」",

    answer: 8,

    answerLabel: "合計",

    answerUnit: "通り",
  },

    {
    id: 5,

    title: "第5問",

    layout: "select",

    story:
      "エマとハンナは、作れない個数に法則がないか考えています。",

    question:
        "ハンナ「本当ですわ。3個とか7個のときは作れねーですわ。」\n「他も考えてみようよ。…待ってハンナちゃん、これが使えるんじゃないかな？」",

    choices: [
        "足し算",
        "引き算",
        "掛け算",
        "割り算",
    ],

    answer: "割り算",
    }
];