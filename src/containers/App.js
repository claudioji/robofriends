import React,{useState,useEffect} from "react";
import CardList from '../components/CardList'
//import {robots} from './robots';
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";


function App() {
    /*constructor(){
        super();
        this.state = {
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users => this.setState({robots: users}));
    }*/

    
    const [robots, setRobots] = useState([]);
    const [searchfield,setSearchField] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users => setRobots(users));
    },[])


    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }
    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
        <h1>Loading</h1> :
    (
        <div className="tc">
            <h1 className="f1">Robofriends</h1>
            
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    );

}

export default App;