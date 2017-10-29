import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TopMenubar from './components/TopMenubar'
import BottomNavigationbar from './components/BottomNavigationbar'
import HorizontalLinearStepper from './components/Stepper'

// Set the colour scheme for the application
const muiTheme = getMuiTheme({
    palette: {
      primary1Color: '#00BCD4',
      primary2Color: '#B2EBF2',
      primary3Color: '#0097A7',
      accent1Color: '#607D8B',
      textColor: '#212121',
      secondaryTextColor: '#757575',
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider  muiTheme={muiTheme}>
        <div className="App">
          <TopMenubar />
          <HorizontalLinearStepper />
          <BottomNavigationbar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
