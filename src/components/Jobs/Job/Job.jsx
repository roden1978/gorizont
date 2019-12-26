import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import 'moment/locale/ru'
import man01 from '../../../assets/icons/man.svg'
import man02 from '../../../assets/icons/man01.svg'
import man03 from '../../../assets/icons/man02.svg'
import man04 from '../../../assets/icons/man03.svg'
import man05 from '../../../assets/icons/man04.svg'
import man06 from '../../../assets/icons/man05.svg'

const useStyles = makeStyles({
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16,
        backgroundColor: '#2d7fff', //#0d47a1 #1976d2
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
        height: 45,
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

const Job = (props) => {
    const classes = useStyles();

    let titleIcon;

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    switch (getRandomInt(7)) {
        case 0: {
            titleIcon = man01;
            break;
            }
        case 1: {
            titleIcon = man02;
            break;
        }
        case 2: {
            titleIcon = man03;
            break;
        }
        case 3: {
            titleIcon = man04;
            break;
        }
        case 4: {
            titleIcon = man05;
            break;
        }
        case 5: {
            titleIcon = man06;
            break;
        }
        default:
            titleIcon = man01;
            break;
    }

    return (
        <Grid item xs={8} sm={4}>
            <Card className={classes.card}>
                <CardHeader title={props.title}
                            className={classes.title}
                            subheader={
                                <Typography variant="body1" color="textSecondary" gutterBottom>
                                    {props.company}
                                </Typography>}
                            avatar={
                                <Avatar className={classes.avatar}>
                                    <img className={classes.katok} src={titleIcon} alt="Работа"/>
                                </Avatar>
                            }

                />
                <CardContent>
                    <Typography variant="body1" color="textPrimary" gutterBottom>
                        {props.description}
                    </Typography>
                    <Typography className={classes.pos} variant="body2" color="textPrimary">
                        З/п: {props.price} руб.
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
