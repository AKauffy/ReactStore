
import { user, AuthContextType } from '../types';
import { useContext } from 'react';
import { AuthContext } from '../App';


const NavBar: React.FC = () => {
    const {loggedIn, checkLoginState, user } = useContext<AuthContextType>(AuthContext);

    return (
        <>
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Jade's Oysters</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <a>{user?.name}</a>
        </nav>
        </>
    )
}

export default NavBar;