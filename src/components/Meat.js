import axios from 'axios';
import React, {Component} from 'react';

class Meat extends Component{
    constructor(){
        super();
        this.state ={
            meat:[]
        }
    }
    async componentDidMount(){
        try{
            const meat = (await axios.get('/api/meat')).data;
            this.setState({meat})
        } catch(ex){
            console.log(ex);
        }
    }
    render(){
        const{meat} = this.state;
        return(
            <div id='product'>
                {
                    meat.map((currMeat, meatIdx) =>{
                       return( <div key={meatIdx}>
                           {currMeat.name}
                           <button>ADD</button>
                           </div>)
                    })
                }
            </div>
        )
    }
}

export default Meat;