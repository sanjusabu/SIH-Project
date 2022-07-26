import { NavLink } from 'react-router-dom';
import classes from './header.module.css'
const Headers = ()=>
{
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
             Great Quotes
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/login' activeClassName={classes.active}>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='register' activeClassName={classes.active}>
                            Register
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
export default Headers;


