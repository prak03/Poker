// src/routes/routes.config.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main';
import Game from '../components/Game';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: '/game',
    element: <Game />,
  },
]);

export default router;
