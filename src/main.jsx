import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './views/Home';
import Login from './views/Login';
import Survey from './views/Survey';
import NotFound from './views/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      {
        path: '/vistoria/:step',
        element: <Survey />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
