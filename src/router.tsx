import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@pages/Home';
import WritePage from '@pages/Write';

const router = createBrowserRouter([
    {
        'path' : '/',
        element : <HomePage />
    },
    {
        "path" : "/write",
        element : <WritePage />
    }
])

export default router;