import React from 'react';

class Registration extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="card card-default w-50 mx-auto">
                <h4 className="card-header">Регистрация</h4>
                <form action="/registration" method="POST" className="card-body">
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
                    <div className="form-group">
                        <label htmlFor="password-input">Пароль:</label>
                        <input type="password" name="password" className="form-control" id="password-input"
                               placeholder="******" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2-input">Повтор пароля:</label>
                        <input type="password" name="password2" className="form-control" id="password2-input"
                               placeholder="******" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-info">Зарегистрироваться</button>
                </form>
            </section>
        )
    }
}

export default Registration;