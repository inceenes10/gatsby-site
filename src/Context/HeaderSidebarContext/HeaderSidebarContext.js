import React from "react";



let HeaderSidebarContext = React.createContext({
    isOpen: false
});

class HeaderSidebarProvider extends React.Component {


    constructor(props) {
        super(props);
        this.toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            });
        };
        this.state = {
            isOpen: false,
            toggle: this.toggle
        };
    }
    updateDimensions = () => {
        if (window.innerWidth > 800) {
            this.setState({
                isOpen: false
            });
        }
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }



    render() {
        return (
            <HeaderSidebarContext.Provider value={this.state}>
                {this.props.children}
            </HeaderSidebarContext.Provider>
        );
    }

}

export {
    HeaderSidebarContext,
    HeaderSidebarProvider
}