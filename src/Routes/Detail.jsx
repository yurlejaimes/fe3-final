import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import DoctorImage from '../../public/images/doctor.jpg';
import { useGlobalContext } from '../Components/context/global.context';


const Details = ({ match }) => {
  const [userDetails, setUserDetails] = useState(null);
  const { id } = useParams();
  const { state } = useGlobalContext();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (id) {
          const url = `https://jsonplaceholder.typicode.com/users/${id}`;
          const response = await axios.get(url);
          setUserDetails(response.data);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchDetails();
  }, [match]);

  if (!userDetails) {
    return <p>Cargando datos del usuario...</p>;
  }

  const cardClassName = `card ${state.darkMode ? 'dark-mode-detail' : 'card-detail'}`;
  const bodyClass = `${state.darkMode ? 'dark-app-container' : 'app-container'}`;

  return (
    <div className={bodyClass}>
    <div className="card-container">
      <h2>Detalles del Usuario</h2>
      <div className={cardClassName}>
      <div className="card-detail-image-container">
          <img src={DoctorImage} alt="Doctor" className="card-detail-image" />
      </div>
      <p>Nombre: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      <p>Telefono: {userDetails.phone}</p>
      <p className="text-lg font-semibold pb-4">Web: <a href={`http://${userDetails.website}`} className="text-blue-600 dark:text-blue-200 hover:text-blue-800 visited:text-purple-600 dark:visited:text-purple-300">{userDetails.website}</a></p>
      </div>
    </div>
    </div>
  );
};

export default Details;
