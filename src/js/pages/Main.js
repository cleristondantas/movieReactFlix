import React from "react";
import { Link, Route, Switch  } from "react-router-dom";

import Header from "../components/Header";
import Lista from "../components/Titulos/Lista";
import Home from "../pages/Home";
import Detalhe from "../components/Titulos/Detalhe";

const Conteudo = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/lista' component={Lista}/>
        <Route path='/detalhes/:id' component={Detalhe}/>
    </Switch>
  </main>
)

export default class Main extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Conteudo />
            </div>
        );
    }
}
