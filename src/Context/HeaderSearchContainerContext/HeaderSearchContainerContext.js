import React from "react";


const HeaderSearchContainerContext = React.createContext({
    isOpen: false
});


class HeaderSearchContainerProvider extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false,
            toggle: this.toggle
        }

    }


    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render() {
        return (
            <HeaderSearchContainerContext.Provider value={this.state}>
                {this.props.children}
            </HeaderSearchContainerContext.Provider>
        );
    }

}

export {
    HeaderSearchContainerContext,
    HeaderSearchContainerProvider
}