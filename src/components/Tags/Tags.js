import React from "react";
import { Link } from "gatsby";
import './tags.css';

function Tags(props) {

    const tags = props.tags;

    return (
        <div className="tags">
            {
                tags.map(tag => {
                    return (
                        <Link key={Math.random()} to={`/${tag.lang}/tag/${tag.slug}`} className="tag">
                            # {tag.name}
                        </Link>
                    )
                })
            }
        </div>
    )

}


export default Tags;