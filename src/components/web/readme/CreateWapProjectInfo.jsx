//创建wap项目
import React, { Component ,PropTypes} from 'react';
import {Grid,Row,Col,Panel,PanelHeader,PanelContent,PanelFooter} from 'eagle-ui';

export default class CreateWapProjectInfo extends Component {
    constructor(props) {

        super(props);
    }

    render() {
        return (
            <Row>
                <Col>
                    <Panel>
                        <PanelHeader leftFlag>创建wap项目</PanelHeader>
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