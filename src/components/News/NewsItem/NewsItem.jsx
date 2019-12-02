import React from 'react'
import {NavLink} from "react-router-dom";
import {lighten, makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import {blueGrey, purple} from "@material-ui/core/colors";
import moment from "moment";
import 'moment/locale/ru'

const useStyles = makeStyles({
    link: {
        color: blueGrey[400],
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 'lighter',
        fontSize: 12,
    },
    title: {
        fontSize: 12,
        backgroundColor: purple[100],
    },
    pos: {
        marginLeft: 12,
    },
});


const NewsItem = (props) => {
    const classes = useStyles();

    let createAt = moment([props.createAt]);
    createAt.locale('ru');

    return (
        <Grid item xs={10} sm={8}>
            <Card className={classes.card}>
                <CardHeader title={props.title}
                            className={classes.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textPrimary" gutterBottom>
                        {props.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography className={classes.pos} variant="body2" color="textPrimary" >
                        Проект:
                    </Typography>
                    <NavLink to={'/projects/' + props.project}
                             className={classes.link}>{props.projectTitle}</NavLink>
                </CardActions>
                <Typography className={classes.pos} variant="body2" color="textPrimary" gutterBottom>
                    {createAt.format('LL')}
                </Typography>
            </Card>
        </Grid>
    );
}

export default NewsItem;

/*
*
            <div>Title: {props.title}</div>
            <div>Text: <br/>{props.text}</div>
            <div>Project id: {props.project}</div>
            <div>Date: {props.createAt}</div>
            <div>Project Name: {props.projectTitle}</div>
            <div>Link: <NavLink to={'/projects/' + props.project}>{props.projectTitle}</NavLink></div>
            *
            * <NavLink to={'/projects/' + props.project}
                             className={classes.link}>{props.projectTitle}</NavLink>*/