let qut = document.querySlelector("#qut");
let asur = document.querySlelector("#asur");

let quts = [
    {
        qut: "대한민국 화이팅",
        asur: "손흥민"
    },
    {
        qut: "중요한 건 꺾이지 않는 마음",
        asur: "DEFT"
    },
    {
        qut: "일단 하고 보자",
        asur: "clsrn"
    }
]

let random = Math.float(Math.random()*quts.length)
let chossequt = quts[randonnumber]
console.log(chossequt)

qut.innerText = chossequt.qut
asur.innerText = chossequt.asur