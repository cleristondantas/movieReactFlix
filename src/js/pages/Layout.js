import React from "react";
import { Link } from "react-router";


import Header from "../components/Header";
import Titulos from "../components/Titulos/Lista";
import Footer from "../components/Footer";

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Olá",
        }
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>
            <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <Titulos />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
