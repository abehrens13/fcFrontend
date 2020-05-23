import React from 'react';
import { Button, ButtonGroup, Grid, Box, FormControl } from '@material-ui/core';
import { PlaylistAddCheck, PlaylistPlay } from '@material-ui/icons/';
import Answer from './Answer'

import useStyles from './../helper/useStyles'


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


export default function Question() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<FormControl component="fieldset" className={classes.formControl}>


				<Box  {...defaultOuterBoxProps}>
					<Box  {...defaultInnerBoxProps} borderTop={0} borderBottom={0}>
						<Box {...defaultInnerBoxProps} border="0" m="0" bgcolor="primary.main" color="white">
							<Grid container justify="center">
								<p>Question 1 of 30</p>
							</Grid>
						</Box>
						<p>All around me are familiar faces Worn out places, worn out faces Bright and early for the daily races Going nowhere, going nowhere. Their tears are filling up their glasses No expression, no expression Hide my head I wanna drown my sorrow No tomorrow, no tomorrow. And I find it kind of funny I find it kind of sad</p>
					</Box>
					<Box {...defaultInnerBoxProps} >
						<Answer checked={true} />
						<Answer checked={false} />
						<Answer />

					</Box>
					<Box {...defaultInnerBoxProps} borderTop={0} borderBottom={0}>
						<Grid container justify="center">
							<ButtonGroup variant="contained" >
								<Button color="secondary" startIcon={<PlaylistAddCheck />}>Check</Button>
								<Button color="primary" startIcon={<PlaylistPlay />} > Next</Button>

							</ButtonGroup>
						</Grid>

					</Box>
					<Box {...defaultInnerBoxProps} >
						<p>(choose the best)</p>
						<p>I used to play this song every day while I was battling cancer. Two years ago, I went into the storm with little hope of coming out. Thinking about My Three Beautiful Children I was going to leave behind... But I’m still here and enjoying every moment of my life. </p>
					</Box>

				</Box>
			</FormControl>

		</div >
	)
}
