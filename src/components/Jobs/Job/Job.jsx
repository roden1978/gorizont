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
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16,
        backgroundColor: '#0d47a1', //#0d47a1 #1976d2
        color: '#ffffff'
    },
    pos: {
        marginLeft: 12,
        fontSize: 14,
        fontWeight: 'bold',
    },
    avatar: {
        backgroundColor: '#ffffff',
        width: 50,
        height: 50,
    },
    katok: {
        width: 45,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        minHeight: 160,
    }
});

/*linear-gradient(to right, #0d47a1, #ffff)
* 'linear-gradient(to right, #0d47a1 90%, coral)'*/
const Job = (props) => {
    const classes = useStyles();

    /*let createAt = moment([props.createAt]);
    createAt.locale('ru');
     sm={4}
    */

    return (
        <Grid item xs={8} sm={4}>
            <Card className={classes.card}>
                <CardHeader title={props.title}
                            className={classes.title}
                            subheader={
                                <Typography variant="body1" color="textPrimary" gutterBottom>
                                    {props.company}
                                </Typography>}
                            avatar={
                                <Avatar className={classes.avatar}>
                                    <img className={classes.katok} src={katokIcon} alt="Работа"/>
                                </Avatar>
                            }

                />
                <CardContent>
                    <Typography variant="body1" color="textPrimary" gutterBottom>
                        {props.description}
                    </Typography>
                    <Typography className={classes.pos} variant="body2" color="textPrimary">
                        Заработная плата: {props.price}
                    </Typography>
                    <Typography className={classes.pos} variant="body2" color="textPrimary">
                        Электронная почта: {props.email}
                    </Typography>
                    <Typography className={classes.pos} variant="body2" color="textPrimary">
                        Телефон: {props.phone}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Job;
