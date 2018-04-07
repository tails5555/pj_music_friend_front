import React from 'react';
import {MusicList} from '../component/music';
import {Header} from '../component/header';
const GuestMainPage = () => {
    return(
        <div>
            <Header context="Music Friend Home" />
            <MusicList />
        </div>
    )
};
export default GuestMainPage;