import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import Home from '../Components/Home';

export default class Routes extends Component {
    render() {

        return(
            <Fragment>
                <Route exact path="/" component={Home} />
            </Fragment>
        );
    }
}


