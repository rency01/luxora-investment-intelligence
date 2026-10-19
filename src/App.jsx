
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Calculator from './pages/Calculator'
import Analysis from './pages/Analysis'
import GoalPlanner from './pages/GoalPlanner'
import MyPlans from './pages/MyPlans'
import Reports from './pages/Reports'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/goals" element={<GoalPlanner />} />
          <Route path="/plans" element={<MyPlans />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
