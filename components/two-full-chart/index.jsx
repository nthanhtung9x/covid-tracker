import React, { useEffect, useState } from 'react'
import * as Styles from './style';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
      <div className="custom-tooltip" style={{ textAlign: 'center'}}>
        <p className="label" style={{ color: '#000', fontSize: '14px'}}>{`Ngày: ${label}`}</p>
        <p className="desc" style={{ color: 'red', fontSize: '14px'}}>
          Đã tiêm mũi 1: {numberWithCommas(payload[0].payload.x)}
        </p>
        <p className="desc" style={{ color: 'red', fontSize: '14px'}}>
          Đã tiêm mũi 2: {numberWithCommas(payload[0].payload.y)}
        </p>
      </div>
    );
  }

  return null;
};

const TwoFullChart = ({ data, type }) => {
  const [total, setTotal] = useState([]);
  const drawChart = (list) => {
    let result = [];

    if(type) {
      result = list?.first?.datas?.map((item, index) => {
        const total1 = list?.first?.datas[index]?.z;
        const total2 = list?.second?.datas[index]?.z;
        const custom = {
          name: `${formatDate(item.x)}`,
          x : +total1,
          y: +total2,
        }
        return custom;
      })
    } else {
      result = list?.first?.datas?.map((item, index) => {
        const total1 = list?.first?.datas[index]?.y;
        const total2 = list?.second?.datas[index]?.y;
        const custom = {
          name: `${formatDate(item.x)}`,
          x : +total1,
          y: +total2,
        }
        return custom;
      })
    }

    setTotal([
      ...result,
    ])
  }

  useEffect(() => {
    if(data) {
      drawChart(data);
    }
  }, [data, type]);
  
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip/>}/>
        <Area type="monotone" dataKey="x" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="y" stackId="2" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </Styles.ChartWrapper>
  )
}

export default TwoFullChart