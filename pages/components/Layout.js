// components/Layout.js

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './Layout.module.css'; // Adjust the path if necessary

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.sidebarToggle} onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className={styles.content}>{children}</div>
      {isSidebarOpen && <div className={styles.overlay} onClick={closeSidebar}></div>}
    </div>
  );
};

export default Layout;
