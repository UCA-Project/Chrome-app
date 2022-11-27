let quotes = [
    {
        quote: "화이팅",
        author: "이원준"
    },
    {
        quote: "중요한건 "
    }
]


let quote = document.querySelector("#quote")
let author = document.querySelector("#author")

let randomIndex = Math.floor(Math.random() * quotes.length)

let todayQuote = quotes[randomIndex]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author