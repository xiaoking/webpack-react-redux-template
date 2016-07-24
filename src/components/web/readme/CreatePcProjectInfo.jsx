//创建pc项目
import React, { Component ,PropTypes} from 'react';
import {Grid,Row,Col,Panel,PanelHeader,PanelContent,PanelFooter} from 'eagle-ui';

export default class CreatePcProjectInfo extends Component {
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
                        <PanelHeader leftFlag>创建pc项目</PanelHeader>
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