import React from "react";
import { Link } from "react-router-dom";

export default class Main extends React.Component {

    render() {
        return (
            <div>
                <section class="section">
                    <div class="container">
                        <h1 class="title">Movie React Flix</h1>
                        <h2 class="subtitle">
                        Projeto básico para estudo de ReactJS
                        </h2>
                        <br/>
                        <h1 class="title">Uso</h1>
                        <h2 class="subtitle">
                        Após clonar este projeto, basta executar os seguinte comandos:
                        </h2>
                        <blockquote>$ npm install</blockquote>
                        <blockquote>$ npm run dev</blockquote>
                    </div>
                </section>
            </div>
        );
    }
}
