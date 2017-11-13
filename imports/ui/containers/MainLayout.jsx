import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../components/Header.jsx';
import Register from '../pages/Register.jsx';
import Display from '../pages/Display.jsx';
import NotFound from '../pages/NotFound.jsx';
import Login from '../pages/Login.jsx';
import AddItem from '../pages/AddItem.jsx';
import RemoveItem from '../pages/RemoveItem.jsx';


export default class MainLayout extends React.Component {

  render() {
  
    return (
	<MuiThemeProvider>
      <Router>
        <div>
          <Header />
            <Switch>
			  <Route exact path='/' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path = '/display' component={Display} />
			  <Route exact path = '/additem' component={AddItem} />
			  <Route exact path = '/additem/:id' component={AddItem} />
			  <Route exact path = '/removeitem/:id' component={RemoveItem} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
	</MuiThemeProvider>
    );
  }
}
{/**/}