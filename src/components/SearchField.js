import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class SearchField extends React.Component {

  constructor(props) {
    super(props);

    this.styles = {
    };

    this.state = {
      searchText: '',
      error: null
    }
  }

  handleSearchTextChange = (e) => {
    this.setState({searchText: e.target.value});
  }

  handleKeyPress = (e) => {
    // enter key pressed
    if (e.charCode === 13) {
      e.preventDefault();
      return this.handleSearch(e);
    }
  }

  handleSearch = (e) => {
    let err = (this.state.searchText === '') ? 'Require restaurant name for search': null;
    if(err) {
      this.setState({error: err});
    } else {
      // Search now
      this.props.onSearch(this.state.searchText);
      this.setState({searchText: "", error: null});
    }
  }

  render() {
    return (
      <Grid fluid style={{padding: "0px 8px 0px 8px"}}>
        <Row center="xs" middle="xs">
          <Col xs={12} sm={9}>
            <TextField
              type="text"
              value={this.state.searchText}
              onChange={this.handleSearchTextChange}
              hintText="Specify restaurant name to search"
              floatingLabelText="Restaurant name"
              fullWidth={true}
              errorText={this.state.error}
              onKeyPress={this.handleKeyPress}
            />
          </Col>
          <Col xs={12} sm={2}>
            <RaisedButton label="Search" primary={true} onClick={this.handleSearch} />
          </Col>
        </Row>
      </Grid>
    );
  }
}