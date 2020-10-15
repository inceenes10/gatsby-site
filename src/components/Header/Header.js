import React, { useState } from "react";
import styles from './header.module.css';
import SearchIcon from '../../images/search.svg';
import HamburgerMenuIcon from './images/hamburger-menu.svg';
import { Link } from 'gatsby';
import { HeaderSidebarContext } from "../../Context/HeaderSidebarContext/HeaderSidebarContext";
import Submenu from "./Submenu/Submenu";
import { getDefaultLanguage, useTranslation } from "../../Hooks/Translation";
import HeaderImageContainer from "./HeaderImageContainer/HeaderImageContainer";
import LocalizedLink from "../LocalizedLink/LocalizedLink";



function Header() {

    const lang = getDefaultLanguage();
    const { t } = useTranslation();

    const [isOpenBlogSubmenu, setIsOpenBlogSubmenu] = useState(false);

    return (
        <>
            <HeaderImageContainer/>
            <header className={styles.header}>

                <div className={styles.headerHero}>
                    <nav className={styles.menu}>

                        <LocalizedLink className={styles.menuItem}>{t("home")}</LocalizedLink>


                        <div className={styles.menuItem + " " + styles.dropdownMenu} onMouseEnter={() => setIsOpenBlogSubmenu(true)} onMouseLeave={() => setIsOpenBlogSubmenu(!isOpenBlogSubmenu)}>
                            Blog
                        </div>

                        <LocalizedLink className={styles.menuItem} to="/about">{t("about")}</LocalizedLink>

                        <LocalizedLink className={styles.menuItem} to="/contact">{t("contact")}</LocalizedLink>

                        <Link className={styles.menuItem} to="/tr">
                            <img src={require("./images/turkey.svg")} height={32} alt="" loading="lazy"/>
                        </Link>
                        <Link className={styles.menuItem} to="/">
                            <img src={require("./images/great-britain.svg")} height={32} alt="" loading="lazy"/>
                        </Link>
                        <LocalizedLink to="/search" className={styles.searchIcon}>
                            <img src={SearchIcon} alt="Search" />
                        </LocalizedLink>

                    </nav>

                    <Submenu isOpenBlogSubmenu={isOpenBlogSubmenu} setIsOpenBlogSubmenu={(val) => setIsOpenBlogSubmenu(val)}></Submenu>
                </div>


                <div className={styles.heroMobile}>
                    <nav className={styles.menu}>

                        <HeaderSidebarContext.Consumer>
                            {
                                ({ _, toggle }) => {
                                    return (
                                        <img src={HamburgerMenuIcon} alt="Hamburger Menu" className={styles.hamburgerMenu} onClick={toggle} />
                                    );
                                }
                            }
                        </HeaderSidebarContext.Consumer>
                        <div style={{display: "flex"}}>
                            <Link className={styles.menuItem} to="/tr">
                                <img src={require("./images/turkey.svg")} height={32} alt="Switch to Turkish"/>
                            </Link>
                            <Link className={styles.menuItem} to="/">
                                <img src={require("./images/great-britain.svg")} height={32} alt="Switch to English"/>
                            </Link>
                            <Link to={`/${lang}/search`} className={styles.searchIcon}>
                                <img src={SearchIcon} alt="Search" />
                            </Link>
                        </div>
                    </nav>
                </div>

            </header>

        </>
    );

}

export default Header;