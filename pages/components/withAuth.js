import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
    const ComponentWithAuth = (props) => {
        const token = useSelector((state) => state.token.value);
        const router = useRouter();

        useEffect(() => {
            if (!token) {
                router.replace('/signup'); // Redirect to signup if not authenticated
            }
        }, [token, router]);

        // Render the wrapped component if authenticated; otherwise, return null
        return token ? <WrappedComponent {...props} /> : null;
    };

    ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return ComponentWithAuth;
};

export default withAuth;
