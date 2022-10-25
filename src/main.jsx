import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
  } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';  
import PokemonDetails from './pages/PokemonDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "pokemon/:name",
    element: <PokemonDetails />,
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <HomePage />,
    errorElement: <ErrorPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
