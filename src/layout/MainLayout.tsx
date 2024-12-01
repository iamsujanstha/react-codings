import { Outlet } from 'react-router'
import Sidebar from '../components/sidebar/Sidebar'

const MainLayout = () => {
  return (
    <div className='w-100 flex flex-row h-screen gap-2 overflow-hidden'>
      <aside className='w-72 bg-slate-500'>
        <Sidebar />
      </aside>
      <main className='w-calc-main overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout