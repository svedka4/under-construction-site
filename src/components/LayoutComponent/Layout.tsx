import React from 'react';
import styles from './Layout.module.css';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
      <ProfilePhoto /> {}
      <footer className={styles.footer}>
        <p className={styles.copyright}>© 2025 švedka. All rights reserved.</p>
      </footer>
      
    </div>
  );
};

export default Layout;