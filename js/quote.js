let quotes = [
    {
        quote: "화이팅",
        author: "이원준"
    },
    {
        quote: "중요한건 꺾이지 않는 마음",
        author: "DEFT"
    },
    {
        quote: "대한민국 화이팅",
        author: "손흥민"
    },
    {
        quote: "안녕",
        author: "월드컵"
    }
]

let quote = document.querySelector("#quote")
let author = document.querySelector("#author")

let randomIndex = Math.floor(Math.random() * quotes.length)

let todayQuote = quotes[randomIndex]
//{quote:"안녕", author:"월드컵"}

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author