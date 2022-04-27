const quotes=[
    {
        quote:'I want to enjoy things and have fun and live like every day is the laast day.',
        movie:'The Last Time I Saw Paris, 1953',
    },
    {
        quote:'Carpe diem. Seize the day boys. Make you lives extraordinary',
        movie:'죽은 시인의 사회',
    },
    {
        quote:"That's what I love about music. All these banalities suddenly turn into beautiful pearls",
        movie:'begin again' ,
    },
    {
        quote:"Today's special moments are tomorrow's memories.",
        movie:'about time',
    },
    {
        quote:"I tried to live everyday as if it was the final day of my extraordinary, ordinary life",
        movie:'about time',
    },
    {
        quote:"Some people are worth melting for",
        movie:'Frozen',
    },
    {
        quote:"Man's feelings are always purest and most glowing in the hour of meeting and of farewell.",
        movie: "by. Jean Paul Richter",
    },
    {
        quote:"It is not our abilities that show what we truly are, it is our choices ",
        movie:"Dumbledore, Harry Potter",
    },
    {
        quote:"The past can hurt, but you can either run from it, or learn from it",
        movie:"Lion King",
    },
    {
        quote:"Every man dies, not every man really lives",
        movie:"Braveheart",
    },
]
const todaysQuote=Math.floor(Math.random()*quotes.length); // 0~quotes.length-1 까지의 수를 랜덤으로 뽑아옴.

const quote= document.querySelector("#quote span:first-child");
quote.innerHTML=quotes[todaysQuote].quote;

const author=document.querySelector("#quote span:last-child");
author.innerHTML=`- ${quotes[todaysQuote].movie} -`;