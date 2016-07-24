//简介

import React, { Component ,PropTypes} from 'react';
import {Grid,Row,Col,Panel,PanelHeader,PanelContent,PanelFooter} from 'eagle-ui';

export default class Info extends Component {
    constructor(props) {

        super(props);
    }

    static defaultProps={

    };

    render() {
        return (
            <Row>
                <Col>
                    <Panel>
                        <PanelHeader leftFlag>简介</PanelHeader>
                        <PanelContent>
                            <Row>
                                <Col>
                                    本脚手架集成了webpack+react+redux+cortex+es6+less+postcss+babel+immutable,支持Hot Module Replacement (HMR)，对于逻辑交互比较复杂的项目，且不考虑ie9以下浏览器的情况下，使用react可降低开发的复杂度。
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>本项目还集成了：</p>

                                    <ul>
                                        <li><a href="http://uedfamily.com/documents/eagle-ui/doc/classes/Panel.html" target="_blank">eagle-ui</a> 用于pc端项目的react组件库框架</li>
                                        <li><a href="http://uedfamily.com/documents/phoenix-ui/doc" target="_blank">phoenix-ui</a> 这是一款基于react开发的一套wap端组件框架。需要依赖phoenix-style库</li>
                                        <li><a href="https://github.com/future-team/phoenix-styles" target="_blank">phoenix-styles</a> 单纯的样式库，配合文档给出的html结构使用，目前使用文档在项目中的example里</li>
                                        <li><a href="https://github.com/future-team/eg-tools" target="_blank">eg-tools</a> 提供一些较为基础的类库，如双向绑定、store可视视图调试工具、fetch、loadingbar等</li>
                                        <li><a href="" target="_blank">classnames</a> 组装className</li>
                                    </ul>
                                </Col>
                            </Row>
                        </PanelContent>
                    </Panel>
                </Col>
            </Row>
        );
    }
}