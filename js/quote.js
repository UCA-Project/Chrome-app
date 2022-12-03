let quote = document.querySelector('#quote')
let author = document.querySelector('#author')

let quotes = [
    {
        quote: "화이팅",
        author: "최승우"
    },
    {
        quote: "고생했어",
        author: "choi"
    },
    {
        quote: "중요한건 꺾이지 않는 마음",
        author: "deft"
    },
    {
        quote: "대한민국 화이팅",
        author: "손흥민"
    }
]

let randomIndex = Math.floor(Math.random()*quotes.length)

let randomQuote = quotes[randomIndex]

quote.innerText = randomQuote.quote
author.innerText = randomQuote.author