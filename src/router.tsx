import { createHashRouter } from 'react-router-dom';
import HomePage from '@pages/Home';
import WritePage from '@pages/Write';
import ViewPage from '@pages/View';
import LoginPage from '@pages/Login';
import RegisterPage from '@pages/Register'
import ProfilePage from '@pages/Profile';

const router = createHashRouter([
    {
        'path': '/',
        async lazy() {
            const HomePage = await import("./pages/Home");
            return { Component: HomePage.default }
        }
    },
    {
        "path": "/write",
        async lazy() {
            const WritePage = await import("./pages/Write");
            return { Component: WritePage.default }
        }
    },
    {
        path: "/view",
        async lazy() {
            const ViewPage = await import("./pages/View");
            return { Component: ViewPage.default }
        }
    },
    {
        path: "/login",
        async lazy() {
            const LoginPage = await import("./pages/Login");
            return { Component: LoginPage.default }
        }
    },
    {
        path: "/register",
        async lazy() {
            const RegisterPage = await import("./pages/Register");
            return { Component: RegisterPage.default }
        }
    },
    {
        path: "/profile",
        async lazy() {
            const ProfilePage = await import("./pages/Profile");
            return { Component: ProfilePage.default }
        }
    }
])

export default router;