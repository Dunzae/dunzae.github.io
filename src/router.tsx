import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@pages/Home';
import WritePage from '@pages/Write';
import PostPage from '@pages/Post';

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
    }
])

export default router;