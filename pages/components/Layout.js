// components/Layout.js
import Sidebar from './Sidebar';
import styles from './sidebarLayout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layoutContainer}>
            <Sidebar />
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
