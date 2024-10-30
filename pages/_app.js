// pages/_app.js
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import store from '@/store/store';
import { setAccess } from '@/store/accessSlice'; // Updated import for access actions
import '../styles/style.module.css';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <AppContent Component={Component} pageProps={pageProps} />
        </Provider>
    );
}

const AppContent = ({ Component, pageProps }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const savedAccess = localStorage.getItem('access');

        if (savedAccess) {
            dispatch(setAccess(savedAccess));
        } else if (router.pathname !== '/signup' && router.pathname !== '/login') {
            router.replace('/signup'); // Redirect to signup if no access is found
        }
    }, [router, dispatch]);

    return <Component {...pageProps} />;
};

export default MyApp;
