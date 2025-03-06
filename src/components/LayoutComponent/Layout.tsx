import React from 'react';
import styles from './Layout.module.css';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <div className={styles.container}>
      {props.children}
      <ProfilePhoto />
      <footer className={styles.footer}>
        <p className={styles.copyright}>© 2025 švedka. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;