import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {UserMenu} from '../component/menu';
import {Footer} from '../component/footer';
import './main.css';
class UserRouter extends Component{
    render(){
        return(
            <div>
                <UserMenu />
                <div className="mainScreen">
                    <Route exact path="/" />
                    <Route exact path="/myLikeList" />
                    <Route exact path="/myFriendList" />
                    <Route exact path="/user/logout" render={() => (<Redirect to="/" />)}/>
                </div>
                <Footer />
            </div>
        );
    }
}
export default UserRouter;