import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
export const ProtectedRoute = ({ children, isAllowed, redirectTo = '/landing' }) => {
    {/**retorna el componente que este conteniendo protectedRouter */ }

    if (!isAllowed) {
        return <Navigate to={redirectTo} />
    }
    return children ? children : <Outlet />;
}
