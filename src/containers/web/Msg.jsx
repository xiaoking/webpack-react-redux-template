import React, { Component ,PropTypes} from 'react';
import { connect } from 'react-redux';

import MsgComp from '../../components/web/msg/Msg.jsx';
import * as MsgAction from '../../actions/msg.es6';
import {bindingMixin} from 'eg-tools';

import Parcel from './Parcel.jsx';


@connect(state => ({
    msg: state.msg
}), MsgAction)
@bindingMixin
export default class Msg extends Component {
    constructor(props) {
        super(props);

        //this.props.query();

        this.setBinding('msg');
    }

    static defaultProps={

    };



    render() {

        return (
            <Parcel>
                <MsgComp {...this.props}></MsgComp>
            </Parcel>
        );
    }
}