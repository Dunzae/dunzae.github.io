import { createHashRouter } from 'react-router-dom';
import HomePage from '@pages/Home';
import WritePage from '@pages/Write';
import PostPage from '@pages/Post';
import LoginPage from '@pages/Login';
import RegisterPage from '@pages/Register'
import ProfilePage from '@pages/Profile';

const router = createHashRouter([
    {
        'path' : '/',
        element : <HomePage />
    },
    {
        "path" : "/write",
        element : <WritePage />
    },
    {
        path : "/post",
        element : <PostPage />
    },
    {
        path : "/login",
        element : <LoginPage />
    },
    {
        path : "/register",
        element : <RegisterPage />
    },
    {
        path : "/profile",
        element : <ProfilePage />
    }
])

export default router;