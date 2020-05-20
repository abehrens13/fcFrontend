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


export default function Answers() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<FormControl component="fieldset" className={classes.formControl}>

				<FormGroup>
					<FormControlLabel
						control={<Checkbox checked={answerA} onChange={handleChange} name="gilad" />}
						label="Rot ist was anderes als Grün"
					/>
					<FormControlLabel
						control={<Checkbox checked={answerB} onChange={handleChange} name="jason" />}
						label="Blau sieht nur selten aus wie Rot"
					/>
					<FormControlLabel
						control={<Checkbox checked={answerC} onChange={handleChange} name="antoine" />}
						label="Wenn man Rot und Grün mischt, entsteht ein schmutziges Braun."
					/>
				</FormGroup>
			</FormControl>
		</div >
	)
}
