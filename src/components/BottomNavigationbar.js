import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const mealIcon = <FontIcon className="material-icons">local_dining</FontIcon>;

/**
 * BottomNavigationbar is the navigation at the bottom 
 * of the application that navigates through views
 */
class BottomNavigationbar extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation style={{position: "fixed", bottom:"0"}} selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={homeIcon}
            onClick={() => this.select(0)}
          />

          <BottomNavigationItem
            label="Meals"
            icon={mealIcon}
            onClick={() => this.select(1)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationbar;