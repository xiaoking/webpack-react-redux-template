//目录结构
import React, { Component ,PropTypes} from 'react';
import {Grid,Row,Col,Panel,PanelHeader,PanelContent,PanelFooter} from 'eagle-ui';

export default class DirInfo extends Component {
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
                        <PanelHeader leftFlag>目录结构</PanelHeader>
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