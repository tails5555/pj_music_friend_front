import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import UserRouter from './UserRouter';
class ApplicationRouter extends Component{
    render() {
        return (
            <BrowserRouter>
                <UserRouter />
            </BrowserRouter>
        )
    }
}
export default ApplicationRouter;