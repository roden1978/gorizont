import React from 'react'
import Job from './Job/Job'
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    pos:{
        paddingBottom: 20,
        paddingTop: 20,
    },
    cardGrid: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(8),
    }
}));

const Jobs = (props) => {
    //debugger
    const classes = useStyles();

    let jobs = props.jobs.map(
        job => <Job key={job.__id}  {...job}/>)

    return (
        <React.Fragment>
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={3}
            >
                    {jobs}

            </Grid>
            </Container>
        </React.Fragment>
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
