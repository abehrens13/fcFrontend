import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, DialogTitle, Chip, Avatar, Grid, Box } from '@material-ui/core';
import LensIcon from '@material-ui/icons/Lens';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	formControl: {
		margin: theme.spacing(3),
	},
}));

function setColor(statustype) {
	if (statustype === "OK") return "darkgreen";
	else if (statustype === "FAILURE") return "darkred";
	else return "grey";
}

function MyChip({ name, status }) {
	return (
		<Chip
			avatar={<Avatar><LensIcon style={{ color: setColor(status) }} /></Avatar>}
			label={name + ": " + status}
			variant="outlined"
		/>
	);

}
const defaultInnerBoxProps = {
	bgcolor: 'background.paper',
	borderColor: "secondary.main",

	m: 1,
	border: 1,
	borderRadius: 5,
	borderLeft: 0,
	borderRight: 0

};


function getLang() {
	if (navigator.languages !== undefined)
		return navigator.languages[0];
	else
		return navigator.language;
}

function changeTime(time) {
	const locale = getLang();
	var date = new Date(time);
	return date.toLocaleDateString(locale) + " " + date.toLocaleTimeString(locale);
}


export default function Monitor({ monitorStatus }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container>
				<Box {...defaultInnerBoxProps} borderBottom="0">
					<DialogTitle id="alert-dialog-title"><center>Server Status</center></DialogTitle>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<div>Hostname</div>
							<div>IP-Adress</div>
							<div>Timestamp</div>
						</Grid>
						<Grid item xs={6}>
							<div>{monitorStatus.hostname}</div>
							<div>{monitorStatus.inetAddress}</div>
							<div>{changeTime(monitorStatus.currentTime)}</div>
						</Grid>
					</Grid>
				</Box>
				<Box {...defaultInnerBoxProps} borderBottom="0" borderRadius="0"></Box>
				<Box {...defaultInnerBoxProps} borderTop="0">
					<Grid container item xc={3} justify="center">
						<MyChip name="Redis" status={monitorStatus.statusRedis} />
						<MyChip name="System" status={monitorStatus.statusSystem} />
						<MyChip name="Overall" status={monitorStatus.statusOverall} />
					</Grid>
					<Box {...defaultInnerBoxProps} border="0" />
				</Box>
			</Container>
		</div >
	)
}
