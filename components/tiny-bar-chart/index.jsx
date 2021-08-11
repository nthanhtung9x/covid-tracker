import React, { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import * as Styles from './style';

function formatDate (input) {
  var datePart = input.match(/\d+/g),
  year = datePart[0].substring(2), // get only two digits
  month = datePart[1], day = datePart[2];

  return day+'/'+month;
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label" style={{ color: '#000', fontSize: '14px'}}>{`Ngày: ${label}`}</p>
        <p className="desc" style={{ color: 'red', fontSize: '14px'}}>
            Ca nhiễm: {numberWithCommas(payload[0].value)}
        </p>
      </div>
    );
  }

  return null;
};

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return parts.join(",");
}

const TinyChart = ({ data, time }) => {
  const [total, setTotal] = useState([]);
  const drawChart = (time) => {
    const result = data?.vnSeason4Daily?.cases?.slice(-time).map(item => {
      const custom = {
        name: `${formatDate(item.x)}`,
        'Ca nhiễm' : +item.y,
      }
      return custom;
    });

    setTotal([
      ...result,
    ])
  }

  useEffect(() => {
    drawChart(time);
  }, [time]);
  
  return (
    <Styles.ChartWrapper>
      <BarChart 
        width={400} 
        height={300} 
        data={total}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />}/>
        <Bar dataKey="Ca nhiễm" name="Ca nhiễm"  fill="#FF6666" />
      </BarChart>
    </Styles.ChartWrapper>
  )
}

export default TinyChart;