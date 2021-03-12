import React, {Component} from 'react';
import {connect} from 'react-redux';
import store, {addItem} from '../store';

const Produce = ({produce, add}) => {
    return (
        <div id='product'>
        {
            produce.map((currPro, proIdx) =>{
               return( <div key={proIdx} className='produce'>
                   {currPro.name}
                   <button onClick ={ () => add(currPro.name)}>ADD</button>
                   </div>)
            })
        }
    </div>
    );
}; 

const mapStateToProps = ({produce}) => {
    return{
        produce
    };  
};

const mapDispatchToProps = (dispatch) => {
    return {
            add: (name) => {
            dispatch(addItem(name))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Produce);