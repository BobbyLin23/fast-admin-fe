import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/home'
import About from '@/pages/about'

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
  ])

  return <RouterProvider router={router} />
}
