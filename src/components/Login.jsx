import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="card card-default w-50 mx-auto">
                <h4 className="card-header">Вход</h4>

                <form action="/login" method="POST" className="card-body">
                    {/*{% if error %}*/}
                    {/*<div className="alert alert-danger">*/}
                    {/*    {{error}}*/}
                    {/*</div>*/}
                    {/*{% endif %}*/}

                    <div className="form-group">
                        <label htmlFor="email-input">Email:</label>
                        <input type="email" name="email" className="form-control" id="email-input"
                               placeholder="name@example.com" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password-input">Пароль:</label>
                        <input type="password" name="password" className="form-control" id="password-input"
                               placeholder="******" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-info px-5">Войти</button>
                </form>
            </section>
        )
    }
}

export default Login;