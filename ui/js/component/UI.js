import store from '@/core/store';
import '@css/ui.less';
import React from 'react';


import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';


function UI(props) {
    return <Provider store={store}>
        <Router>
            <div className='app-root'>

            </div>
        </Router>
    </Provider>;
}


export default UI;
