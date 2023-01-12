import {NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"
import { useSelector } from "react-redux"
import { UserMenu } from "components/UserMenu/UserMenu"
import css from "components/Header/Header.module.css"

export const Header = () => {
    const isLogin = useSelector(state => state.user.isLogin);

    return (
        <>
        <header>
            <div className={css.logoutContainer}>
                <NavLink style={{ TextDecoderation: "none" }} to="/" end>
                    Home
                </NavLink>
                {isLogin && <NavLink style={{ TextDecoderation: "none" }} to="/contacts">Contacts</NavLink>}
            </div>
            {!isLogin && (
                <div className={css.logoutContainer}>
                    <NavLink style={{ TextDecoderation: "none" }} to="/register">Register</NavLink >
                    <NavLink style={{ TextDecoderation: "none" }} to="/login">Login</NavLink >
                </div>
            )}
            {isLogin && <UserMenu />}
        </header>
        <Suspense fallback={<div>Loading...</div>}>
             <Outlet />   
        </Suspense>
        </>
    )
}