import { createBrowserRouter } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Updates from "./pages/Updates";
import UpdateDetail from "./pages/UpdateDetail";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { 
                index: true, 
                Component: Home 
            },
            {
                path: "updates",
                children: [
                    {
                        index: true,
                        Component: Updates
                    },
                    {
                        path: ":id",
                        Component: UpdateDetail
                    }
                ]
            },
            {
                path: "team",
                Component: Team
            },
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            },
            {
                path: "forgot-password",
                Component: ForgotPassword
            },
            {
                path: "reset-password",
                Component: ResetPassword
            },
            {
                path: "dashboard",
                Component: Dashboard
            }
        ]
    }
])

export default routes