import React, { Component } from 'react';
import './CSS/Resume.css';

export default class Resume extends Component {
    render() {

        return(
<div className="embed-responsive embed-responsive-16by9 resume">
  <iframe className="embed-responsive-item" title="pdfFile" src="Resume.pdf" allowfullscreen></iframe>
</div>
        )
    }
};
