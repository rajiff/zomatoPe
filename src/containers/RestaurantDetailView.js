import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';
import LinearProgress from 'material-ui/LinearProgress';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import RestaurantSearchService from '../services/RestaurantSearchService';

export default class RestaurantDetailView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetchProgress: false,
      error: null,
      restaurant: undefined
    }
  }

  componentDidMount() {
    this.setState({isFetchProgress: true});

    new RestaurantSearchService().findRestaurantById(this.props.match.params.restaurant, (err, result) => {
      this.setState({
        isFetchProgress: false,
        error: (err || null),
        restaurant: (result || undefined)
      })
    })
  }

  getProgressBlock = () => {
    return (
      <div style={{margin: '10px', padding: '40px', background: '#eaeef0'}}>
        <LinearProgress mode="indeterminate" />
        <p style={{color: '#929292'}}>{'One moment please..!'}</p>
      </div>
    )
  }

  render() {
    return (
    	<Grid fluid style={{padding: "0px 8px 0px 8px"}}>
        <Row center="xs" middle="xs">
          <Col xs={12}>
            {
                (this.state.isFetchProgress ) ? this.getProgressBlock() : ''
            }
          </Col>
          <Col xs={12}>
            {
              (this.state.restaurant) ?
                <Card style={{margin: '4px'}}>
                  <CardHeader
                    title={this.state.restaurant.name}
                    subtitle={this.state.restaurant.location.locality_verbose}/>
                  <CardMedia>
                    <img src={this.state.restaurant.featured_image || 'http://static.tui.co.uk/static-images/images/thomson/default-large.png'} alt='' />
                  </CardMedia>
                  <CardTitle subtitle={this.state.restaurant.cuisines} />
                  <CardText>
                    {`Rating ${this.state.restaurant.user_rating.aggregate_rating}`}
                  </CardText>
                  <CardActions>
                  </CardActions>
                </Card>
              : ''
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}
