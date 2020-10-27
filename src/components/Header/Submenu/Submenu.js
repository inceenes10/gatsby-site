import blogCategories from "../../Data/categories";
import useDynamicRefs from "use-dynamic-refs";
import React, { useEffect } from "react";
import { Link } from "gatsby";
import styles from "./submenu.module.css";
import { getDefaultLanguage } from "../../../Hooks/Translation"


const Submenu = props => {

    const lang = getDefaultLanguage();

    let prevPanel = null;

    const subCategoriesOfAll = blogCategories[lang].map(category => {
        return { [category.slug]: category.subCategories };
    });

    const refsCount = blogCategories[lang].length;
    const modalRef = React.createRef();

    const [getSubCategoryPanelRef, setSubCategoryPanelRef] = useDynamicRefs();

    useEffect(() => {

        for (let i = 0; i < refsCount; i++) {
            let panel = getSubCategoryPanelRef("" + i);
            panel.current.style.display = "none";
        }

        let firstPanel = getSubCategoryPanelRef("0");

        firstPanel.current.style.display = "block";
        prevPanel = firstPanel;
        arrangeModal();

        window.addEventListener('scroll', arrangeModal);

        return () => window.removeEventListener('scroll', arrangeModal);
    });


    const arrangeModal = () => {
        let modalOffset = Math.max(235 - window.scrollY, 50);
        if (modalRef.current)
            modalRef.current.style.height = `${window.innerHeight - modalOffset}px`;
    };

    const parentCategoryHover = (event) => {
        if (prevPanel !== null)
            prevPanel.current.style.display = "none";
        const index = event.target.getAttribute("data-index");
        const panel = getSubCategoryPanelRef(index + "");
        panel.current.style.display = "block";
        prevPanel = panel;
    }

    return (
        <div onMouseEnter={() => props.setIsOpenBlogSubmenu(true) } onMouseLeave={ (e) => {
            e.preventDefault();
            props.setIsOpenBlogSubmenu(false)}
        } role="button" tabIndex="0">
            <div style={{height: props.isOpenBlogSubmenu ? 5 : 0, width: 640, left: "calc(50% - 320px)", position: "absolute", top: "50px",zIndex: props.isOpenBlogSubmenu ? 2 : -1}}></div>
            <div className={props.isOpenBlogSubmenu ? styles.submenu + " " + styles.active : styles.submenu}>
                <ul className={styles.items}>
                    {
                        blogCategories[lang].map((category, index) => {
                            if (typeof category.subCategories !== "undefined") {
                                return (<button data-index={index} key={category.slug + Math.random()} tabIndex="0" onFocus={parentCategoryHover} onMouseOver={parentCategoryHover}>
                                    <li data-index={index}>{category.name}</li>
                                </button>)
                            }

                            return (<Link onClick={() => {

                                props.setIsOpenBlogSubmenu(false);
                            }} data-index={index} key={category.slug} to={"/" + lang + "/category/" + category.slug}>
                                <li data-index={index}>{category.name}</li>
                            </Link>)

                        })
                    }
                </ul>
                {
                    subCategoriesOfAll.map((subCategories, index) => {
                        const objKey = Object.keys(subCategories);

                        return (<div className={styles.itemDisplay} style={{display: "none"}} onLoad={(event) => {
                            prevPanel = event.target;
                        }} key={objKey} data-index={index} ref={setSubCategoryPanelRef(index + "")}>
                            <ul>
                                {
                                    typeof subCategories[objKey] !== "undefined" && (
                                        <>
                                            {
                                                subCategories[objKey].map(subCategory => {
                                                    return (<Link onClick={() => {
                                                        props.setIsOpenBlogSubmenu(false);

                                                    }} key={subCategory.slug} to={"/" + lang + "/category/" + subCategory.slug}>
                                                        <li>{subCategory.name}</li>
                                                    </Link>)
                                                })
                                            }
                                        </>
                                    )
                                }
                            </ul>
                        </div>);
                    })
                }

            </div>
            <div className={props.isOpenBlogSubmenu ? styles.modal + " " + styles.active : styles.modal} tabIndex={0} role="button" onMouseEnter={(e) => {
                e.preventDefault();
                if (prevPanel !== null)
                    prevPanel.current.style.display = "none";
                props.setIsOpenBlogSubmenu(false)
            }} aria-label="close the modal" ref={modalRef}></div>
        </div>
    );
};

export default Submenu;