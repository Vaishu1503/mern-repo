import React, { useEffect, useState } from "react";
import './WaterDistribution.css';

const generateWaterData = () => {
    const dailyDistribution = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // Random between 10 and 20 Litres
    const daysDistributed = Math.floor(Math.random() * (31 - 25 + 1)) + 25; // Random between 25 and 31 days
    const monthlyDistribution = dailyDistribution * daysDistributed; // Calculate based on daily distribution
    const flowRate = ["Normal", "High", "Low"][Math.floor(Math.random() * 3)]; // Random flow rate

    return {
        dailyDistribution: `${dailyDistribution} Litres`,
        monthlyDistribution: `${monthlyDistribution} Litres`,
        daysDistributed,
        flowRate
    };
};

const WaterDistribution = () => {
    const [waterData, setWaterData] = useState({});

    useEffect(() => {
        const data = generateWaterData();
        setWaterData(data);
    }, []);

    return (
        <div className="water-distribution">
            <header className="header">
                <img src="logo.png" alt="Logo" className="logo" />
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/login">Login</a>
                    <a href="/payment">Payment</a>
                </nav>
            </header>
            
            <div className="content" style={{ backgroundImage: "url('../public/background.png')" }}>
                <div className="water-details">
                    <h2>WATER USAGE DETAILS</h2>
                    <ul>
                        <li><strong>Water Distributed Per Day:</strong> {waterData.dailyDistribution}</li>
                        <li><strong>Water Distributed Per Month:</strong> {waterData.monthlyDistribution}</li>
                        <li><strong>Number of Days Distributed:</strong> {waterData.daysDistributed} Days</li>
                        <li><strong>Flow Rate:</strong> {waterData.flowRate}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WaterDistribution;
