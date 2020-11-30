import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';


const data = [
  {
    name: 'Lundi', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Mardi', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Mercredi', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Jeudi', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Vendredi', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Samedi', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Dimanche', uv: 3490, pv: 4300, amt: 2100,
  },
];

class simpleLineGraph extends React.PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <div className="content">
        
        <LineChart
          width={500}
          height={200}
          data={data}

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </LineChart>


      </div>
    );
  }
}
export default simpleLineGraph ;