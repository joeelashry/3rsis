// components/Sidebar.js
import Link from 'next/link';
import styles from './sidebarLayout.module.css';

const Sidebar = () => {
  return (
      <div className={styles.sidebar}>
          <h2>Sui</h2>
          <Link href="/bots" className={styles.link}>My Bots</Link>
          <Link href="/WhatsAppPage" className={styles.link}>Add your whatsapp</Link>
          <Link href="/chats" className={styles.link}>My chats</Link>
          <Link href="/register" className={styles.link}>كسم الل في بالي </Link>
        
      </div>
  );
};

export default Sidebar;