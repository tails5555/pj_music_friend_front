import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {UserMenu} from '../component/menu';
import {Footer} from '../component/footer';
import {GuestMainPage, UserMainPage, MyLikeListPage, UserListPage} from '../pages';
import './main.css';
class UserRouter extends Component{
    render(){
        return(
            <div>
                <UserMenu />
                <div className="mainScreen">
                    <Route exact path="/" component={UserMainPage}/>
                    <Route exact path="/music/{id}" component={GuestMainPage} />
                    <Route exact path="/myLikeList" component={MyLikeListPage}/>
                    <Route exact path="/social" component={UserListPage} />
                    <Route exact path="/social/{id}" />
                    <Route exact path="/myFriendList" />
                    <Route exact path="/user/logout" render={() => (<Redirect to="/" />)}/>
                </div>
                <Footer />
            </div>
        );
    }
}
export default UserRouter;