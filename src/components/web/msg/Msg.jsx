import React, { Component ,PropTypes} from 'react';
import {Grid,Row,Col,Panel,PanelHeader,PanelContent,PanelFooter,ValidatorPanel,Input,FormGroup,Button,Dialog} from 'eagle-ui';

import {bindingMixin} from 'eg-tools';

import SuccessDialog from './SuccessDialog.jsx';

import './Msg.less';

/***
 *
 * 留言表单
 */
@bindingMixin
export default class Msg extends Component {
    constructor(props) {

        super(props);

        this.rules = {
            username:{
                required:true
            },
            email:{
                email:true,
                required:true
            },
            content:{
                required:true,
                minlength:{
                    params:10
                },
                maxlength:{
                    params:250
                }
            }
        };
        this.setBinding('msg');
    }

    static defaultProps={

    };

    onChangeHandler(e){
        this.manualChange(e.target.name,e.target.value);
    }

    submitHandler(){

       this.props.save(()=>{
           Dialog.mask('msg-success')
       });

        return false;
    }

    render() {

        const {msg} = this.props;

        return (
            <Grid fluid className="readme">
                <Row>
                    <Col>
                        <h3>请填写下面的留言信息</h3>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Panel>
                            <PanelHeader leftFlag>基本信息</PanelHeader>
                            <PanelContent>
                                <ValidatorPanel rules={this.rules} submitElement="#submit" direction="right" submitCallback={::this.submitHandler} componentTag="div">
                                    <FormGroup>
                                        <Row>
                                            <Col sm={2}>昵称<b>*</b></Col>
                                            <Col sm={4} end><Input name="username" id="username" placeholder="请输入昵称" value={msg.get('username')} data-validate onChange={::this.onChangeHandler}   /></Col>
                                        </Row>
                                        <Row>
                                            <Col sm={2}>邮箱地址<b>*</b></Col>
                                            <Col sm={4} end><Input name="email" id="email" placeholder="格式:test@sina.com"  value={msg.get('email')} data-validate onChange={::this.onChangeHandler}  /></Col>
                                        </Row>
                                        <Row>
                                            <Col sm={2}>留言内容<b>*</b></Col>
                                            <Col sm={4} end><textarea rows="4" name="content" data-validate valueLink={this.binding('content')} ></textarea></Col>
                                        </Row>
                                        <Row>
                                            <Col sm={2}></Col>
                                            <Col sm={4} end style={{
                                                textAlign:'right'
                                            }}><Button id="submit">提交</Button></Col>
                                        </Row>
                                    </FormGroup>
                                </ValidatorPanel>

                            </PanelContent>
                        </Panel>
                    </Col>
                </Row>
                <SuccessDialog msg = {msg}></SuccessDialog>
            </Grid>
        );
    }
}