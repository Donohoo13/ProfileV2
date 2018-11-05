import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import Home from '../Components/Home';
import Contact from '../Components/Contact';
import Showcase from '../Components/Showcase';
import Calculator from '../Components/ShowcaseComponents/Calculator/Calculator';

export default class Routes extends Component {
    render() {

        return(
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/showcase" component={Showcase} />
                <Route path="/calculator" component={Calculator} />
            </Fragment>
        );
    }
}


