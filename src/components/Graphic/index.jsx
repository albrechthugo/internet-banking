import React from 'react';

import './styles.css';

import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const Graphic = () => {
  const data = [
    {
      name: 'Transação 1',
      Entrada: 10500,
      Saída: 2600
    },
    {
      name: 'Transação 2',
      Entrada: 0,
      Saída: 2600
    },
    {
      name: 'Transação 3',
      Entrada: 0,
      Saída: 2600
    },
    {
      name: 'Transação 4',
      Entrada: 10500,
      Saída: 2600
    },
    {
      name: 'Transação 5',
      Entrada: 0,
      Saída: 2600
    },
    {
      name: 'Transação 6',
      Entrada: 0,
      Saída: 2600
    }
  ];

  return (
    <section className="graphic__wrapper">
      <h1>
        Movimentação da conta
      </h1>

      <BarChart 
            width={600} 
            height={300} 
            data={data}
            className="dashboard__graphic"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="Entrada" 
              fill="#04D361" 
            />
            <Bar 
              dataKey="Saída" 
              fill="#f22" 
            />
          </BarChart>
    </section>  
  );
};

export default Graphic;