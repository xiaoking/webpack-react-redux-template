//注意事项
import React, { Component ,PropTypes} from 'react';
import {Grid,Row,Col,Panel,PanelHeader,PanelContent,PanelFooter} from 'eagle-ui';

export default class MattersInfo extends Component {
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
                        <PanelHeader leftFlag>注意事项</PanelHeader>
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