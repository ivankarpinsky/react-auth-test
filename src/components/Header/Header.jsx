import React from 'react';
import {Link} from 'react-router-dom';

const Header = function (props) {
    const leftBlock = localStorage.getItem("token") ? <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <a className="nav-link" href="/users">Пользователи</a>
        </li>
    </ul> : '';

    const rightBlock = localStorage.getItem("token") ?
        <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3"><Link className="nav-link" to="#">{localStorage.getItem("username")}</Link></li>
            <li className="nav-item"><Link className="nav-link" onClick={props.logOut} to="/">выход</Link></li>
        </ul> : <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/login">Вход</Link>
            </li>
        </ul>;

    return (
        <div className="container-fluid h-auto">
            <div className="row bg-light h-auto">
                <div className="container">
                    <div className="row">
                        <nav className="navbar px-0 navbar-expand-lg navbar-light col-12">
                            <Link className="navbar-brand" to="/">Empasoft test task</Link>
                            {leftBlock}
                            {rightBlock}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;