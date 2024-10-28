// components/Sidebar.js

import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css'; // Adjust the path according to your structure

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Menu</h2>
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarItem}>
          <Link href="/bots">Bots Page</Link>
        </li>
        <li className={styles.sidebarItem}>
          <Link href="/chats">Chats Page</Link>
        </li>
        <li className={styles.sidebarItem}>
          <Link href="/analysis">Analysis Page</Link>
        </li>
        <li className={styles.sidebarItem}>
          <Link href="/WhatsAppPage">WhatsApp Page</Link> {/* New WhatsApp link */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
