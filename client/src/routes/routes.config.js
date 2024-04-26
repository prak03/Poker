// src/routes/routes.config.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main';
import Game from '../components/Game';
import Content from '../components/Content';
import Register from '../components/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: '/home',
    element: <Content />,
    errorElement: <div>404 not found</div>,
  },
  {
    path:'/register',
    element : <Register/>,
    errorElement: <div>404 not found</div>,
  },
  {
    path: '/game',
    element: <Game />,
  },


]);

export default router;
