import React, { Component } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import AppHeader from './containers/AppHeader';

import RestaurantSearchView from './containers/RestaurantSearchView';
import RestaurantDetailView from './containers/RestaurantDetailView';

import NetworkConnectionIndicator from './components/NetworkConnectionIndicator';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<AppHeader />
        <NetworkConnectionIndicator />
    		<div style={{padding: '10px'}}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={ RestaurantSearchView } />
              <Route exact path="/restaurant/:restaurant" component={ RestaurantDetailView } />
            </Switch>
          </HashRouter>
    	 </div>
      </div>
    );
  }
}
