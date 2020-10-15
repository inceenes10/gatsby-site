import React from "react";


const PageContext = React.createContext({
    pageContext: {}
})

class PageContextProvider extends React.Component {

    constructor(props) {
        super(props);
        this.setPageContext = this.setPageContext.bind(this);

        this.state = {
            pageContext: this.props.pageContext,
            setPageContext: this.setPageContext
        }
    }

    setPageContext(pageContext) {
        this.setState({ pageContext })
    }


    render() {
        return (
            <PageContext.Provider value={this.state}>
                {this.props.children}
            </PageContext.Provider>
        );
    }
}

export {
    PageContext, PageContextProvider
}