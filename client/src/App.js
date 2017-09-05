import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import AllArtists from './components/AllArtists';
import Artist from './components/Artist';
import SignUp from './components/SignUp';
import GlobalNav from './components/GlobalNav.js';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
         < GlobalNav />
          <Route exact path="/" component={AllArtists} />
          <Route path="/artist/:id" component={Artist} />
          <Route path= "/signup" component={SignUp}/>

        </div>
      </Router>  
    );
  }
}

export default App; 
