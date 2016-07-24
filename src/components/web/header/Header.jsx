import React, { Component ,PropTypes} from 'react';
import {Grid,Row,Col,Suggestion} from 'eagle-ui';
import logo from './logo.png';
import './Header.less';

export default class Header extends Component {
    constructor(props) {

        super(props);
    }

    static defaultProps={

    };

    /**
     * 根据输入值查询组件
     * */
    async search(key){

        let data = await this.props.getModuleList(key);

        return data;
    }

    getSearchValue(value,key,type){

        this.props.setValueByReducers('module.val',value);
        this.props.setValueByReducers('module.key',key);
    }

    getLink(module){
        const key = module.get('key');
        return key ?<a href={module.get('val')} className="send-link" target="_blank">传送门：至 <b>{key}</b> 文档处</a>:null;
    }

    render() {
        const {module} = this.props;

        return (
            <div className="header">
                <Grid fluid className="wapper">
                   <Row>
                       <Col sm={1}>
                           <a href="http://uedfamily.com" title="future-team"><img src={logo} alt="future-team" className="logo" /></a>
                       </Col>
                       <Col sm={8}>
                           <Row className="menu-list">
                               <Col sm={2}><a href="#/index">首页</a></Col>
                               <Col sm={2}><a href="http://uedfamily.com/framework/">框架文档</a></Col>
                               <Col sm={2} end><a href="#/msg">给我留言</a></Col>
                           </Row>
                       </Col>
                       <Col sm={3} end style={{
                                marginTop:'8px',
                                position:'relative'
                               }}>
                           <Suggestion getValueCallback={::this.getSearchValue}
                                       onChange={(e)=>{}}
                                       queryCallback={::this.search}
                                       value={module.get('key')}
                               icon="search"
                               iconDirection="left"
                               placeholder="请输入组件名称进行检索"></Suggestion>
                           {this.getLink(module)}
                       </Col>
                   </Row>
                </Grid>
            </div>
        );
    }
}