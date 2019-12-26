import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import katok from '../../assets/icons/katok.svg';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        color: 'coral',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 'lighter',
        fontSize: 14,
    },
}));

const PhotoAlbums = (props) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={
                        props.url ? props.url : katok}
                />
                <CardContent className={classes.cardContent}>
                    <Typography>
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink to={'/album/' + props.id} className={classes.link}>Обзор</NavLink>
                </CardActions>
            </Card>
        </Grid>

    );
}

export default PhotoAlbums;



