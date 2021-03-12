import React, {Component} from 'react';
import {connect} from 'react-redux';

const Nav = ({count}) => {
    return(
        <nav>
            <a href='#'>List({count})</a>
            <a href='#produce'>Produce</a>
            <a href='#meat'>Meats</a>
            <a href='#dairy'>Dairy</a>
        </nav>
        
    )
}

const mapStateToProps = ({list}) => {
    return{
        count: list.length
    };
};

export default connect(mapStateToProps)(Nav);