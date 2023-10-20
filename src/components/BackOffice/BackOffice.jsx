/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import backMiddleware from '../../middlewares/backMiddleware'

function BackOfficePage() {
  
  backMiddleware();
 
  return (
    <div>
      <h1>Back Office</h1>
      {/* Contenu du back-office */}
    </div>
  );
}

export default BackOfficePage;



