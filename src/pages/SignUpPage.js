import React from 'react';
import {SignUpForm} from '../component/sign';
import {Header} from '../component/header';
const SignUpPage = () => {
    return(
        <div>
            <Header context="Music Friend Sign Up" />
            <SignUpForm />
        </div>
    )
};
export default SignUpPage;