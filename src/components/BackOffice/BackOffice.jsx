/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useEffect } from 'react';

function BackOffice() {
  useEffect(() => {
    axios
      .get('http://manonsenechal-server.eddi.cloud/projet-12-o-trip-back/public/back/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Utilisez une dépendance vide pour déclencher cet appel lors du montage du composant.

  return (
    <div>
      {/* Votre contenu du back office ici */}
    </div>
  );
}

export default BackOffice;