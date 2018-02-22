import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

export default class PlaceHolder extends Component {
  constructor(props) {
    super(props);

    this.styles = {
    }
  }

  render() {
    return (
      <Grid fluid style={{padding: "0px 8px 0px 8px"}}>
        <Row center="xs" middle="xs">
          <Col xs>
            <div style={{margin: '10px', padding: '40px', background: '#eaeef0'}}>
              <p style={{color: '#929292'}}>{this.props.message}</p>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

