import React from 'react';
import './title.css';
const Header = (props) => {
    return(
        <div class="text-center">
            <div class="title">
                {props.context}
            </div>
        </div>
    )
}
export default Header;