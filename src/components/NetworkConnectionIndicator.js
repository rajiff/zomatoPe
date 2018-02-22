import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

// import './offline.css';

export default class NetworkConnectionIndicator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOffline: false
    }
  }

  updateOnlineStatus = () => {
    this.setState({
      isOffline: !navigator.onLine
    });
  }

  componentDidMount() {
    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
    // Call on mount once to check and set if the online status
    this.updateOnlineStatus();
  }

  render() {
    return (
      <Grid fluid style={{padding: "0px 8px 0px 8px"}}>
        <Row center="xs" middle="xs">
          <Col xs={12} style={{background:'#ffef80'}}>
            { ( this.state.isOffline ) ? <small style={{padding: "4px"}}>You seems to be offline..!</small> : '' }
          </Col>
        </Row>
      </Grid>
    );
  }
}
