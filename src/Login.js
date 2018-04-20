import React, {Component} from 'react'
import {browserHistory} from 'react-router'


class Login extends Component {

    render(){
        return(
            <div>
                <p>Страница авторизации</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Введите логин"/>
                    <input type="text" placeholder="Введите пароль"/>
                    <button type="submit">Войти</button>
                </form>
            </div>
        );
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const login = e.target.elements[0].value;
        const pass = e.target.elements[1].value;
        window.localStorage.setItem('site_login', login)
        window.localStorage.setItem('site_pass', pass)

        if(login === 'admin' && pass == '12345') {
            window.localStorage.setItem('auth', "true")
            browserHistory.push('/profile')
        } else {
            alert('Имя пользователя или пароль введены не верно')
        }

    }

}


export default Login
