import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	formControl: {
		margin: theme.spacing(3),
	},
}));


export default function Answer() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<FormControl component="fieldset" className={classes.formControl}>

				<FormGroup>
					<FormControlLabel
						control={<Checkbox checked={answerA} onChange={handleChange} name="gilad" />}
						label="Rot ist was anderes als Grün"
					/>

				</FormGroup>
			</FormControl>
		</div >
	)
}
