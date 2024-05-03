import { color } from "chart.js/helpers";




const backgroundColors= [
    'rgba(255, 89, 94, .6)',
    'rgba(255, 146, 76, .6)',
    'rgba(255, 202, 58, .6)',
    'rgba(197, 202, 48, .6)',
    'rgba(138, 201, 38, .6)',
    'rgba(54, 148, 157, .6)',
    'rgba(25, 130, 196, .6)',
    'rgba(66, 103, 172, .6)',
    'rgba(86, 90, 160, .6)',
    'rgba(106, 76, 147, .6)'
]
;

const borderColors= [
    'rgba(255, 89, 94, 1)',
    'rgba(255, 146, 76, 1)',
    'rgba(255, 202, 58, 1)',
    'rgba(197, 202, 48, 1)',
    'rgba(138, 201, 38, 1)',
    'rgba(54, 148, 157, 1)',
    'rgba(25, 130, 196, 1)',
    'rgba(66, 103, 172, 1)',
    'rgba(86, 90, 160, 1)',
    'rgba(106, 76, 147, 1)'
    ];


const pollData = {
    labels: ["Chan's Peking", "Five Guys","Greek", "Gymkhana","Hudson & Packard", "Mexicali Blue", "Rossi's Deli", "Sushi Village", "Tamarind"],
    datasets: [
        {
            label: "# of Votes",
            data: [10,1,2,3,4,5,6,7,8],
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1       
        }         
    ]
}

export default pollData;

/*"image": {
    "src": "../src/assets/poll-images/chinese.png",
    "alt": "Bowl of general tsos chicken surrounded by broccoli"
}
},
{
"image": {
    "src": "../src/assets/poll-images/five-guys.png",
    "alt": "Five guys cheeseburger, fries and milkshake"
}
},
{
"image": {
    "src": "../src/assets/poll-images/Greek.png",
    "alt": "Close up of a gyro sandwich"
}
},
{
"image": {
    "src": "../src/assets/poll-images/Gymkhana.png",
    "alt": "Man looking at blown up spread of indian food."
}
},
{
"image": {
    "src": "../src/assets/poll-images/pizza.png",
    "alt": "Zoom in angle shot of pesto and cheese pizza."
}
},
{
"image": {
    "src": "../src/assets/poll-images/mexican.png",
    "alt": "A burrito cut in half with one half leaning on the other."
}
},
{
"image": {
    "src": "../src/assets/poll-images/rossis.png",
    "alt": "Chick parmesan sandwich on muffaletta bread, cut into four slices with one slice removed."
}
},
{
"image": {
    "src": "../src/assets/poll-images/sushi.png",
    "alt": "Angled rectangular plate filled with sushi topped with avocado and tobiko."
}
},
{
"image": {
    "src": "../src/assets/poll-images/tamarind.png",
    "alt": "Bowl of orange curry with the Tamarind logo on the bowl handle."
}
}*/