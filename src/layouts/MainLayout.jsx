
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function MainLayout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="topbar-label">PERSONAL FINANCE WORKSPACE</p>
            <span>Investment planning, made clearer.</span>
          </div>

          <div className="profile-avatar">I</div>
        </header>

        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
