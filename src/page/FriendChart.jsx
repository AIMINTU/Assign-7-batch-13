import React, { use } from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
const FriendPromise = fetch('/friends.json').then(res => res.json())
const FriendChart = () => {
    const Friends = use(FriendPromise)
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey="id" data={Friends} fill="#8884d8" label />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FriendChart;