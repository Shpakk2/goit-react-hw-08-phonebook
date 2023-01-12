import { useDispatch } from 'react-redux';
import { logout } from 'redux/operations';
import { useSelector } from 'react-redux';
import css from "components/UserMenu/UserMenu.module.css"

export const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.user.user.email);

    return (
        <div className={css.container}>
            <p>Hello, {userName}</p>
            <button type="button" onClick={() => dispatch(logout())} >Logout</button>
        </div>
    )
}