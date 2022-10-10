import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    return (
        <ul>
            <li>
                <NavLink to={`/`} className={({ isActive }) => isActive ? "active" : ""} end>Dashboard</NavLink>
                <NavLink to={`/crypto`} className={({ isActive }) => isActive ? "active" : ""}>Crypto</NavLink>
            </li>
        </ul>
    )
}