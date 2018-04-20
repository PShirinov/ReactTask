import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import Main from './Main';
import Login from './Login';
import News from './News';
import Profile from './Profile';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/news' component={News} />
        <Route path='/profile' component={Profile} onEnter={Profile.onEnter}/>
    </Router>,
    document.getElementById('root')
    );

