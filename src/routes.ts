import { createBrowserRouter } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";



const routes = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { 
                index: true, 
                Component: Home 
            },
        ]
    }
])

export default routes