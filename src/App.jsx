import './index.css'
import { Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Tasks from './pages/Tasks.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App

