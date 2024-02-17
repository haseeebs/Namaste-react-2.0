import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import RestaurantMenu from './components/restaurant/RestaurantMenu';
import Footer from './components/footer';
import CartScreen from './screens/CartScreen';
import { Provider } from 'react-redux';
import store from './utils/store';

const Instamart = lazy(() => import(/* parcelChunkName: 'instamart' */'./components/instamart/Instamart'));
const InstamartMenu = lazy(() => import(/* parcelChunkName: 'instamart' */ './components/instamart/InstamartMenu'));

const App = () => {

    return (
        <>
            <Provider store={store}>
                <Header />
                <Outlet />
                <Footer />
            </Provider>
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
                path: '/cart',
                element: <CartScreen />
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