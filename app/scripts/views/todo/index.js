/**
 * Created by liubo on 15/3/12.
 */
import React, { Component } from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../../stores';
import TodoApp from './TodoApp';

const Redux = createRedux(stores);
//@Provider(Redux);
export default class App extends Component {
    render() {
        return (
            <Provider redux={Redux}>
                {() => <TodoApp />}
            </Provider>
        );
    }
}