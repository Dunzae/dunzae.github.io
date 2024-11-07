import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@pages/Home';
import WritePage from '@pages/Write';
import PostPage from '@pages/Post';
import LoginPage from '@pages/Login';
import ProfilePage from '@pages/Profile';

const router = createBrowserRouter([
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
        path : "/profile",
        element : <ProfilePage />
    }
])

export default router;