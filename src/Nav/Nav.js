import React, { Component } from 'react'
import {Link} from 'react-router'
import './nav.css'


class Nav extends Component {
  render() {
    return (
      <div className="navigator">
          <Link to="/">На главную</Link>
          <Link to="/news">Новости</Link>
          <Link to="/profile">Профиль</Link>
      </div>
    );
  }
}

export default Nav;
