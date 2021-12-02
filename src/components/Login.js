import React, {useState} from 'react';
import style from './styles.module.css'
import {NavLink} from "react-router-dom";
import {logIn} from "../firebase";


const Login = (props) => {
    const [form, setFormValue] = useState({
        login: '',
        pass: '',

    })

    const handleChangeField = (e) => {

        setFormValue(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })

    }

    const submite = async () => {
        try {
            await logIn(form.login, form.pass)
        } catch (e) {
            alert("ошибка")
        }

    }
    return (
        <>
            <div className={style.card}>
                <h2>Log In</h2>


                <div className={style.formControl}>
                    <label htmlFor="login">Email</label>
                    <input className={style.input} name="login" onChange={handleChangeField} autoComplete="off"
                           type="text"/>
                </div>
                <div className={style.formControl}>
                    <label htmlFor="pass">Password</label>
                    <input className={style.input} name="pass" onChange={handleChangeField} autoComplete="off"
                           type="password"/>
                </div>


                <button className={style.btn} onClick={submite}>Login</button>


            </div>
            <div className="">Don't have account? <NavLink to={'/signUp'}>Sign up</NavLink></div>

        </>
    )
}

export default Login