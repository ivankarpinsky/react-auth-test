import React, {useState} from 'react';
import axios from 'axios';
import { useFormik } from 'formik';

const Login = function (props) {

    const [error, setError] = useState('');

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: async values => {
            try {
                let response = await axios.post('https://emphasoft-test-assignment.herokuapp.com/api-token-auth/', {
                    username: values.username,//"test_super",
                    password: values.password//"Nf<U4f<rDbtDxAPn"
                });

                if (response.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("username", values.username);
                    props.saveToken(response.data.token);
                }
            } catch (e) {
                setError("Пользователя с таким именем пользователя и паролем не существует");
                console.log(e);
            }
        },
    });

    const errorElem = error !== '' ? <div className="alert alert-danger">{error}</div> : '';

    return (
        <section className="card card-default w-50 mx-auto">
            <h4 className="card-header">Вход</h4>

            <form onSubmit={formik.handleSubmit} method="POST" className="card-body">
                {errorElem}
                <div className="form-group">
                    <label htmlFor="email-input">Имя пользователя:</label>
                    <input onChange={formik.handleChange} type="text" name="username" className="form-control"
                           id="username-input"
                           placeholder="name@example.com" value={formik.values.username}/>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password-input">Пароль:</label>
                    <input onChange={formik.handleChange} type="password" name="password" className="form-control"
                           id="password-input"
                           placeholder="******" value={formik.values.password}/>
                </div>
                <button type="submit" className="btn btn-primary btn-info px-5">Войти</button>
            </form>
        </section>
    )
};

export default Login;