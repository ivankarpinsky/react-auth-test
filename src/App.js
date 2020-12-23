import logo from './logo.svg';
import React from 'react'
import './App.css';
import './bootstrap.min.css';
import Header from "./components/Header/Header";
import Login from "./components/Login"
import Registration from "./components/Registration"
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('http://emphasoft-test-assignment.herokuapp.com/api-token-auth', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: "test_super",
                password: "Nf<U4f<rDbtDxAPn"
            })
        })
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/login" render={() => <Login/>}/>
                        <Route exact path="/registration" render={() => <Registration/>}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
