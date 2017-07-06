import React from "react";

import Cabecalho from "./Header/Title";
import Navegacao from "./Header/Nav";

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Navegacao />
                <Cabecalho />
            </div>
        );
    }
}
