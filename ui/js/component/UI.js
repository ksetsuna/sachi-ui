import store from '@/core/store';


import ImportView from '@/module/category/ImportView';
import '@css/ui.less';
import React from 'react';


import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';

const UI = (props) => <Provider store={store}>
    <Router>
        <div className='app-root'>
            <div className='main-content'>
                <ImportView/>
            </div>
        </div>
    </Router>
</Provider>;


export default UI;
