import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('Data from API:', response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main className="main-content">
      {data.map(item => (
        <div key={item.id} className="card">
          <h3>{item.name}</h3>
          <p>{item.username}</p>
        </div>
      ))}
    </main>
  );
};

export default MainContent;
