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
        quote: "오늘 하루도 수고했어",
        author: "w.j LEE"
    },
    {
        quote: "Hype Boy",
        author: "NEWjeans"
    }
]
let randomNumber = Math.floor(Math.random() * quotes.length)

let chosenQuote = quotes[randomNumber]
quote.innerText = chosenQuote.quote;
author.innerText = chosenQuote.author;