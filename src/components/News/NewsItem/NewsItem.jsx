import React from 'react'
import {NavLink} from "react-router-dom";
import {lighten, makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from '@material-ui/icons/Assignment';
import {blue, blueGrey, purple} from "@material-ui/core/colors";
import moment from "moment";
import 'moment/locale/ru'
import katokIcon from '../../../assets/icons/katok.svg'

const useStyles = makeStyles({
    link: {
        color: blueGrey[400],
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 'lighter',
        fontSize: 14,
    },
    title: {
        fontSize: 16,
        backgroundColor: '#0d47a1',
        color: '#FFFFFF',
    },
    pos: {
        marginLeft: 12,
    },
    avatar:{
        backgroundColor: '#f5f6f7',
        width: 50,
        height: 50,
    },
    katok:{
      width:45,
    }
});

/*linear-gradient(to right, #0d47a1, #ffff)
* 'linear-gradient(to right, #0d47a1 90%, coral)'*/
const NewsItem = (props) => {
    const classes = useStyles();

    let createAt = moment([props.createAt]);
    createAt.locale('ru');

    return (
        <Grid item xs={10} sm={8}>
            <Card className={classes.card}>
                <CardHeader title={props.title}
                            className={classes.title}
                            avatar={
                                <Avatar  className={classes.avatar}>
                                    <img className={classes.katok} src={katokIcon} alt="Новости"/>
                                </Avatar>
                            }
                />
                <CardContent>
                    <Typography variant="body1" color="textPrimary" gutterBottom>
                        {props.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography className={classes.pos} variant="body2" color="textPrimary">
                        Ознакомиться с проектом:
                    </Typography>

                    <NavLink to={'/projects/' + props.project}
                             className={classes.link}>{props.projectTitle}</NavLink>
                </CardActions>
                <Typography className={classes.pos} variant="body2" color="textSecondary" gutterBottom>
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