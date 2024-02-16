import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import RestaurantMenu from './components/restaurant/Menu';
import Footer from './components/footer';
import userContext from './utils/userContext';
import { Provider } from 'react-redux'


const Instamart = lazy(() => import(/* parcelChunkName: 'instamart' */'./components/instamart/Instamart'));
const InstamartMenu = lazy(() => import(/* parcelChunkName: 'instamart' */ './components/instamart/InstamartMenu'));

const App = () => {

    const [user, setUser] = useState({
        name: 'Logged in username',
        email: 'loggedinuser@gmail.com'
    });

    return (
        <>
            <userContext.Provider value={{user, setUser}}>

                <Header />
                <Outlet />

                <userContext.Provider value={{ user: { name: 'Haseeb' } }}>
                    <Footer />
                </userContext.Provider>

            </userContext.Provider>
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
                path: '/restaurant/:restaurantId',
                element: <RestaurantMenu />
            },
            {
                path: '/instamart',
                element:
                    <Suspense fallback={<h1 style={{ textAlign: 'center', padding: '50px' }}>Instamart is loading</h1>}>
                        <Instamart />
                    </Suspense>

            },
            {
                path: '/instamart/:groceryItemName',
                element:
                    <Suspense fallback={<h1 style={{ textAlign: 'center', padding: '50px' }}>Instamart menu is loading</h1>}>
                        <InstamartMenu />
                    </Suspense>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);