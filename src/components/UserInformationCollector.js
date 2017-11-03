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
		gender: null,
		age: null,

	};

	handleGenderChange = (event, index, value) => {
		this.setState({gender: value});
	}

	handleAgeChange = (event, index, value) => {
		this.setState({age: value});
	}
		
	render(){
		return(
			<div>
				<SelectField
					name="gender"
					style={{textAlign: 'left'}}
	          		floatingLabelText="Gender"
	          		value={this.state.gender}
	          		onChange={this.handleGenderChange}
	          		>
	          		<MenuItem name="gender" value={1} primaryText="Male" />
	          		<MenuItem value={2} primaryText="Female" />
	        	</SelectField>
	        	<br />
	        	
	        	<TextField
      				hintText="Age"
      				age={this.state.age}
      				onChange={this.handleAgeChange}
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