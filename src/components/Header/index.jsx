import { NavLink } from "react-router-dom";

// function NavButton({ name }) {
//     return (
//         <AppContext.Consumer>
//             {({ page, setPage }) => (
//                 <NavButtonElem
//                     active={page === name}
//                     onClick={() => setPage(name)}
//                 >
//                     {toProperCase(name)}
//                 </NavButtonElem>
//             )}
//         </AppContext.Consumer>
//     )
// }

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