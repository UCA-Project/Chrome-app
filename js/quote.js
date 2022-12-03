let quote = document.querySelector("#quote")
let author = document.querySelector("#author")

let quotes = [
    {
        quote: "대한민국 화이팅",
        author: "이강인"
    },
    {
        quote: "중요한건 꺾이지 않는 마음",
        author: "DEFT"
    },
    {
        quote: "브라질도 이겨보자",
        author: "손흥민"
    },
    {
        quote: "포르투칼도 화이팅",
        author: "크리스티아누 호날두"
    }
]

let randomNumber = Math.floor(Math.random() * quotes.length)

let chosenQuote = quotes[randomNumber]
console.log(chosenQuote)

quote.innerText = chosenQuote.quote;
author.innerText =  chosenQuote.author;