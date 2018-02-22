import React, { Component } from 'react';

import SearchField from '../components/SearchField';
import RestaurantSearchResult from '../components/RestaurantSearchResult';

import RestaurantSearchService from '../services/RestaurantSearchService';

export default class RestaurantSearchView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearchInProgress: false,
      error: null,
      searchMsg: null,
      searchResult: {
        restaurants: []
      }
    }
  }

  handleSearchRestaurant = (searchQueryStr) => {
    this.setState({isSearchInProgress: true});

    new RestaurantSearchService().searchRestaurantByWildString(searchQueryStr, (err, result) => {
      let searchMsg = null;
      if(err || (result.restaurants && result.restaurants.length <0) ) {
        searchMsg = 'Search returned without any matching restaurants..!';
      }
      this.setState({
        isSearchInProgress: false,
        searchMsg: searchMsg,
        error: (err || null),
        searchResult: ((!err) ? result : [])
      })
    })
  }

  render() {
    return (
    	<div>
      	<SearchField onSearch={this.handleSearchRestaurant} />
        {
          (this.state.searchMsg) ? <h4>{this.state.searchMsg}</h4> : ''
        }
        <RestaurantSearchResult isSearchInProgress={this.state.isSearchInProgress} searchResult={this.state.searchResult} />
    	</div>
    );
  }
}

