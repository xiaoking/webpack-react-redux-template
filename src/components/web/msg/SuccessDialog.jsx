//获取方式

import React, { Component ,PropTypes} from 'react';
import {Grid,Row,Col,Panel,PanelHeader,PanelContent,PanelFooter,Dialog} from 'eagle-ui';

export default class SuccessDialog extends Component {
    constructor(props) {

        super(props);
    }

    render() {

        const {msg} = this.props;
        return (
            <Dialog id="msg-success" egSize="sm" title="提交成功">
                <p>恭喜你提交成功！</p>
                <p>昵称：{msg.get('username')}</p>
                <p>email：{msg.get('email')}</p>
                <p>留言内容：{msg.get('content')}</p>
            </Dialog>
        );
    }
}