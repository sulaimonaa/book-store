import { NavLink } from 'react-router-dom';
import styles from '../styles.module.css';
import user from '../assets/user.png';

const Navigation = () => (
  <div className={`${styles.container_fluid} ${styles.header}`}>
    <nav className={`${styles.container} ${styles.navbar}`}>
      <h1 className={styles.primary_color}>Bookstore CMS</h1>
      <ul>
        <li>
          <NavLink className={`${styles.link} ${styles.active}`} to="/">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/categories">
            Categories
          </NavLink>
        </li>
      </ul>
      <div className={styles.user}>
        <img src={user} alt="user icon" className={styles.user_icon} />
      </div>
    </nav>
  </div>
);
export default Navigation;
