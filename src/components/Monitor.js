import React from 'react';

import { Container, DialogTitle, Chip, Avatar, Grid, Box } from '@material-ui/core';
import LensIcon from '@material-ui/icons/Lens';
import RefreshIcon from '@material-ui/icons/Refresh';
import fetchMonitor from '../backend/fetchMonitor'
import AlarmOffIcon from '@material-ui/icons/AlarmOff';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';


import useStyles from './../helper/useStyles'



function setColor(statustype) {
	if (statustype === "UP") return "darkgreen";
	else if (statustype === "DOWN") return "darkred";
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


var defaultMonitorInfo =
{
	"app": {
		"name": "UNKNOWN",
		"description": "UNKNOWN",
		"version": "UNKNOWN",
		"encoding": "UNKNOWN",
		"java": {
			"version": "UNKNOWN"
		}
	},
	"build": {
		"version": "UNKNOWN",
		"artifact": "UNKNOWN",
		"name": "UNKNOWN",
		"group": "UNKNOWN",
		"time": "0"
	}
}

var defaultMonitorHealth =
{
	"status": "UNKNOWN",
	"components": {
		"diskSpace": {
			"status": "UNKNOWN",
			"details": {
				"total": 0,
				"free": 0,
				"threshold": 0
			}
		},
		"mongo": {
			"status": "UNKNOWN",
			"details": {
				"version": "0"
			}
		},
		"fcBackend": {
			"status": "UNKNOWN",
			"details": {
				"app": "0",
				"error": "0"
			}
		},
		"ping": {
			"status": "UNKNOWN"
		},
		"redis": {
			"status": "UNKNOWN",
			"details": {
				"version": "0"
			}
		}
	}
}
function extend(obj1, obj2) {
	var result = obj1, val;
	for (val in obj2) {
		if (obj2.hasOwnProperty(val)) {
			result[val] = obj2[val];
		}
	}
	return result;
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
export default function Monitor({ monitorHealthUrl, monitorInfoUrl }) {
	const classes = useStyles();
	const [monitorHealth, setMonitorHealth] = React.useState(defaultMonitorHealth);
	const [monitorInfo, setMonitorInfo] = React.useState(defaultMonitorInfo);
	const [refresh, setRefresh] = React.useState(0);
	const [switchState, setSwitchState] = React.useState(true);
	const [currentCount, setCount] = React.useState(0);
	React.useEffect(() => { loadHealthMonitor() }, [refresh]);
	React.useEffect(() => { loadInfoMonitor() }, [refresh]);
	React.useEffect(
		() => {
			if (currentCount < 0) {
				return;
			}
			const id = setInterval(timer, 1000);
			return () => clearInterval(id);
		},
		[currentCount]
	);


	const timer = () => {
		if (currentCount >= 0) {
			setCount(currentCount + 1)
			loadHealthMonitor();
			loadInfoMonitor();
		}
	};

	async function loadHealthMonitor() {
		//console.log(monitorHealth);
		try {
			let my = await fetchMonitor(monitorHealthUrl);
			//console.log(my);
			setMonitorHealth(extend(defaultMonitorHealth, my));
			//console.log(my);
		} catch (error) {
			let my = monitorHealth;
			my.components.redis.status = "DOWN";
			my.components.diskSpace.status = "DOWN";
			my.components.ping.status = "DOWN";
			my.components.fcBackend.status = "DOWN";
			my.components.mongo.status = "DOWN";
			my.status = "DOWN";
			setMonitorHealth(my);
			console.log(error);
		}
	}

	async function loadInfoMonitor() {
		//console.log(monitorStatus);
		try {
			let my = await fetchMonitor(monitorInfoUrl);
			setMonitorInfo(extend(defaultMonitorInfo, my));
		} catch{
			//do nothing
		}
	}


	function updateButton() {
		setRefresh(refresh + 1);
	}

	function handleSwitchChange() {
		if (switchState !== true) {
			setCount(0);
		} else {
			setCount(-10);
		}
		setSwitchState(!switchState);
	}

	return (
		<div className={classes.root}>
			<Container>
				<Box {...defaultInnerBoxProps} borderBottom="0">

					<DialogTitle id="alert-dialog-title"><center>Server Status</center></DialogTitle>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<div>App-Name</div>
							<div>App-description</div>

							<div>Build-version</div>
							<div>Build-artifact</div>
							<div>Build-name</div>
							<div>Build-group</div>
							<div>Build-time</div>
						</Grid>
						<Grid item xs={6}>
							<div>{monitorInfo.app.name}</div>
							<div>{monitorInfo.app.description}</div>

							<div>{monitorInfo.build.version}</div>
							<div>{monitorInfo.build.artifact}</div>
							<div>{monitorInfo.build.name}</div>
							<div>{monitorInfo.build.group}</div>
							<div>{changeTime(monitorInfo.build.time)}</div>
						</Grid>
					</Grid>

				</Box>
				<Box {...defaultInnerBoxProps} borderBottom="0" borderRadius="0"></Box>
				<Box {...defaultInnerBoxProps} borderTop="0">
					<Grid container item xc={3} justify="center">
						<MyChip name="Redis" status={monitorHealth.components.redis.status} />
						<MyChip name="Mongo" status={monitorHealth.components.mongo.status} />
						<MyChip name="Disk" status={monitorHealth.components.diskSpace.status} />
						<MyChip name="Ping" status={monitorHealth.components.ping.status} />
						<MyChip name="fcBackend" status={monitorHealth.components.fcBackend.status} />
						<MyChip name="System" status={monitorHealth.status} />
					</Grid>
					<Grid container item xc={2} justify="center">
						<Chip
							avatar={<Avatar>
								{switchState ? <AlarmOnIcon color="primary" /> : <AlarmOffIcon color="primary" />}
							</Avatar>}
							label="Auto Refresh"
							variant="outlined"
							onClick={handleSwitchChange}
						/>
						<Chip
							avatar={<Avatar><RefreshIcon color="primary" /></Avatar>}
							label="Refresh"
							variant="outlined"
							onClick={updateButton}
							disabled={switchState}
						/>

					</Grid>
					<Box {...defaultInnerBoxProps} border="0" />
				</Box>
			</Container>
		</div >
	)
}
