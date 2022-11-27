let quotes = [
    {
        quote: "WAWN",
        quote: "신류진"
    },
    {
        quote: "중요한건 꺾이지 않는 마음",
        quote: "DEFT"
    },
    {
        quote: "대한민국 화이팅",
        quote: "손흥민"
    },
    {
        quote: "안녕",
        quote: "월드컵"
    },
]

let quote =  document.querySelector("#quote")
let author =  document.querySelector("#author")

let randomIndex = Math.floor(Math.random()*quotes.length)

let todayQuote = quotes[randomIndex]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author