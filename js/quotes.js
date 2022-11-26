let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

let quotes = [
  {
    quote: "삶이 있는한 희망은 있다.",
    author: "키케로",
  },
  {
    quote: "피할수 없으면 즐겨라.",
    author: "로버트 엘리엇",
  },

  {
    quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
    author: "제임스 딘 ",
  },
  {
    quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
    author: "나폴레옹",
  },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
    author: "괴테",
  },
];

let randomIndex = Math.floor(Math.random() * quotes.length);
let randomQuote = quotes[randomIndex];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
