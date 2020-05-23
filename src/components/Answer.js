import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from './../helper/useStyles'


export default function Answer({ checked = false }) {
	const classes = useStyles();
	const [isChecked, setIsCheck] = React.useState(checked);

	function handleChange() {
		setCheck(!checked);
	}

	return (
		<div className={classes.root}>
			<FormControl component="fieldset" className={classes.formControl}>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox checked={isChecked} onChange={handleChange} name="gilad" />}
						label="Rot ist was anderes als Grün"
					/>
				</FormGroup>
			</FormControl>
		</div >
	)
}
