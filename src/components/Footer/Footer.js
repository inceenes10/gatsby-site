import React from "react";
import { Link } from "gatsby";
import AutoForm from "react-auto-form";
import './footer.css';
class Footer extends React.Component {


    // Some functions

    handleEmailSubmitForm = (event, data) => {
        event.preventDefault();

        console.log(data.email);
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer-hero">
                    <ul>
                        <h4>Kategori</h4>
                        <li>
                            <Link to="/">C Programlama Dili</Link>
                        </li>
                        <li>
                            <Link to="/">Php</Link>
                        </li>
                        <li>
                            <Link to="/">Amazon Web Servisleri</Link>
                        </li>
                        <li>
                            <Link to="/">Appsync</Link>
                        </li>
                        <li>
                            <Link to="/">Veri Yapıları ve Algoritmalar</Link>
                        </li>
                    </ul>
                    <ul>
                        <h4>Kategori</h4>
                        <li>
                            <Link to="/">C Programlama Dili</Link>
                        </li>
                        <li>
                            <Link to="/">Php</Link>
                        </li>
                        <li>
                            <Link to="/">Amazon Web Servisleri</Link>
                        </li>
                        <li>
                            <Link to="/">Appsync</Link>
                        </li>
                        <li>
                            <Link to="/">Veri Yapıları ve Algoritmalar</Link>
                        </li>
                    </ul>
                    <ul>
                        <h4>Kategori</h4>
                        <li>
                            <Link to="/">C Programlama Dili</Link>
                        </li>
                        <li>
                            <Link to="/">Php</Link>
                        </li>
                        <li>
                            <Link to="/">Amazon Web Servisleri</Link>
                        </li>
                        <li>
                            <Link to="/">Appsync</Link>
                        </li>
                        <li>
                            <Link to="/">Veri Yapıları ve Algoritmalar</Link>
                        </li>
                    </ul>
                    <div className="newsletter-subscription">
                        <h4>Subscribe to Newsletter</h4>
                        <AutoForm className="newsletter-subscription--form" trimOnSubmit={true}>
                            <input type="email" name="email" placeholder="Email Address" required={true}/>
                            <input type="submit" value="Subscribe"/>
                        </AutoForm>
                    </div>
                </div>

                <div className="footer--copy-right">
                    Enes ince &copy; All rights reserved
                </div>
            </footer>
        )
    }
}


export default Footer;