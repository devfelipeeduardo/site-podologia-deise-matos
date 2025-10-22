import Nav from "../Nav/Nav";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={`${styles.header} ${styles.transparentBackground}`}>
            <img src="" alt="Logo Deise" />
            <Nav />
            <ScheduleButton />
        </header>
    )
}

export default Header;