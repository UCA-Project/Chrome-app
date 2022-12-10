let quote = document.querySelector("#quote")
let author = document.querySelector("#author")

let quotes = [
    {
        quote: "대한민국 화이팅",
        author: "h.m SON"
    },
    {
        quote: "중요한건 꺾이지 않는 마음",
        author: "DEFT"
    },
    {
        quote: "저기 저...",
        author: "뉴진스의 HYPE BOY요!"
    }
]
let randomNumber = Math.floor(Math.random() * quotes.length)

let chosenQuote = quotes[randomNumber]
quote.innerText = chosenQuote.quote;
author.innerText = chosenQuote.author;