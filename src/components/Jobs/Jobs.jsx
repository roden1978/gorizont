import React from 'react'
import Job from './Job/Job'
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    pos:{
        paddingBottom: 20,
        paddingTop: 20,
    }
}));

const Jobs = (props) => {
    //debugger
    const classes = useStyles();

    let jobs = props.jobs.jobs.map(
        job => <Job key={job.__id}  {...job}/>)

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={3}
                className={classes.pos}
            >
                {jobs}
            </Grid>
        </div>
    );
}

export default Jobs;
/*
import React from 'react'
import s from './Jobs.module.css'

const Jobs = (props) => {
    return(
        <div>
            Jobs
        </div>
    );
}

export default Jobs;*/
