import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Flask Simple App</a>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Главная</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tasks">Задачи</a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    {/*{if (props.user) }*/}
                    {/*<li className="nav-item">*/}
                    {/*    <a className="nav-link" href="#"><i className="fas fa-user-circle"></i> {{user.email}}</a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item">*/}
                    {/*    <a className="nav-link" href="/logout"><i className="fas fa-sign-out-alt"></i> Выход</a>*/}
                    {/*</li>*/}
                    {/*{% else %}*/}
                    <li className="nav-item">
                        <a className="nav-link" href="/login"><i className="fas fa-sign-in-alt"></i> Вход</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/registration"><i
                            className="fas fa-user-plus"></i> Регистрация</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;