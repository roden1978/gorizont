import React from 'react'
import s from './Projects.module.css'
import Project from "./Project/Project";
import {Container, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

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

const Projects = (props) => {
    const classes = useStyles();

    let projectItems = props.projects.projects.map(
        project => <Project key={project.__id}  {...project}/>
    )
    return (
        <div>

            <React.Fragment>
                <Container className={classes.cardGrid} maxWidth="sx">
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        spacing={3}
                    >
                        {projectItems}

                    </Grid>
                </Container>
            </React.Fragment>

        </div>
    );
}

export default Projects;