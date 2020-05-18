import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Button, ButtonGroup } from '@material-ui/core';
import { PlaylistAddCheck, PlaylistPlay } from '@material-ui/icons/';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	formControl: {
		margin: theme.spacing(3),
	},
}));


const defaultOuterBoxProps = {
	bgcolor: 'background.paper',
	borderColor: 'text.primary',
	m: 1,
	border: 1,
	borderRadius: 5

};
const defaultInnerBoxProps = {
	bgcolor: 'background.paper',
	borderColor: "secondary.main",

	m: 1,
	border: 1,
	borderRadius: 5,
	borderLeft: 0,
	borderRight: 0

};


export default function Answers() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		answerA: true,
		answerB: false,
		answerC: false,
	});
	const { answerA, answerB, answerC } = state;

	const handleChange = (event) => {
		//setState({ ...state, [event.target.name]: event.target.checked });
	};

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
