import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/WBD_Logo_0.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <li className={styles.headerTitleContainer}>
                                    <a href="https://chat.wb-duisburg.de/" title="Startseite">
                                        <img
                                            src={github}
                                            alt="Github logo"
                                            aria-label="Startseite"
                                            width="120px"
                                            height="120px"
                                            className={styles.githubLogo}
                                        />
                                    </a>
                    </li>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}></h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Beta | GPT-4</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
