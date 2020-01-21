import React from 'react'
import {NavLink} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";
import 'moment/locale/ru'
import katokIcon from '../../../assets/icons/katok.svg'
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles({
    link: {
        color: 'coral', // blueGrey[400],
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 'lighter',
        fontSize: 14,
    },
    title: {
        fontSize: 16,
        background:
            'linear-gradient(to bottom, #4e69a2, #3b5998 50%)',
        color: '#FFFFFF',
    },
    pos: {
        marginLeft: 12,
    },
    avatar: {
        backgroundColor: '#e9ecf4',
        width: 50,
        height: 50,
    },
    katok: {
        width: 45,
    }
});

/*linear-gradient(to right, #0d47a1, #ffff #f5f6f7)
* 'linear-gradient(to right, #0d47a1 90%, coral)'
* backgroundColor: '#3b5998',//#0d47a1*/
const NewsItem = (props) => {
    const classes = useStyles();

    let createAt = moment(props.createAt);

    createAt.locale('ru');
    //console.log(createAt.format('LL'));
    return (
        <Grid item xs={10}>
            <Card className={classes.card}>
                <CardHeader title={props.title}
                            className={classes.title}
                            avatar={
                                <Avatar className={classes.avatar}>
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
                        Проект:
                    </Typography>

                    <NavLink to={'/projects/' + props.project}
                             className={classes.link}>{props.projectTitle}</NavLink>
                </CardActions>
                <Typography className={classes.pos} variant="body2" color="textSecondary" gutterBottom>
                    {createAt.format('LL')}
                </Typography>
                <AdminPanelNews/>
            </Card>
        </Grid>
    );
}

export default NewsItem;

const AdminPanelNews = (props) => {
    return (
        <>
            <CardActions>
                <Typography variant="body2" color="textPrimary">
                    Создать
                </Typography>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
                <Typography variant="body2" color="textPrimary">
                    Редактировать
                </Typography>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
                <Typography variant="body2" color="textPrimary">
                    Удалить
                </Typography>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in = {true} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2" color="textPrimary">
                        Admin panel
                    </Typography>
                </CardContent>
            </Collapse>
        </>
    )
}

const EditNewsForm = () =>{
    return(
        <form>

        </form>
    )
}
