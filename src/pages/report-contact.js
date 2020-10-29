import React from "react";



class ReportContact extends React.Component {


    componentDidMount() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const key = searchParams.get("key");

        if (key) {
            console.log(key);
        }
    }



    render() {
        return (
            <div>
                Enes ince
            </div>
        )
    }

}



export default ReportContact;