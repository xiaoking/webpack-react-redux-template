//获取方式

import React, { Component ,PropTypes} from 'react';
import {Grid,Row,Col,Panel,PanelHeader,PanelContent,PanelFooter} from 'eagle-ui';

export default class AccessInfo extends Component {
    constructor(props) {

        super(props);
    }

    render() {
        return (
            <Row>
                <Col>
                    <Panel>
                        <PanelHeader leftFlag>获取方式</PanelHeader>
                        <PanelContent>
                            <Row>
                                <Col>
                                    <p>通过脚手架工具安装，具体步骤如下：</p>
                                    <p>1. <b>npm install yo -g</b>（可能需要sudo权限）</p>
                                    <p>2. <b>npm install generator-future-static</b></p>
                                    <p>3. 安装好上面两个依赖，cd 进入到本地空项目文件夹下，在控制台中执行<b>yo future-static</b>，根据提示选择此脚手架</p>
                                    <p>4. 根据系统提示输入项目信息即可完成项目初始化的创建</p>
                                </Col>
                            </Row>

                        </PanelContent>
                    </Panel>
                </Col>
            </Row>
        );
    }
}