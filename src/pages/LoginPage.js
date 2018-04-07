import React from 'react';
import {LoginForm} from '../component/login';
import {Header} from '../component/header';
const LoginPage = () => {
    return(
        <div>
            <Header context="Music Friend Login" />
            <LoginForm />
        </div>
    )
};
export default LoginPage;