import React from 'react';
import { useGlobalContext } from '../Components/context/global.context';
import Card from '../Components/Card';

const Favs = () => {
  const { state } = useGlobalContext();
  const bodyClass = `${state.darkMode ? 'dark-app-container' : 'app-container'}`;

  return (
    <div className={bodyClass}>
    <div>
      <h2>Favoritos</h2>
      <div className="card-container">
        {state.favorites.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Favs;
