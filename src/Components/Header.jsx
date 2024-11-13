import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

function Header(){
    return (
        <header>
            <div className="inner">
                <div className="name">
                    wesleyaldrich
                </div>
                <nav>
                    <NavLink to="/" className="nav-link" activeClassName="active" end>
                        <span>#</span>home
                    </NavLink>
                    <NavLink to="/projects" className="nav-link" activeClassName="active">
                        <span>#</span>projects
                    </NavLink>
                    <NavLink to="/about-me" className="nav-link" activeClassName="active">
                        <span>#</span>about-me
                    </NavLink>
                    <NavLink to="/music" className="nav-link" activeClassName="active">
                        <span>#</span>music
                    </NavLink>
                </nav>
                <BurgerMenu />
            </div>
        </header>
    )
}

export default Header;