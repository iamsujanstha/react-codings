import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NuqsAdapter } from 'nuqs/adapters/next'
import './App.css'
import { router } from './routes/routes'
import { NavProvider } from './providers/NavProvider'
import NavController from './providers/NavController'

function App() {
  return (
    <NavController>
      <NavProvider>
        <NuqsAdapter>
          <RouterProvider router={createBrowserRouter(router)} />
        </NuqsAdapter>
      </NavProvider>
    </NavController>
  )
}

export default App
