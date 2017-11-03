import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import HorizontalLinearStepper from './Stepper'

const TopNavigation = () => (
  <Tabs >
    <Tab label="TDEE Calculator"  >
    	<HorizontalLinearStepper />
    </Tab>
    <Tab label="Meal Planner" >

    </Tab>
  </Tabs>
);

export default TopNavigation