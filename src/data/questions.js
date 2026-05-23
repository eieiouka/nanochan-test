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
    },

    {
    id: 6,

    title: "第6問",

    layout: "select",

    story:
        "なにやら、エマが法則を見つけたようです。",

    question:
        "ハンナ「割り算…ですの？」\nエマ「そう、この数で割ってみれば、法則が見えるんじゃないかな。」",
        
    choices: [
        "2",
        "3",
        "4",
        "5",
    ],

    answer: "4",
    },

    {
    id: 7,

    title: "第7問",

    layout: "select",

    question:
        "ハンナ「積み木の数を4で割るんですの？」\nエマ「うん。3,7,11,15,19個のときには正方形を作れなかったよね。これって全部、4で割ったときの＿が一緒なんだ。」",
        
    choices: [
        "商",
        "あまり",
    ],

    answer: "あまり",
    },

    {
        id: 8,

        title: "第8問",

        layout: "formula-inputs",

        question:
        "ハンナ「本当ですわ、あまりが全部3ですわ！…でも、どうしてなんですの？」\nエマ「一つの正方形のあまりを考えればわかるよ、ハンナちゃん。4で割ったあまりは＿か＿しかない。だから、合わせても3にはならないんだよ。」",

        formula: [
        {
            label: "",
            unit: "",
        },

        {
            label: "または",
            unit: "",
        },
        ],

        answers: [0, 1],

        answerOrder: "any",
    },

    {
        id: 9,

        title: "第9問",

        layout: "select",

        question:
            "ハンナ「さすがですわ、エマさん。4で割ったあまりが3の個数なら、2つ以内の正方形にできないんですのね。」\nエマ「ちょっと待って！ハンナちゃん、その考えには＿があるんじゃないかな？」",
            
        choices: [
            "矛盾",
            "例外",
            "不足",
        ],

        answer: "不足",
    },

    {
        id: 10,

        title: "第10問",

        layout: "select",

        question:
        "ハンナ「不足…ですの？」\nエマ「うん。たとえば6個のときって、4で割ったあまりは2だけど、2つ以内の正方形にできないでしょ？」\n「本当ですわ、他にもいっぱいありますわ！」\n「そう、つまり＿の倍数のときが不足してるんだよ。」",

        choices: [
            "2",
            "3",
            "6",
        ],

        answer: "3",
    },

    {
        id: 11,

        title: "第11問",

        layout: "formula-inputs",

        question:
        "ハンナ「不思議ですわ、どうしてなんですの？」\nエマ「1つの正方形につまってる積み木の数を、今度は3で割ってみて。」\nハンナ「あまりが0と1しかないですわ…！」\nエマ「そう、だから合わせて3の倍数になるのは、あまりが＿と＿のときだけなんだ。」",

        formula: [
        {
            label: "",
            unit: "",
        },

        {
            label: "と",
            unit: "",
        },
        ],

        answers: [0, 0],

        answerOrder: "any",
    },

    {
        id: 12,

        title: "第12問",

        layout: "single-input",

        question:
        "ハンナ「つまり、どういうことですの？」\nエマ「両方とも正方形なことを思い出して。あまりが0ってことは3の倍数…いや、＿の倍数なんだよ。」",

        answer: 9,

        answerLabel: "積み木",

        answerUnit: "の倍数",
    },

    {
        id: 10,

        title: "第10問",

        layout: "select",

        question:
        "エマ「つまり、3の倍数かつ9の倍数でない個数では、2つ以内の正方形を作れないんだよ、ハンナちゃん。」\nハンナ「すごい発見ですわ…！でもエマさん、27の倍数のときはどうなんですの？」\nエマ「9個ずつの積み木を合体させて、3×3の正方形にしようよ。全体を9で割るから、27の倍数は正方形に＿はずだよ。",

        choices: [
            "できる",
            "できない",
        ],

        answer: "3",
    },
];