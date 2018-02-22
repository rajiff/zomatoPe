import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';

export default class AppHeader extends React.Component {

  constructor(props) {
    super(props);

    this.styles = {
    };
  }

  render() {
    return (
      <AppBar
        title={"Diner"}
        iconElementRight={<IconButton><ActionAccountCircle /></IconButton>}
        />
    );
  }
}