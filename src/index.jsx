/**
 * 主程序入口
 */
import React, { Component ,PropTypes} from 'react';
import {render} from "react-dom";
import {BindReact} from 'eg-tools';

import * as reducers from './reducers/index.es6';

import { Redirect, Router, Route } from 'react-router';
import History from 'history/lib/createHashHistory';

import Index from './containers/web/Index.jsx';
import Msg from './containers/web/Msg.jsx';

class AppRouter extends Component {

    constructor(props) {
        super(props);
        // Opt-out of persistent state, not recommended.
        this.history = new History({
            queryKey: false
        });
    }

    static defaultProps={

    };

    /**
     * 页面路由总览，children为外接做入口，外接入口即为AppRouter
     * @returns {XML}
     */
    render() {
        return (
            <div>
                <Router history={this.history}>
                    <Route path="/index" component={Index} />
                    <Route path="/msg" component={Msg} />
                    <Redirect from="/" to="/index" />
                </Router>
            </div>
        );
    }
}

render(
    <BindReact Module={AppRouter} reducers={reducers} autoShowFetching={true} barName="web" autoDevTools={false} />,
    document.getElementById('root')
);