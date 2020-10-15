import React, { useContext, useRef, useState } from "react";
import styles from './side-menu.module.css';
import { HeaderSidebarContext } from "../../Context/HeaderSidebarContext/HeaderSidebarContext";
import Logo from '../../images/logo.png';
import { Link } from "gatsby";
import ExpandMoreIcon from '../../images/expand_more.svg';
import categories from "../Data/categories";
import { getDefaultLanguage, useTranslation } from "../../Hooks/Translation"

function SideMenu() {


    const SidebarHeroRef = useRef();

    const [subCategories, setSubCategories] = useState([]);

    const { isOpen, toggle } = useContext(HeaderSidebarContext);


    const lang = getDefaultLanguage();

    const { t } = useTranslation();
    
    let blogCategories = categories[lang];



    const openSubmenu = (categories, backCategories = []) => {


        const html = <ul className={styles.hero} key={Math.random()}>
            <div role="button" tabIndex={0} onClick={() => closeSubmenu(backCategories)} onKeyDown={() => closeSubmenu(backCategories)}>
                <img src={require("../../images/back.svg")} alt="Back Icon"/>
            </div>
            {
                categories.map((category) => {
                    return (
                        <React.Fragment key={category.slug + "-sidebar"}>
                            {!category.subCategories && <Link to={"/" + lang + "/category/" + category.slug} onClick={() => closeSidebar()}>
                                <li className={styles.listItem}>{category.name}</li>
                            </Link>}
                            {category.subCategories && <li role="presentation" className={`${styles.listItem} ${styles.dropdownMenu}`} onKeyDown={() => openSubmenu(category.subCategories, categories)} onClick={() => openSubmenu(category.subCategories, categories)}>
                                <span>{category.name}</span>
                                <img src={ExpandMoreIcon} alt="expand more"/></li>}
                        </React.Fragment>
                    );
                })
            }
        </ul>;
        let arr = [...subCategories];
        arr.push(html);
        setSubCategories([...subCategories, html]);

        setTimeout(() => {
            SidebarHeroRef.current.scrollLeft = SidebarHeroRef.current.scrollLeft + 220;
        }, 10);

    };



    const closeSubmenu = (backCategories) => {
        if (backCategories.length === 0) {
            let arr = [...subCategories];
            arr.pop();
            setSubCategories(arr);

            setTimeout(() => {
                SidebarHeroRef.current.scrollLeft = SidebarHeroRef.current.scrollLeft - 220;
            }, 10);
        }
        else {
            openSubmenu(backCategories);
        }

    };


    const closeSidebar = () => {
        setSubCategories([]);
        toggle();

    };

    return (

        <React.Fragment>
            <aside className={isOpen ? styles.aside + " " + styles.active : styles.aside}>
                <img src={Logo} alt="Logo"/>
                <div style={{
                    display:"flex",
                    flexWrap: "nowrap",
                    flexDirection: "row",
                    overflowX: "hidden"
                }}
                     ref={SidebarHeroRef}>
                    <ul className={styles.hero} >
                        <div >
                            <img src={require("../../images/back.svg")} alt="Back Icon" style={{visibility: "hidden"}}/>
                        </div>
                        <Link to="/tr" onClick={() => closeSidebar()}>
                            <li className={styles.listItem}>{t("Home")}</li>
                        </Link>
                        <li role="presentation" className={`${styles.listItem} ${styles.dropdownMenu}`} onClick={() => openSubmenu(blogCategories)}>
                            <span>Blog</span>
                            <img src={ExpandMoreIcon} alt="expand more"/>
                        </li>
                        <Link to="/tr" onClick={() => closeSidebar()}>
                            <li className={styles.listItem}>{t("About")}</li>
                        </Link>
                        <Link to="/tr" onClick={() => closeSidebar()}>
                            <li className={styles.listItem}>{t("Contact")}</li>
                        </Link>
                    </ul>
                    {
                        subCategories
                    }

                </div>
                <span className={styles.copyRight}>
                    Enes ince &copy; Tüm hakları saklıdır.
                </span>
            </aside>
            <div className={isOpen ? `${styles.modal} ${styles.active}` : styles.modal} onKeyDown={() => closeSidebar()} onClick={() => closeSidebar()} role="button" tabIndex={0} aria-label="close side menu"></div>
        </React.Fragment>


    )
}

export default SideMenu;