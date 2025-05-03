import { Outlet } from 'react-router'
import Sidebar from '../components/sidebar/Sidebar'
import { GiHamburgerMenu } from "react-icons/gi"
import { useNav } from '../hooks/useNav'
// import { useNav } from '../hooks/useNav'

const MainLayout = () => {

  const { collapsed, toggle } = useNav();

  return (
    <div className="w-full flex flex-row h-screen gap-2 overflow-hidden">
      <aside
        className={`
    bg-slate-500
    transition-all duration-300 ease-in-out
 ${collapsed ? 'w-0 opacity-0 visibility-hidden pointer-events-none' : 'w-[18rem] opacity-100 visibility-visible pointer-events-auto'}
  `}
      >
        <Sidebar />
      </aside>

      <main
        className={`
          transition-all duration-300 ease-in-out
          flex-1 overflow-y-auto
        `}
      >
        <div className="flex flex-row justify-between items-center p-4 bg-slate-200 mb-8">
          <GiHamburgerMenu className="text-2xl cursor-pointer" onClick={toggle} />
        </div>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
