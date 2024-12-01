import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/public'

function App() {
  return (
    <>
      <RouterProvider router={createBrowserRouter(router)} />
    </>
  )
}

export default App
