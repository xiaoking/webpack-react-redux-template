import React, { Component ,PropTypes} from 'react';
import { connect } from 'react-redux';

import Header from '../../components/web/header/Header.jsx';
import Readme from '../../components/web/readme/Readme.jsx';
import Content from '../../components/web/content/Content.jsx';
import * as IndexAction from '../../actions/index.es6';
import {bindingMixin} from 'eg-tools';

import Parcel from './Parcel.jsx';


@connect(state => ({
    home: state.home
}), IndexAction)
@bindingMixin
export default class Index extends Component {
    constructor(props) {
        super(props);

        this.setBinding('home');
    }

    render() {

        return (
            <Parcel>
                <Readme></Readme>
            </Parcel>
        );
    }
}