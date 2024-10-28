// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push('/dashboard'); // Redirects to /dashboard on the client side
    }, [router]);

    return null; // You can also show a loading spinner here if needed
}

// Alternatively, for a server-side redirect
export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/dashboard',
            permanent: false,
        },
    };
}
