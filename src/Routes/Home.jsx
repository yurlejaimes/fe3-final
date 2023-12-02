import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../Components/context/global.context';
import Card from '../Components/Card';

const Home = () => {
  const [users, setUsers] = useState([]);
  const { state } = useGlobalContext();
  useEffect(() => {
    // Lógica para obtener datos de la API y actualizar 'users'
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const bodyClass = `${state.darkMode ? 'dark-app-container' : 'app-container'}`;

  return (
    <div className={bodyClass}>
    <div className="card-container">
      <h2>Odontologos</h2>
      <div>
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
    </div>
  );
 
};

export default Home;
