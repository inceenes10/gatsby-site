import React from "react";
import { PageContext } from "../../../../Context/PageContext"


function HashTitle(props) {

    const { pageContext: { location } } = React.useContext(PageContext);
    //console.log(pageContext);

    const { hash, children, located = false } = props;



    return (
        <section>
            <h2 id={located ? hash : undefined} onClick={e => {
                e.preventDefault();
                const el = e.target;
                const headerOffset = 70;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elPosition = el.getBoundingClientRect().top - bodyRect;
                const offsetPosition = elPosition - headerOffset;

                if (el) {
                    window.scrollTo({
                        behavior: "smooth",
                        top: offsetPosition
                    });
                }



            }}>
                <a data-to={`${location.origin}${location.pathname}#${hash}`} data-hash={hash} onClick={(event) => {
                    event.preventDefault();
                    const el = event.target;
                    const hash = el.getAttribute("data-hash");
                    const title = document.title;
                    const url = `${window.location.origin}${window.location.pathname}#${hash}`;
                    window.history.pushState({}, title, url);

                }}>
                        # {children}
                </a>
            </h2>
        </section>
    )

}

export default HashTitle;