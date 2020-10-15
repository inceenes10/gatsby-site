import React from "react";
import './styles/not-found-page.css';
import { Link } from "gatsby";
import Layout from "../layouts"
import { setDefaultLanguage } from "../Hooks/Translation"
import NotFoundImage from '../images/not-found.svg';

function NotFoundPage() {

    setDefaultLanguage("en");

    return (
        <Layout>

            <div className="not-found--container">
                <img src={NotFoundImage} alt="Not Found"/>
                <p>

                    The page what you're looking for may be removed, moved or
                    temporarily unavailable. <Link to="/">Return back to home page → 🏠️</Link>
                </p>
            </div>
        </Layout>
    )
}

export default NotFoundPage;