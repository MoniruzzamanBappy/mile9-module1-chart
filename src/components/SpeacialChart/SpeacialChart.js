import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Cell } from 'recharts';
import { XAxis } from 'recharts';
import { YAxis } from 'recharts';
import { Tooltip } from 'recharts';
import { Legend } from 'recharts';

const SpeacialChart = () => {
    const [phones, setPhones] = useState([])

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const loadData = data.data.data;
            const phoneData = loadData.map(phone=>{
                const parts = phone.slug.split('-');
                const ph = {
                    name: parts[0],
                    value: parseInt(parts[1])
                }
                return ph;
            })
            setPhones(phoneData);
        })
    },[])
    return (
        <BarChart width={1300} height={800} data={phones}>
            <Bar dataKey="value"  fill="#b09345"></Bar>
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          </BarChart>
    );
};

export default SpeacialChart;