import React, {useState} from 'react';
import style from "./styles.module.css";
import {NavLink} from "react-router-dom";
import {signUp} from "../firebase";


const SignUp = (props) => {

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
            await signUp(form.login, form.pass)
        } catch (e) {
            alert("ошибка")
        }

    }

    return (
        <>
            <div className={style.card}>
                <h2>Sign Up</h2>


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

                <button className={style.btn} onClick={submite}>Sign up</button>


            </div>
            <div className="">Do you have account? <NavLink to={'/'}>Login</NavLink></div>

        </>
    )
}

export default SignUp