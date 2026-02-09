import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <NavLink to="/Dashboard">
            Dashboard
            </NavLink>
            <NavLink to="/Login">
            Login
            </NavLink>
            <NavLink to="/Tasks">
            Tasks
            </NavLink>
        </nav>
    )
}

export default Navbar