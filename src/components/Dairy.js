import axios from 'axios';
import React, {Component} from 'react';

class Dairy extends Component{
    constructor(){
        super();
        this.state ={
            dairy:[]
        }
    }
    async componentDidMount(){
        try{
            const dairy = (await axios.get('/api/dairy')).data;
            this.setState({dairy})
        } catch(ex){
            console.log(ex);
        }
    }
    render(){
        const{dairy} = this.state;
        return(
            <div id='product'>
                {
                    dairy.map((currDairy, dairyIdx) =>{
                       return( <div key={dairyIdx}>
                           {currDairy.name}
                           <button>ADD</button>
                           </div>)
                    })
                }
            </div>
        )
    }
}

export default Dairy;