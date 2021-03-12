import React, {Component} from 'react';
import axios from 'axios';
import Nav from './Nav';
import Produce from './Produce';
import Meat from './Meat';
import Dairy from './Dairy';
import List from './List';
import {connect} from 'react-redux'
import store, {loadProducts} from '../store';

class App extends Component{
    constructor(){
        super();
        this.state = {
            view:'',
        }
    }
    async componentDidMount(){
        window.addEventListener('hashchange', ()=> {
            this.setState({view: window.location.hash.slice(1)})
        })
        this.setState({view:window.location.hash.slice(1)})
        this.props.load()
    }
    render(){
        const {view} = this.state;
        const {list} = this.props;

        return(
            <div>
                <Nav/>
                {view === 'produce' ? <Produce /> : view === 'meat' ? <Meat /> : view === 'dairy' ? <Dairy/> : <List/>}
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        load: async() => {
            const produce = (await axios.get('/api/produce')).data;
            const meat = (await axios.get('/api/meat')).data;
            const dairy = (await axios.get('/api/dairy')).data;

            dispatch(loadProducts(produce,meat,dairy));
        },
    }
}

export default connect(null, mapDispatchToProps)(App);