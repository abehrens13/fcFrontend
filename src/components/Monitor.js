import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Paper, Container, DialogTitle, Chip, Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import LensIcon from '@material-ui/icons/Lens';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	formControl: {
		margin: theme.spacing(3),
	},
}));



export default function Monitor() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		answerA: true,
		answerB: false,
		answerC: false,
	});
	const { answerA, answerB, answerC } = state;

	const handleClick = (event) => {
		//setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<div className={classes.root}>
			<Container>
				<DialogTitle id="alert-dialog-title"><center>Server Status</center></DialogTitle>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Paper className={classes.paper}>Hostname</Paper>
						<Paper className={classes.paper}>IP-Adress</Paper>
						<Paper className={classes.paper}>Timestamp</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.paper}>a3a8a211d5ab</Paper>
						<Paper className={classes.paper}>172.21.0.3</Paper>
						<Paper className={classes.paper}>2020-05-19T23:03:11.118Z</Paper>
					</Grid>
				</Grid>
				<Grid container justify="center">
					<Chip
						avatar={<Avatar><LensIcon style={{ color: 'darkred' }} /></Avatar>}
						label="Redis"
						onClick={handleClick}
						variant="outlined"
					/>
					<Chip
						avatar={<Avatar><LensIcon style={{ color: 'grey' }} /></Avatar>}
						label="Server"
						variant="outlined"
						onClick={handleClick}
					/>
					<Chip
						avatar={<Avatar><LensIcon style={{ color: 'darkgreen' }} /></Avatar>}
						label="Overall"
						variant="outlined"
						onClick={handleClick}

					/>
				</Grid>
			</Container>

		</div >
	)
}
