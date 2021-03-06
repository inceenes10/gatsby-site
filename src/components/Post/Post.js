import React from "react";
import './post.css';
import YoutubeVideoIframe from "../YoutubeVideoIframe/YoutubeVideoIframe"
import { PageContext } from "../../Context/PageContext"
import { Link } from "gatsby";
import moment from "moment";
import { getDefaultLanguage, localesInfo } from "../../Hooks/Translation"


class Post extends React.Component {

    static contextType = PageContext;

    render() {
        const lang = getDefaultLanguage();
        const readtime = 5;
        //const { category, title, description, date, slug, image, youtubeVideoIframe } = this.props.data;

        const { title, description, category, image, slug, youtubeVideo, createdAt } = this.props.article;

        let date = moment(new Date(createdAt)).fromNow(localesInfo[lang].dateFormatting);

        if (youtubeVideo) {
            return (
                <div className="post" style={{gridTemplateColumns: "auto"}}>
                    <YoutubeVideoIframe src={youtubeVideo.src} title={youtubeVideo.title} />
                    <div className="post--main-content">
                        <span className="category-name">
                            <Link to={`/${lang}/category/${category.slug}/`}>{category.name}</Link>
                        </span>
                        <h2 className="title">
                            <Link to={`/${lang}/article/${slug}/`}>{title}</Link>
                        </h2>
                        <div className="description">{description}</div>
                        <div className="byline">
                            <span className="date">{date}</span>
                        </div>
                    </div>
                </div>
            );
        }

        else if (image) {
            return (<div className="post with-image">

                <img src={image.image700} width="100%" alt={image.alt}/>
                <div className="post--main-content">
                    <span className="category-name">
                        <Link to={`/${lang}/category/${category.slug}/`}>{category.name}</Link>
                    </span>
                    <h2 className="title">
                        <Link to={`/${lang}/article/${slug}`}>{title}</Link>
                    </h2>
                    <div className="description">{description}</div>
                    <div className="byline">
                        <span className="author">{readtime} min read</span>
                        <span className="date">{date}</span>
                    </div>
                </div>
            </div>);
        }

        return (
            <div className="post">
                <span className="category-name">
                    <Link to={`/${lang}/category/${category.slug}/`}>{category.name}</Link>
                </span>
                <h2 className="title">
                    <Link to={`/${lang}/article/${slug}`}>{title}</Link>
                </h2>
                <div className="description">{description}</div>
                <div className="byline">
                    <span className="author">{readtime} min read</span>
                    <span className="date">{date}</span>
                </div>
            </div>
        );
    }


}

export default Post;