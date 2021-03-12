import React, {Component} from 'react';
import {connect} from 'react-redux';
import store, {addItem} from '../store';


const Dairy = ({dairy, add}) => {
    return (
        <div id='product'>
        {
            dairy.map((currDairy, dairyIdx) =>{
               return( <div key={dairyIdx} className='dairy'>
                   {currDairy.name}
                   <button onClick = {() => add(currDairy.name)}>ADD</button>
                   </div>)
            })
        }
    </div>
    );
}; 

const mapStateToProps = ({dairy}) => {
    return{
        dairy
    };  
};

const mapDispatchToProps = (dispatch) => {
    return {
            add: (name) => {
            dispatch(addItem(name))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dairy);