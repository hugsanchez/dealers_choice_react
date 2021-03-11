import React, {Component} from 'react';
import axios from 'axios';
import Nav from './Nav';
import Produce from './Produce';
import Meat from './Meat';
import Dairy from './Dairy';

class App extends Component{
    constructor(){
        super();
        this.state = {
            list:[],
            view:''
        }
    }
    async componentDidMount(){
        window.addEventListener('hashchange', ()=> {
            console.log(window.location.hash.slice(1))
            this.setState({view: window.location.hash.slice(1)})
        })
        this.setState({view:window.location.hash.slice(1)})
    }
    render(){
        const {list, view} = this.state;

        return(
            <div>
                <Nav/>
                <h1>Grocery List</h1>
                <ul>
                    {
                        list.map(item =>{
                            return (
                                <li>{item.name}</li>
                            )
                        })
                    }
                </ul>
                {view === 'produce' ? <Produce /> : view === 'meat' ? <Meat /> : view === 'dairy' ? <Dairy/> : ''}
            </div>
        );
    }
}

export default App;