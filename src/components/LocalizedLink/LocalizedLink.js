import React from "react";
import { Link } from "gatsby";
import { getDefaultLanguage } from "../../Hooks/Translation"

function LocalizedLink(props) {

    let lang = getDefaultLanguage();
    if (lang === "en" && !props.to)
        lang = "/"
    else
        lang = `/${lang}`;



    const { to, ...leftOver } = props;

    return (
        <Link to={`${lang}${to || ""}`} {...leftOver}>
            {props.children}
        </Link>
    )
}

export default LocalizedLink;