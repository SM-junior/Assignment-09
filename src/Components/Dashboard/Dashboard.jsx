import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            name: 'Assignment-1',
            uv: 50,
            pv: 0,
            amt: 60,
        },
        {
            name: 'Assignment-2',
            uv: 60,
            pv: 0,
            amt: 60,
        },
        {
            name: 'Assignment-3',
            uv: 60,
            pv: 0,
            amt: 60,
        },
        {
            name: 'Assignment-4',
            uv: 60,
            pv: 0,
            amt: 60,
        },
        {
            name: 'Assignment-5',
            uv: 45,
            pv: 0,
            amt: 60,
        },
        {
            name: 'Assignment-6',
            uv: 58,
            pv: 0,
            amt: 60,
        },
        {
            name: 'Assignment-7',
            uv: 60,
            pv: 0,
            amt: 60,
        },
    ];
    return (
        <div>
            <div className='flex items-center justify-center px-5'>
                <AreaChart
                    width={700}
                    height={250}
                    data={data}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
            <h4 className='mt-5'>Fig: Seven assignment marks of this course</h4>
        </div>
    );
};

export default Dashboard;