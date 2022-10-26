import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <>
            <div>Crypto Logo</div>
            <ul>
                <li><NavLink to={`/`} className={({ isActive }) => isActive ? "active" : ""} end>Dashboard</NavLink></li>
                <li><NavLink to={`/crypto`} className={({ isActive }) => isActive ? "active" : ""}>Crypto</NavLink></li>
            </ul>
        </>
    )
}