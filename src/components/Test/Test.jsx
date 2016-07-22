import "./test.less";
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component ,PropTypes} from 'react';
import {bindingMixin} from 'eg-tools';


@bindingMixin
export default class Test extends Component{

    constructor(props) {
        super(props);
        this.setBinding('test');
    }

    render() {
        //this.manualChange('name','binding');
        return (
            <div className="test">
            </div>
        );
    }
}
