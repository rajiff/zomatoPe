import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LinearProgress from 'material-ui/LinearProgress';

import PlaceHolder from './PlaceHolder';
import RestaurantThumbnail from './RestaurantThumbnail';

import './searchresults.css';

export default class RestaurantSearchResult extends Component {
  constructor(props) {
    super(props);

    this.styles = {
    	resulWrapper: {
    		display: 'flex',
    		flexWrap: 'wrap'
    	},
    	resultItem: {
    		flex: '1'
    	}
    }
  }

  getProgressBlock = () => {
  	return (
  		<div style={{margin: '10px', padding: '40px', background: '#eaeef0'}}>
  			<LinearProgress mode="indeterminate" />
  			<p style={{color: '#929292'}}>{'Finding places to delight you..!'}</p>
    	</div>
    )
  }

  render() {
  	// return this.getCSSVersion()
  	return this.getGridVersion()
  }

  getGridVersion = () => {
  	return (
  	<Grid fluid style={{padding: "0px 8px 0px 8px"}}>
	  		<Row center="xs" middle="xs">
	  			<Col xs={12}>
	  				{
	  						(this.props.isSearchInProgress ) ?
	  							this.getProgressBlock()
	  						:
	  						( (!this.props.searchResult || !this.props.searchResult.restaurants || this.props.searchResult.restaurants.length <=0) ? <PlaceHolder message='search for best dining experience..!'/> : '' )
	  				}
	  			</Col>
	  			<Col xs={12}>
	  				{ (this.props.searchResult
	  					&& this.props.searchResult.restaurants
	  					&& this.props.searchResult.restaurants.length > 0 ) ?
	  						<p>Showing {this.props.searchResult.results_shown} of {this.props.searchResult.results_found} restaurants </p>
	  					: ''
	  				}
	  			</Col>
	  		</Row>
	  		<Row>
	  				{
	  					(!this.props.isSearchInProgress
	  						&& this.props.searchResult
	  						&& this.props.searchResult.restaurants
	  						&& this.props.searchResult.restaurants.length > 0) ?
		  					this.props.searchResult.restaurants.map((r) => {
		  						return (
		  							<Col xs={12} sm={4} lg={3} key={r.restaurant.R.res_id}>
		  								<Link to={`/restaurant/${r.restaurant.R.res_id}`} >
			  								<RestaurantThumbnail
			  									restaurant={r.restaurant}
			  									style={{cursor:'pointer'}}
			  								/>
		  								</Link>
		  							</Col>
		  						)
		  					})
		  				: ''
	  				}
	  		</Row>
	  	</Grid>
	  )
  }

  getCSSVersion = () => {
  	return (
  		<Grid fluid style={{padding: "0px 8px 0px 8px"}}>
	  		<Row center="xs" middle="xs">
	  			<Col xs={12}>
	  				{
	  						(this.props.isSearchInProgress ) ?
	  							this.getProgressBlock()
	  						:
	  						( (this.props.searchResult.restaurants.length <=0 ) ? <PlaceHolder message='search for best dining experience..!'/> : '' )
	  				}
	  			</Col>
	  			<Col xs={12}>
	  				{ (this.props.searchResult.restaurants.length > 0 ) ? <p>Showing {this.props.searchResult.results_shown} of {this.props.searchResult.results_found} restaurants </p>: '' }
	  			</Col>
	  		</Row>
	  		<Row>
	  			<Col xs>
	  			<div className={'restaurants'}>
	  				{
	  					(!this.props.isSearchInProgress && this.props.searchResult.restaurants.length > 0) ?
		  					this.props.searchResult.restaurants.map((r) => {
		  						return (
		  							<div className={'restaurantItem'} key={r.restaurant.R.res_id}>
		  								<RestaurantThumbnail restaurant={r.restaurant}  />
		  							</div>
		  						)
		  					})
		  				: ''
	  				}
	  			</div>
	  			</Col>
	  		</Row>
	  	</Grid>
	  )
  }
}
