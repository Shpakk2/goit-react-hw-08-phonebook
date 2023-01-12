import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import css from "pages/Home/Home.module.css"

const Home = () => {
    const isLogin = useSelector(state => state.user.isLogin);

    return (
        <div>
            {isLogin ? (
                <div className={css.wrap}>
                    <h3> Welcome to Phonebook!</h3>
                    <p>Check Your contact least:</p>
                    <NavLink style={{ TextDecoderation: "none" }} to="/contacts">
                        Contacts
                    </NavLink>
                </div>
            ) : (
                <div className={css.wrap}>
                    <h3> Welcome to Phonebook!</h3>
                    <p>Please Login or Register</p>
                    <NavLink style={{ TextDecoderation: "none" }} to="/register">
                        Register
                    </NavLink>
                    <NavLink style={{ TextDecoderation: "none" }} to="/login">
                        Login
                    </NavLink>
                </div>
            )}
        </div>
    )
};

export default Home;