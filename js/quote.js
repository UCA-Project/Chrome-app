let quotes=[
    {
        quote:"",
        author:""
    },
    {
        quote:"",
        author:""
    },
    {
        quote:"",
        author:""
    },
    {
        quote:"",
        author:""
    }
]
let quote = document.querySelector("#quote")
let author = document.querySelector("#author")

let randomIndex = Math.floor(Math.random() * quotes.length)

let todayQuote
