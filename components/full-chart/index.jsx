import React, { useEffect, useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import * as Styles from './style';

function formatDate (input) {
  var datePart = input.match(/\d+/g),
  year = datePart[0].substring(2), // get only two digits
  month = datePart[1], day = datePart[2];

  return day+'/'+month;
}

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return parts.join(",");
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

const FullChart = ({ data, time }) => {
  const [total, setTotal] = useState([]);
  const drawChart = (list) => {
    let result = [];
    console.log(list);

    if(time) {
      result = list?.vnSeason4Daily?.cases?.slice(-time).map((item, index) => {
        const total = list?.vnSeason4Daily?.cases?.slice(0, list?.vnSeason4Daily?.cases?.length - (time - index) + 1).reduce((rs, child) => {
          return rs += child.y;
        }, 0);
        const custom = {
          name: `${formatDate(item.x)}`,
          'Ca nhiễm' : +total,
        }
        return custom;
      })
    } else {
      result = list?.vnSeason4Daily?.cases?.slice(-time).map((item, index) => {
        const total = list?.vnSeason4Daily?.cases?.slice(0, index).reduce((rs, child) => {
          return rs += child.y;
        }, 0);
        const custom = {
          name: `${formatDate(item.x)}`,
          'Ca nhiễm' : +total,
        }
        return custom;
      })
    }
    console.log(result);

    setTotal([
      ...result,
    ])
  }

  useEffect(() => {
    drawChart(data);
  }, [data, time]);
  
  return (
    <Styles.ChartWrapper>
      <AreaChart
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
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip content={<CustomTooltip/>}/>
        
        <Area type="monotone" dataKey="Ca nhiễm" name="Ca nhiễm" stroke="red" fill="red" />
      </AreaChart>
    </Styles.ChartWrapper>
  )
}

export default FullChart