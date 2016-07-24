import React, { Component ,PropTypes} from 'react';
import {Grid,Row,Col,Suggestion} from 'eagle-ui';
import './Content.less';

/***
 *
 * 主内容区域
 */
export default class Content extends Component {
    constructor(props) {

        super(props);
    }

    static defaultProps={

    };

    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        );
    }
}