import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Login from "./components/Login";
import './bootstrap.min.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {UsersList} from "./components/UsersList";

const App = function (props) {

    const [token, setToken] = useState(localStorage.getItem("token"));

    function saveToken(tok) {
        setToken(tok);
    }

    function logout(e) {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setToken(null);
    }

    return (
        <div className="container-fluid min-vh-100 h-100">
            <div className="row h-75">
                <BrowserRouter>
                    <Header logOut={logout} token={token}/>
                    <Switch>
                        <Route exact path="/login">
                            {!token ? <Login saveToken={saveToken}/> : <Redirect to="/users"/>}
                        </Route>
                        <Route exact path="/users" render={() => {
                            if (token != null) {
                                return <UsersList token={token}/>
                            } else {
                                return <Redirect to="/login"/>
                            }
                        }}/>
                        <Redirect to="/login"/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;

