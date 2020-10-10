import React from "react";
import Footer from "../components/Footer/Footer"
import './index.css';
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import { HeaderSidebarProvider } from "../Context/HeaderSidebarContext/HeaderSidebarContext";
import { getDefaultLanguage, localesInfo, setTranslation } from "../Hooks/Translation";
import en from "../translations/en/layout";
import tr from "../translations/tr/layout";
import moment from "moment";

setTranslation({
    en, tr
});


function Layout(props) {


    const lang = getDefaultLanguage();
    if (lang !== "en")
        moment.locale(lang, {
            months: localesInfo[lang].months,
            relativeTime: localesInfo[lang].relativeTime
        })

    return (
        <HeaderSidebarProvider>
            <SideMenu/>
            <Header/>
            {
                props.children
            }
            <Footer/>
        </HeaderSidebarProvider>
    );
}




export default Layout;