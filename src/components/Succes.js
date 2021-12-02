import React from 'react';
import style from "./styles.module.css";
import {logout, useAuth} from "../firebase";


const Success = (props) => {
    let auth = useAuth();

    const submite = async () => {
        try {
            await logout()
        } catch (e) {
            alert("ошибка")
        }
    }

    if(!auth?.email) {
        return <span>Загрузка</span>
    }
    return (
        <>
            <div className={style.card}>
                <h2>Сongratulations!</h2>
                <p>Your login: {auth?.email}</p>
                <button className={style.btn} onClick={submite}>Restore</button>

            </div>

        </>
    )
}

export default Success