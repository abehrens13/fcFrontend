import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, DialogTitle, Chip, Avatar, Grid, Box } from '@material-ui/core';
import LensIcon from '@material-ui/icons/Lens';
import RefreshIcon from '@material-ui/icons/Refresh';
import fetchMonitor from '../backend/fetchMonitor'

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

const defaultMonitorStatus = {
	hostname: "host",
	inetAddress: "127.0.0.1",
	currentTime: "2020-05-20T19:52:27.433Z",
	statusRedis: "OK",
	statusSystem: "OK",
	statusOverall: "FAILURE"

}

export default function Monitor({ monitorUrl }) {
	const classes = useStyles();
	const [monitorStatus, setMonitorStatus] = React.useState(defaultMonitorStatus);
	const [refresh, setRefresh] = React.useState(0);

	React.useEffect(() => { loadMonitor() }, [refresh]);


	async function loadMonitor() {
		let my = await fetchMonitor(monitorUrl);
		setMonitorStatus(my);
	}

	function updateButton() {
		setRefresh(refresh + 1);
	}

	return (
		<div className={classes.root}>
			<Container>
				<Box {...defaultInnerBoxProps} borderBottom="0">
					<DialogTitle id="alert-dialog-title"><center>Server Status</center></DialogTitle>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<div>Hostname</div>
							<div>IP-Adress</div>
							<div>Last Check</div>
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
					<Grid container item xc={4} justify="center">
						<MyChip name="Redis" status={monitorStatus.statusRedis} />
						<MyChip name="System" status={monitorStatus.statusSystem} />
						<MyChip name="Overall" status={monitorStatus.statusOverall} />
						<Chip
							avatar={<Avatar><RefreshIcon /></Avatar>}
							label="Refresh"
							variant="outlined"
							onClick={updateButton}
						/>
					</Grid>
					<Box {...defaultInnerBoxProps} border="0" />
				</Box>
			</Container>
		</div >
	)
}
