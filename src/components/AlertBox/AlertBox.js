import React from 'react';
import ReactDOM from 'react-dom';
import './alert-box.css';


class AlertBoxContent extends React.Component {
    render() {

        return (
            <div className={`alert-box--container ${this.props.type.toLowerCase()}`}>
                {this.props.title && <>
                    <h4 className="title">{this.props.title}</h4>
                    <hr/>
                </>}
                <div className="description">
                    {this.props.children}
                </div>



                <div className="actions">
                    <input type="button" value="Close" data-allowclose={true} onClick={this.props.remove}/>
                </div>

            </div>
        );
    }
}

class AlertBoxContainer extends React.Component {




    componentDidMount() {
        this.alertBoxModal = document.createElement("div");
        this.alertBoxModal.id = "alert-box--modal";
        this.alertBoxModal.className = "alert-box--modal";

        this.remove = this.remove.bind(this);
        this.show = this.show.bind(this);
    }

    show({title, text, type = "INFO"}) {
        this.alertBoxModal.onclick = this.remove;
        document.onkeypress = this.remove;
        document.body.appendChild(this.alertBoxModal);

        const AlertBox = React.createElement(AlertBoxContent, {
            title, type,
            remove: () => this.remove
        }, text);

        ReactDOM.render(AlertBox, this.alertBoxModal);

        setTimeout(() => {
            this.alertBoxModal.classList.toggle("active");
        }, 1)
    }

    success(data) {
        this.show({ ...data, type: "SUCCESS"});
    }

    error(data) {
        this.show({ ...data, type: "ERROR"});
    }

    remove(e) {

        const allowClose = e.target.getAttribute("data-allowclose");

        const isEnterOrEscKeyPress = ((e.which || e.keyCode) === 13) || ((e.which || e.keyCode) === 27);

        if (e.target === this.alertBoxModal || allowClose || isEnterOrEscKeyPress)
        {
            document.onkeypress = null;
            this.alertBoxModal.onclick = null;
            this.alertBoxModal.classList.toggle("active");
            setTimeout(() => {
                document.body.removeChild(this.alertBoxModal);
            }, 200);
        }
    }

    render() {
        return null;
    }
}

const AlertBox = new AlertBoxContainer();


export default AlertBox;