import React, {Component} from 'react'
import './profile.css'
import Nav from '../Nav/Nav'
import {browserHistory} from 'react-router'

class Profile extends Component {
    static onEnter() {
        const auth = window.localStorage.getItem('auth')
        console.log(auth);
        if (auth !== 'true') {
            browserHistory.push('/login')
        }
    }
        render(){
            return (
                <div>
                    <Nav/>
                    <div className="profile">
                        <p>Профиль пользователя, где отображается информация о нём</p>
                    </div>
                </div>
            );
        }
}

export default Profile