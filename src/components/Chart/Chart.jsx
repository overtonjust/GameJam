// Tools
import { useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, getDatasetAtEvent } from 'react-chartjs-2';
import {backgroundColors, borderColors}  from '../../utils/chartColors';


ChartJS.register(ArcElement, Tooltip, Legend);


function Chart(props) {
    const {data} = props;
    const chartRef = useRef(null);

   

    const pollData = {
        labels: ["Chan's Peking", "Five Guys", "Golden Buddha", "Athena", "Gymkhana","Hudson & Packard", "Mexicali Blue", "Rossi's Deli", "Sushi Village", "Tamarind"],
        datasets: [
            {
                label: "# of Votes",
                names: ['test'],
                data: data,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1       
            }  ,      
        ]
    }
    
    return (
        <Pie ref={chartRef}  data={pollData} />
    )
}

export default Chart;