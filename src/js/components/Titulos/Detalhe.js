import React from "react";

export default class Detalhe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    render() {

        const idFilme = this.props.params;
        const query = this.props.location;
        const params = this.props;



        console.log(params);
        console.log(query)

        return (
            <div class="alert alert-warning">
                <p>{this.params}</p>
            </div>
        );
    }
}
