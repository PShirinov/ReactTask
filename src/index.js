import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import Main from './Main/Main'
import Login from './Login/Login'
import NewsList from './NewsList/NewsList'
import Profile from './Profile/Profile'
import {newsData} from './News/newsData'



ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/news' component={NewsList} newsData={newsData} />
        <Route path='/profile' component={Profile} onEnter={Profile.onEnter}/>
    </Router>,
    document.getElementById('root')
    );

