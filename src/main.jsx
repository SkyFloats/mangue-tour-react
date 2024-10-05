import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// vamo la

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage/index.jsx';
import FormPage from './pages/FormPage/index.jsx';
import DeletePage from './pages/DeletePage/index.jsx';
import ListPage from './pages/ListPage/index.jsx';
import ErrorPage from './pages/ErrorPage/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/form", element: <FormPage /> },
      { path: "/delete", element: <DeletePage /> },
      { path: "/list", element: <ListPage /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
