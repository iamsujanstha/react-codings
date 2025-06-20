import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/routes'
import { NavProvider } from './contexts/nav-context'
import { useQuery } from '@tanstack/react-query'


function App() {
  const { data } = useQuery({
    queryKey: ['book'],
    queryFn: () => Promise.resolve("The habbit")
  })
  console.log(data)
  return (
    <NavProvider>
      <RouterProvider router={createBrowserRouter(router)} />
    </NavProvider>

  )
}

export default App
