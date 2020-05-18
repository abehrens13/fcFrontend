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


const defaultBoxProps = {
	bgcolor: 'background.paper',
	borderColor: 'text.primary',
	m: 1,
	border: 1,

};

export default function Question() {
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
				<Box borderRadius={16} {...defaultBoxProps}>
					<FormLabel component="legend">Question 1 of 30</FormLabel>
				</Box>
				<Box borderRadius={16} {...defaultBoxProps}>
					<Typography variant="body1" gutterBottom>
						<p>What is what us drive the most?</p>
					</Typography>
				</Box>
				<Box borderRadius={16} {...defaultBoxProps}>

				</Box>

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
