import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {GuestMenu} from '../component/menu';
import {Footer} from '../component/footer';
import {GuestMainPage, LoginPage, SignUpPage} from "../pages";
import './main.css';
class GuestRouter extends Component{
    render(){
        return(
            <div>
                <GuestMenu />
                <div className="mainScreen">
                    <Route exact path="/" component={GuestMainPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/sign" component={SignUpPage} />
                    <Route exact path="/user/logout" render={() => (<Redirect to="/" />)}/>
                </div>
                <Footer />
            </div>
        );
    }
}
export default GuestRouter;