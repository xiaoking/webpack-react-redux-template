import React, { Component ,PropTypes} from 'react';
import { connect } from 'react-redux';

import TestC from '../components/Test/Test.jsx';
import * as TestAction from '../actions/test.es6';
import {bindingMixin} from 'eg-tools';


@connect(state => ({
    test: state.test
}), TestAction)
@bindingMixin
export default class TestWebContainer extends Component {
    constructor(props) {
        super(props);
        this.props.query();
        this.setBinding('test');


        this.state={
            name:''
        };
    }

    static defaultProps={

    };

    render() {
        //this.binding('name')
        return (
            <div>
                <TestC />
                <input type="text"  valueLink={this.binding('name')  } />
                {this.props.test.get('name') }
            </div>
        );
    }
}