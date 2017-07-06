import React from "react";

export default class Detalhe extends React.Component {
    render() {

        const { query } = this.props.location;
        const { params } = this.props;

        return (
            <div class="alert alert-warning">
                <p>Detalhe</p>
            </div>
        );
    }
}
