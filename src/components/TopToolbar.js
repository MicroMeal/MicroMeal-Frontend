import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';

const notifyIcon = <i className="material-icons">notifications</i>


export default class TopToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      inputValue: 'Matthew Edwards'
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar style={{backgroundColor: '#00BCD4'}}>
        <ToolbarGroup>
            <IconMenu
              iconButtonElement={<IconButton style={{color: 'white'}}>{notifyIcon}</IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem primaryText="Notification 1" />
              <MenuItem primaryText="Notification 2" />
              <MenuItem primaryText="Notification 3" />
              <MenuItem primaryText="Notification 4" />
              <MenuItem primaryText="Notification 5" />
          </IconMenu>
          <DropDownMenu labelStyle={{color: 'white'}} value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Matthew Edwards" />
            <MenuItem value={2} primaryText="Settings" />
            <MenuItem value={3} primaryText="Help" />
            <MenuItem value={3} primaryText="About" />
            <MenuItem value={3} primaryText="Sign Out" />
        </DropDownMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}