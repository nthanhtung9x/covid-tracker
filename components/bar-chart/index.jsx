import React, { useEffect, useState } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import * as Styles from './style';

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return parts.join(",");
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label" style={{ color: '#000', fontSize: '14px', textAlign: 'center'}}>{label}</p>
        <p className="desc" style={{ color: 'red', fontSize: '14px'}}>
            Ca nhiễm: {numberWithCommas(payload[0].value)}
        </p>
      </div>
    );
  }

  return null;
};

const ColumnChart = ({ data, type }) => {

  const [total, setTotal] = useState([]);

  const drawChart = (data, type) => {
    let result = [];
    if (type === 'total') {
      let rs = data?.covidDataProvince?.cases.sort((a,b) => b.z - a.z);
      result = rs.slice(0, 5).map(item => {
        const custom = {
          name: item.x,
          'Ca nhiễm' : +item.z,
        }
        return custom;
      });
    } else {
      let rs = data?.covidDataProvince?.cases.sort((a,b) => b.y - a.y);
      result = rs.slice(0, 5).map(item => {
        const custom = {
          name: item.x,
          'Ca nhiễm' : +item.y,
        }
        return custom;
      });
    }

    setTotal([
      ...result,
    ])
  }

  useEffect(() => {
    if(data) {
      drawChart(data, type);
    }
  }, [type, data]);

    return (
      <Styles.ChartWrapper>
        <BarChart
            width={400}
            height={300}
            data={total}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip/>}/>
            <Bar dataKey="Ca nhiễm" name="Ca nhiễm" fill="#FF6666" />
        </BarChart>
      </Styles.ChartWrapper>
    )
}

export default ColumnChart
