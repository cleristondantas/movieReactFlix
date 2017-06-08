import React from "react";

import Title from "./Header/Title";
import Nav from "./Header/Nav";

export default class Header extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <div>
                <Nav />
                <Title title={this.props.title} />
            </div>
        );
    }
}
