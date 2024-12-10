import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState({ array1: [], array2: [] });

    useEffect(() => {
        // Fetch data from the backend
        fetch('http://localhost:5000/api/data')
            .then(response => response.json())
            .then(receivedData => setData(receivedData))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Data from Backend</h1>
            <h2>Array 1:</h2>
            <ul>
                {data.array1.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            <h2>Array 2:</h2>
            <ul>
                {data.array2.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;