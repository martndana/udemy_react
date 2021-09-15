import React from 'react'
import './Chart.css'
import Bar from './Bar/Bar';
const Chart = ({ dataPoints }) => {

    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {dataPoints.map(dataPoint => <Bar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />)}
        </div>
    )
}

export default Chart
