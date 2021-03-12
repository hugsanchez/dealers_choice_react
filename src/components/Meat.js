import React, {Component} from 'react';
import {connect} from 'react-redux';
import store, {addItem} from '../store';


const Meat = ({meat, add}) => {
    return (
        <div id='product'>
        {
            meat.map((currMeat, meatIdx) =>{
               return( <div key={meatIdx} className='meat'>
                   {currMeat.name}
                   <button onClick ={() => add(currMeat.name)}>ADD</button>
                   </div>)
            })
        }
    </div>
    );
}; 

const mapStateToProps = ({meat}) => {
    return{
        meat
    };  
};

const mapDispatchToProps = (dispatch) => {
    return {
            add: (name) => {
            dispatch(addItem(name))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meat);