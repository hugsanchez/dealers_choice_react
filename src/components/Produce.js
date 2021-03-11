import axios from 'axios';
import React, {Component} from 'react';

class Produce extends Component{
    constructor(){
        super();
        this.state ={
            produce:[]
        }
    }
    async componentDidMount(){
        try{
            const produce = (await axios.get('/api/produce')).data;
            this.setState({produce})
        } catch(ex){
            console.log(ex);
        }
    }
    render(){
        const{produce} = this.state;
        return(
            <div id='product'>
                {
                    produce.map((currPro, proIdx) =>{
                       return( <div key={proIdx}>
                           {currPro.name}
                           <button>ADD</button>
                           </div>)
                    })
                }
            </div>
        )
    }
}

export default Produce;