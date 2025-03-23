import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NuqsAdapter } from 'nuqs/adapters/next'
import './App.css'
import { router } from './routes/routes'

function App() {
  return (
    <>
     <NuqsAdapter>
      <RouterProvider router={createBrowserRouter(router)} />
      </NuqsAdapter>
    </>
  )
}

export default App
