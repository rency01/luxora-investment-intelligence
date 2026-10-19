
import { NavLink } from 'react-router-dom'
import logo from '../assets/Luxora Investment Intelligence Logo.png'

const navigation = [
  { name: 'Dashboard', path: '/', icon: '◫' },
  { name: 'Calculator Studio', path: '/calculator', icon: '▦' },
  { name: 'Analysis Lab', path: '/analysis', icon: '⌁' },
  { name: 'Goal Planner', path: '/goals', icon: '◎' },
  { name: 'My Plans', path: '/plans', icon: '▤' },
  { name: 'Reports', path: '/reports', icon: '▧' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <img
          src={logo}
          alt="Luxora Investment Intelligence logo"
          className="brand-logo"
        />

        <div className="brand-text">
          <h2>Luxora</h2>
          <span>INVESTMENT INTELLIGENCE</span>
        </div>
      </div>

      <p className="nav-heading">WORKSPACE</p>

      <nav className="navigation">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="status-dot" />

        <div>
          <strong>Investment workspace</strong>
          <span>Plan with clarity</span>
        </div>
      </div>
    </aside>
  )
}
