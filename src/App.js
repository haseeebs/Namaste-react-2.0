import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';

const Instamart = lazy(() => import(/* parcelChunkName: 'instamart' */'./components/instamart/Instamart'));
const InstamartMenu = lazy(() => import(/* parcelChunkName: 'instamart' */ './components/instamart/InstamartMenu'));

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:restaurantId',
                element: <RestaurantMenu />
            },
            {
                path: '/instamart',
                element:
                    <Suspense fallback={<h1 style={{textAlign:'center',padding:'50px'}}>Instamart is loading</h1>}>
                        <Instamart />
                    </Suspense>

            },
            {
                path: '/instamart/:groceryItemName',
                element:
                    <Suspense fallback={<h1 style={{textAlign:'center',padding:'50px'}}>Instamart menu is loading</h1>}>
                        <InstamartMenu />
                    </Suspense>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);