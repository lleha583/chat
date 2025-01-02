import { createBrowserRouter } from "react-router";
import App from "../App";
import Main from "../pages/Main";
import UserLogin from "../pages/UserLogin";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [{
            path: 'main',
            element: <Main />
        }],
    },
    {
        path: 'login',
        element: <UserLogin />
    }
])