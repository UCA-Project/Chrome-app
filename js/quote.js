let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

let quotes = [
    {
        quote: "대한민국 화이팅",
        author: "손흥민",
    },

    {
        quote: "중요한건 꺾이지 않는 마음",
        author: "DEFT",
    },

    {
        quote: "오늘 하루도 수고했어",
        author: "이원준"
    },

    {
        quote: "Attention",
        author: "뉴진스"
    }
]

let randomNumber = Math.floor(Math.random() * quotes.length)
let chosenQuote = quotes[randomNumber]
console.log(chosenQuote)

quote.innerText = chosenQuote.quote
author.innerText = chosenQuote.author