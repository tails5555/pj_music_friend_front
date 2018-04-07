import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import GuestRouter from './GuestRouter';
class ApplicationRouter extends Component{
    render() {
        return (
            <BrowserRouter>
                <GuestRouter />
            </BrowserRouter>
        )
    }
}
export default ApplicationRouter;