import React from "react";

const LanguageContext = React.createContext({
    lang: "en"
});


class LanguageProvider extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            changeLanguage: this.changeLanguage.bind(this),
            lang: "en"
        };
    }


    changeLanguage(lang) {

        this.setState({ lang });
    }

    render() {
        return (
            <LanguageContext.Provider value={this.state}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}


export {
    LanguageContext,
    LanguageProvider
}