import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NuqsAdapter } from 'nuqs/adapters/next'
import './App.css'
import { router } from './routes/routes'
import { NavProvider } from './contexts/nav-context'

function App() {
  return (
    <NavProvider>
      <NuqsAdapter>
        <RouterProvider router={createBrowserRouter(router)} />
      </NuqsAdapter>
    </NavProvider>
  )
}

export default App
