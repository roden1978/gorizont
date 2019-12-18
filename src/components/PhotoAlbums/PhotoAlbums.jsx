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
import {blueGrey} from "@material-ui/core/colors";


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
        color: blueGrey[400],
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 'lighter',
        fontSize: 14,
    },
}));

const PhotoAlbums = (props) => {
    const classes = useStyles();
//debugger
   /* let primaryPhoto = null;
    debugger
    if (props.photos.photo.length > 0) {
        primaryPhoto = props.photos.photo.find(ph => ph.label == "Medium")
    }*/

    //debugger
   /* const photoAlbum = <NavLink to={'/album/' + props.key}/>*/

    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={
                        props.url ? props.url : katok}
                    title={props.title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography>
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/*<Button size="small" color="primary" onClick={() => {
                        {photoAlbum}
                    }}>
                        Обзор фотоальбома
                    </Button>*/}
                    <NavLink to={'/album/' + props.id} className={classes.link}>Обзор фотоальбома</NavLink>
                </CardActions>
            </Card>
        </Grid>

    );
}

export default PhotoAlbums;


