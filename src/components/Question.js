import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
	borderRadius: 5

};


export default function Question() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<FormControl component="fieldset" className={classes.formControl}>


				<Box  {...defaultOuterBoxProps}>
					<Box  {...defaultInnerBoxProps}>
						<h6>Question 1 of 30</h6>
					</Box>
					<Box {...defaultInnerBoxProps}>
						<p>All around me are familiar faces Worn out places, worn out faces Bright and early for the daily races Going nowhere, going nowhere. Their tears are filling up their glasses No expression, no expression Hide my head I wanna drown my sorrow No tomorrow, no tomorrow. And I find it kind of funny I find it kind of sad</p>
					</Box>
					<Box {...defaultInnerBoxProps}>
						<p>(choose the best)</p>
					</Box>
					<Box {...defaultInnerBoxProps}>
						<p>A lot of answers</p>
					</Box>
					<Box {...defaultInnerBoxProps}>
						<p>Explanation</p>
					</Box>

				</Box>
			</FormControl>

		</div>
	)
}

export function Question2() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		gilad: true,
		jason: false,
		antoine: false,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const { gilad, jason, antoine } = state;

	return (
		<div className={classes.root}>

			<Box display="flex" justifyContent="center">
				<FormLabel component="legend">Question 1 of 30</FormLabel>
				<p>What is what us drive the most?</p>

			</Box>

			<FormControl component="fieldset" className={classes.formControl}>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
						label="Gilad Gray"
					/>
					<FormControlLabel
						control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
						label="Jason Killian"
					/>
					<FormControlLabel
						control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
						label="Antoine Llorca"
					/>
				</FormGroup>
				<FormHelperText>(choose the best)</FormHelperText>
			</FormControl>

		</div>
	);
}
