import React from 'react';
import AppBar from 'material-ui/AppBar';
import TopToolbar from './TopToolbar'

const TopMenubar = () => (
  <AppBar
   style={{boxShadow: '0'}}
   titleStyle={{fontWeight: '300'}}
    title="MicroMeal"
    iconElementRight={<TopToolbar />}
  />
);

export default TopMenubar;