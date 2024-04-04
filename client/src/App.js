import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.config'

function App() {
  return (
    <div className="h-screen ">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
