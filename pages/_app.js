// pages/_app.js
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import store from '@/store/store';
import { setToken } from '@/store/tokenSlice';
import '../styles/style.module.css';
import { useDispatch } from 'react-redux';

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
        const savedToken = localStorage.getItem('authToken');
        if (savedToken) {
            dispatch(setToken(savedToken));
        } else if (router.pathname !== '/signup' && router.pathname !== '/login') {
            router.replace('/signup'); // Redirect to signup if no token is found
        }
    }, [router, dispatch]);

    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
