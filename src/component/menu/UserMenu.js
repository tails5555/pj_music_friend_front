import React from 'react';
import {Link} from 'react-router-dom';
const UserMenu = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Music Friend</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myLikeList">
                            My Like Music
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/social">
                            Social
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myFriendList">
                            Friend List
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user/logout">
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
            <span>누구님 환영합니다.</span>
        </nav>
    );
}
export default UserMenu;