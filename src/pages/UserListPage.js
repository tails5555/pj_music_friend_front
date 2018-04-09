import React from 'react';
import {UserList} from '../component/social';
import {Header} from '../component/header';
const UserListPage = () => {
    return(
        <div>
            <Header context="Social User List" />
            <UserList />
        </div>
    )
};
export default UserListPage;