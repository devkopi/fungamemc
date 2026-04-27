import { createBrowserRouter } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Updates from "./pages/Updates";
import UpdateDetail from "./pages/UpdateDetail";

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
                        path: ":slug",
                        Component: UpdateDetail
                    }
                ]
            },
        ]
    }
])

export default routes