import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

/**
 * UserInformationCollector will collect the required information
 * such as weight, age, sex, etc. from the user to 
 * use in calculating their TDEE score.
 */
export default class UserInformationCollector extends React.Component{
	state = {
		
	};

	handleChange = (event, index, value) => {
		this.setState({value});
		console.log("State: " + value)
	} 
		
	render(){
		return(
			<div>
				<SelectField
					style={{textAlign: 'left'}}
	          		floatingLabelText="Gender"
	          		value={this.state.value}
	          		onChange={this.handleChange}
	          		>
	          		<MenuItem value={1} primaryText="Male" />
	          		<MenuItem value={2} primaryText="Female" />
	        	</SelectField>
	        	<br />
	        	
	        	<TextField
      				hintText="Age"
      				age={this.state.value}
    			/><br />

    			<TextField
      				hintText="Height"
    			/><br />

    			<TextField
      				hintText="Weight"
      				age={this.state.value}
    			/><br />

    			<TextField
      				hintText="Goal Weight"
      				age={this.state.value}
    			/><br />
				
			</div>
		);
	}
}