import React from "react";
import { Link } from "react-router-dom";


import Header from "../components/Header";
import Titulos from "../components/Titulos/Lista";
// import Footer from "../components/Footer";

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <Titulos />
            </div>
        );
    }
}


