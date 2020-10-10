import React from "react";
import { Link } from "gatsby";
import styles from "./article-page-info-and-title.module.css";
import moment from "moment";
import { getDefaultLanguage, localesInfo, useTranslation } from "../../../../Hooks/Translation"
import { PageContext } from "../../context/PageContext"


function ArticlePageInfoAndTitle(props) {

    const lang = getDefaultLanguage();
    const { pageContext: { article } } = React.useContext(PageContext);

    const { t } = useTranslation();

    const date = new Date(article.updatedAt);
    const fromNowDate = moment(date).format(localesInfo[lang].dateFormatting);

    let str = "publish_at";

    if (article.createdAt !== article.updatedAt)
        str = "last_update";


    return (
        <div>
            <h1>{props.children}</h1>
            <div className={styles.pageInfoContainer}>
                <Link className={styles.category} to={`/${article.category.lang}/category/${article.category.slug}`}>{article.category.name}</Link>
                <span>Enes ince</span>
                <span>{ t(str, { date: fromNowDate }) }</span>
            </div>
        </div>
    )
}

export default ArticlePageInfoAndTitle;