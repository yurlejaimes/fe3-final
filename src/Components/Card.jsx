import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context/global.context';
import DoctorImage from '../../public/images/doctor.jpg';

const Card = ({ user }) => {
  const { state, dispatch } = useGlobalContext();

  const isFavorite = state.favorites.some((favorite) => favorite.id === user.id);

  const handleFavoriteClick = () => {
    // Verificar si el usuario ya está en favoritos
    const isAlreadyFavorite = state.favorites.some((favorite) => favorite.id === user.id);

    if (isAlreadyFavorite) {
      // Acción para quitar de favoritos
      dispatch({ type: 'REMOVE_FAVORITE', payload: user.id });
    } else {
      // Acción para agregar a favoritos
      dispatch({ type: 'ADD_FAVORITE', payload: user });
    }
  };

  const cardClassName = `card ${state.darkMode ? 'dark-mode' : 'card'}`;

  return (
    <div className={cardClassName}>
      <Link to={`/detail/${user.id}`}>
        <div className="card-image-container">
          <img src={DoctorImage} alt="Doctor" className="card-image" />
        </div>
        <h3>{user.name}</h3>
      </Link>
      <p>Usuario: {user.username}</p>
      <p>ID: {user.id}</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
    
  );
};

export default Card;
