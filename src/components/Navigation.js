import { NavLink } from 'react-router-dom';
import styles from '../styles.module.css';

const Navigation = () => (
  <div className={`${styles.container_fluid} ${styles.header}`}>
    <nav className={`${styles.container} ${styles.navbar}`}>
      <h1 className={styles.primary_color}>Bookstore CMS</h1>
      <ul>
        <li>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/categories">
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);
export default Navigation;
