import logo from "../images/logo.png";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo" />
        </header>
    );
};
export default Header;
