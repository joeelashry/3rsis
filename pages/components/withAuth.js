import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
    const ComponentWithAuth = (props) => {
        const access = useSelector((state) => state.access?.value);
        const router = useRouter();

        useEffect(() => {
            if (!access) {
                router.replace('/signup'); // Redirect to signup if not authenticated
            }
        }, [access, router]);

        return access ? <WrappedComponent {...props} /> : null;
    };

    ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return ComponentWithAuth;
};

export default withAuth;
