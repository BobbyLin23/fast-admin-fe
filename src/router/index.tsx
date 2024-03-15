import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/home'
import About from '@/pages/about'
import Login from '@/pages/login'
import Register from '@/pages/register'

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ])

  return <RouterProvider router={router} />
}
