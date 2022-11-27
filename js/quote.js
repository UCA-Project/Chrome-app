let quotes = [
    {
        quote : "김근육",
        author : "wall su"
    },
    {
        quote : "니 주제를 아세요",
        author : "소크라테스"
    },
    {
        quote : "천제는 50%의 천과 50%의 제로 이루어진다.",
        author : "토마스 에디슨과 친구들"
    }
]


let quote = document.querySelector("#quote")
let author = document.querySelector("#author")

let randomIndex = Math.floor(Math.random() * quotes.length)

let todayQuote  = quotes[randomIndex]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author