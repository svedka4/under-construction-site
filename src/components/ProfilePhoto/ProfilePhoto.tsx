
import styles from './ProfilePhoto.module.css';
import profilePhoto from '../../assets/distorted-negative.jpg';

function ProfilePhoto() {
  return (
    <div className={styles.container}>
      <img src={profilePhoto} alt="Distorted photo of a person" className={styles.image} />
    </div>
  );
};

export default ProfilePhoto;