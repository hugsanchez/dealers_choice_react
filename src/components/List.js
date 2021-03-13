import React, {Component} from 'react';
import {connect} from 'react-redux';
import store, {deleteItem} from '../store';


const List = ({list, removeThing}) => {
    return (
        <div id='list'>
        <h1>Grocery List</h1>
        <ul >
        {
            list.map((item, itemIdx) =>{
                return (
                    <li key={itemIdx}>{item.name}<button onClick = {() => removeThing(itemIdx)}>X</button></li>
                    
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

const mapDispatchToProps = (dispatch) => {
    return {
        removeThing: (itemIdx) => {
            console.log(itemIdx)
            dispatch(deleteItem(itemIdx))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);