import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
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
	borderColor: 'text.primary',
	m: 1,
	border: 0,
	borderRadius: 5,
	borderTop: 1,
	borderBottom: 1

};


export default function Question() {
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


				<Box  {...defaultOuterBoxProps}>
					<Box  {...defaultInnerBoxProps} borderTop={0} borderBottom={0}>
						<h6>Question 1 of 30</h6>
						<p>All around me are familiar faces Worn out places, worn out faces Bright and early for the daily races Going nowhere, going nowhere. Their tears are filling up their glasses No expression, no expression Hide my head I wanna drown my sorrow No tomorrow, no tomorrow. And I find it kind of funny I find it kind of sad</p>
						<p>(choose the best)</p>
					</Box>
					<Box {...defaultInnerBoxProps} >
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

					</Box>
					<Box {...defaultInnerBoxProps} borderTop={0} borderBottom={0}>
						<ButtonGroup>
							<Button variant="contained" color="secondary" startIcon={<PlaylistAddCheck />}>Check</Button>
							<Button variant="contained" color="primary" startIcon={<PlaylistPlay />}>Next</Button>
						</ButtonGroup>

					</Box>
					<Box {...defaultInnerBoxProps} >
						<p>I used to play this song every day while I was battling cancer. Two years ago, I went into the storm with little hope of coming out. Thinking about My Three Beautiful Children I was going to leave behind... But I’m still here and enjoying every moment of my life. </p>
					</Box>

				</Box>
			</FormControl>

		</div>
	)
}

export function Question2() {
	const classes = useStyles();





	return (
		<div className={classes.root}>

			<FormLabel component="legend">Question 1 of 30</FormLabel>

			<FormControl component="fieldset" className={classes.formControl}>
				<FormHelperText>(choose the best)</FormHelperText>
			</FormControl>

		</div>
	);
}
