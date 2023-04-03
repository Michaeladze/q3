import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const CustomLineChart = ({ color }) => {

  const data = [
    {
      name: '10:00',
      pv: randomIntFromInterval(70, 100),
      amt: randomIntFromInterval(70, 100),
    },
    {
      name: '11:00',
      pv: randomIntFromInterval(70, 100),
      amt: randomIntFromInterval(70, 100),
    },
    {
      name: '12:00',
      pv: randomIntFromInterval(70, 100),
      amt: randomIntFromInterval(70, 100),
    },
    {
      name: '13:00',
      pv: randomIntFromInterval(70, 100),
      amt: randomIntFromInterval(70, 100),
    },
    {
      name: '14:00',
      pv: randomIntFromInterval(70, 100),
      amt: randomIntFromInterval(70, 100),
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="pv" stroke={color} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
