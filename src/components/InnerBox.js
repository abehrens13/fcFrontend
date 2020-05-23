import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './../helper/useStyles'

const defaultInnerBoxProps = {
    bgcolor: 'background.paper',
    borderColor: "secondary.main",

    m: 1,
    border: 1,
    borderRadius: 5,
    borderLeft: 0,
    borderRight: 0

};



export default function InnerBox({ borderTop = "0", borderBottom = "0" }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box  {...defaultInnerBoxProps} borderTop={borderTop} borderBottom={borderBottom}>
                <div>Hallo</div>
            </Box>
        </div>
    )
}
