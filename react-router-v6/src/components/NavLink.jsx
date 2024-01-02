import { NavLink as NavLinkReactRouter } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export const NavLink = ({ to, children, ...props }) => {
    return (
        <NavLinkReactRouter
            {...props}
            className={({ isActive }) => {
                return isActive ? 'is-active' : undefined
            }}
            to={to}
        >{children}
        </NavLinkReactRouter>
    );
}

