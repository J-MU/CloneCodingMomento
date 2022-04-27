const images=[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
]


const currentBackgroudIndex=Math.floor(Math.random()*images.length);

const backGroundImagTag=document.createElement('img');

console.log(backGroundImagTag);
backGroundImagTag.src=`image/${images[currentBackgroudIndex]}`;
backGroundImagTag.id="background";
console.log(backGroundImagTag.src);
document.body.appendChild(backGroundImagTag);