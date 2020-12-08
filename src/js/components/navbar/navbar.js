import React, {useContext} from "react";

import UserContext, {UserSetContext} from "../../contexts/user_context";

const Navbar = () => {
    const user = useContext(UserContext);
    const setUser = useContext(UserSetContext);
    console.log(user)
    return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">LOGO</a>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                    { ! user &&
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="#" 
                                id="navbarDropdown"
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false">Select User</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a 
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => setUser("Koko")}>Koko</a>
                                    <a 
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => setUser("Fran")}>Fran</a>
                                </li>
                            </ul>
                        </li>
                    }
                    { user &&
                        <>
                            <li className="nav-item">
                                <a 
                                    className="nav-link" 
                                    href="#"
                                    onClick={() => setUser(null)}>Logout</a>
                            </li>
                            <li className="nav-item navbar-text">
                                Welcome {user}
                            </li>
                        </>
                    }
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;