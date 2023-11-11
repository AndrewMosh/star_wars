import logo from "../../images/logo.png";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
    </header>
  );
};
export default Header;
