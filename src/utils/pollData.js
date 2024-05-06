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
    labels: ["Chan's Peking", "Five Guys", "Golden Buddha", "Athena", "Gymkhana","Hudson & Packard", "Mexicali Blue", "Rossi's Deli", "Sushi Village", "Tamarind"],
    datasets: [
        {
            label: "# of Votes",
            names: ['test'],
            data: [0,0,0,0,0,0,0,0,0,0],
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1       
        }  ,      
    ]
}

function updateData(index){
   return pollData.datasets[0].data[index]++
}

export {pollData ,updateData};
