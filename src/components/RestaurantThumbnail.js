import React from 'react';

import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class RestaurantThumbnail extends React.Component {

  constructor(props) {
    super(props);

    this.styles = {
    };

    this.state = {
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.restaurant.name !== nextProps.restaurant.name)
  }

  render() {
  	return (
      <Card style={{margin: '5px'}}>
        <CardMedia overlay={<CardTitle title={this.props.restaurant.name}/>}>
          <img src={this.props.restaurant.featured_image || 'http://static.tui.co.uk/static-images/images/thomson/default-large.png'} alt='' />
        </CardMedia>
        <CardTitle subtitle={this.props.restaurant.location.locality_verbose} />
        <CardText>
        {`Rating ${this.props.restaurant.user_rating.aggregate_rating}`}
        </CardText>
        <CardActions>
        </CardActions>
      </Card>
    )
  }
}