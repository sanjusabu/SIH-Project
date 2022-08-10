import { NavLink } from 'react-router-dom';
import classes from './header.module.css'
import { AuthContext } from '../../context/authcontext';
import { useContext } from 'react';
const Headers = () => {
    const auth = useContext(AuthContext)
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                Great Quotes
            </div>
            <nav className={classes.nav}>
                <ul>
                    {!auth.isLoggedIn && (
                        <li>
                            <NavLink to='/login' activeClassName={classes.active}>
                                Login
                            </NavLink>
                        </li>)}

                    {!auth.isLoggedIn && (
                        <li>
                            <NavLink to='register' activeClassName={classes.active}>
                                Register
                            </NavLink>
                        </li>)}
                </ul>
            </nav>

        </header>
    )
}
export default Headers;


