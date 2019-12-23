import React from 'react'
import {Container, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
//import SimpleMap from "../../common/SimpleMap";

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
    },
    title: {
        fontSize: 16,
        backgroundColor: '#0d47a1',//#0d47a1
        color: '#FFFFFF',
    },
}));

const AboutUs = (props) => {
    const classes = useStyles();
    //const info = props.contacts[0];
debugger
    return(
        <div>
            <div className={classes.root}>
                <Container className={classes.cardGrid} maxWidth="sx">
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        spacing={3}
                        className={classes.pos}
                    >
                        <Grid item xs={5}>
                            <Card>
                                <CardHeader title={'О нас'}
                                            className={classes.title}/>
                                <CardContent>
                                    <Typography variant="body1" color="textPrimary" gutterBottom>
                                        {props.about.length === 0 ? '' : props.about[0].text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default AboutUs;


/*
import React from 'react'
import s from './AboutUs.module.css'

const AboutUs = (props) => {
    return(
        <div>
            About
        </div>
    );
}

export default AboutUs;*/
