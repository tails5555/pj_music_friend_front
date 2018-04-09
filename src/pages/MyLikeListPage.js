import React from 'react';
import {MyLikeList} from '../component/music';
import {Header} from '../component/header';
const MyLikePage = () => {
    return(
        <div>
            <Header context="My Like List" />
            <MyLikeList />
        </div>
    )
};
export default MyLikePage;