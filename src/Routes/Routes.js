import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import Home from '../Components/Home';
import Contact from '../Components/Contact';

export default class Routes extends Component {
    render() {

        return(
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
            </Fragment>
        );
    }
}


