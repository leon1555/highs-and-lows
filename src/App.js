import React from 'react';
import './App.css';

import About from './About';
import Game from './Game';
import Home from './Home';
import Records from './Records';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/game" exact component={Game}/>
                    <Route path="/records" exact component={Records}/>
                </Switch>
            </div>
        </Router>
    )
    
}

export default App;