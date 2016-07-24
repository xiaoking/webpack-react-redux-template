//配置信息详解
import React, { Component ,PropTypes} from 'react';
import {Grid,Row,Col,Panel,PanelHeader,PanelContent,PanelFooter} from 'eagle-ui';

export default class ConfigInfo extends Component {
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
                        <PanelHeader leftFlag>配置文件详解</PanelHeader>
                        <PanelContent>
                            <Row>
                                <Col>

                                </Col>
                            </Row>

                        </PanelContent>
                    </Panel>
                </Col>
            </Row>
        );
    }
}