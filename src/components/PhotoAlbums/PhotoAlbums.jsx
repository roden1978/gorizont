import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import katok from '../../assets/icons/katok.svg';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';


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
    }
}));

const PhotoAlbums = (props) => {
    const classes = useStyles();
debugger
   /* let primaryPhoto = null;
    debugger
    if (props.photos.photo.length > 0) {
        primaryPhoto = props.photos.photo.find(ph => ph.label == "Medium")
    }*/

    //debugger
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={
                        props.photos.primaryPhotoURL ? props.photos.primaryPhotoURL : katok}
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
                    <Button size="small" color="primary">
                        View
                    </Button>
                </CardActions>
            </Card>
        </Grid>

    );
}

export default PhotoAlbums;


