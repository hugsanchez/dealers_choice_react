import React, {Component} from 'react';
import {connect} from 'react-redux';


const List = ({list}) => {
    return (
        <div id='list'>
        <h1>Grocery List</h1>
        <ul >
        {
            list.map((item, itemIdx) =>{
                return (
                    <li key={itemIdx}>{item.name}</li>
                )
            })
        }
    </ul>
    </div>
    );
}; 

const mapStateToProps = ({list}) => {
    return {
        list
    }
};

export default connect(mapStateToProps)(List);