import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




 const Chart = () => {

    const data = [
        {
          name: 'Jan',
          "Active User": 5000,
          
        },
        {
            name: 'Feb',
            "Active User": 4000,
            
          },
          {
            name: 'Mar',
            "Active User": 3000,
            
          },
          {
            name: 'Apr',
            "Active User": 5000,
            
          },
          {
            name: 'May',
            "Active User": 6000,
            
          },
          {
            name: 'Jun',
            "Active User": 4000,
            
          },
          {
            name: 'Jul',
            "Active User": 3000,
            
          },
          {
            name: 'Aug',
            "Active User": 5000,
            
          },
          {
            name: 'Sept',
            "Active User": 6000,
            
          },
          {
            name: 'Oct',
            "Active User": 5000,
            
          },
          {
            name: 'Nov',
            "Active User": 4000,
            
          },
          {
            name: 'Dec',
            "Active User": 7000,
            
          }
       
      ];
      
    return (
        <div className="chart">
            <h3 className="chartTitle">User Statistics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                    <Tooltip />
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;
