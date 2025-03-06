import React from 'react';
import styles from './ProfilePhoto.module.css';
import profilePhoto from '../../assets/profile-photo.jpg';

function ProfilePhoto() {
  return (
    <div className={styles.container}>
      <img src={profilePhoto} alt="Profile" className={styles.image} />
    </div>
  );
};

export default ProfilePhoto;