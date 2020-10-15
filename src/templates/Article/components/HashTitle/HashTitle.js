import React from "react";
import { PageContext } from "../../../../Context/PageContext"


function HashTitle(props) {

    const { pageContext: { location } } = React.useContext(PageContext);

    const { hash, children, located = true } = props;

    const aTagClicked = (event) => {
        event.preventDefault();
        const el = event.target;
        const hash = el.getAttribute("data-hash");
        const title = document.title;
        const url = `${window.location.origin}${window.location.pathname}#${hash}`;
        window.history.pushState({}, title, url);
    }
    return (
        <section>
            <h2 id={located ? hash : undefined} role="presentation" onClick={e => {
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
                <span data-to={`${location.origin}${location.pathname}#${hash}`} role="button" tabIndex={0} data-hash={hash} onKeyDown={aTagClicked} onClick={aTagClicked}>
                        # {children}
                </span>
            </h2>
        </section>
    )

}

export default HashTitle;