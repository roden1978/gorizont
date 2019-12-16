import React from 'react'
import s from './Gallery.module.css'
import PhotoAlbums from "../PhotoAlbums/PhotoAlbums";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    heroContent: {

        padding: theme.spacing(0, 3, 0),
    },
    cardGrid: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(8),
    }
}));

const Gallery = (props) => {
    const classes = useStyles();
    debugger

    //props.sets.sets.splice(0, Math.ceil(props.sets.sets.length/2) - 1)

    let sets = props.sets.map(
        photoset => <PhotoAlbums key={photoset.id}
                                          title={photoset.title._content}
                                          description={photoset.description._content}
                                          url={photoset.primary}/>
    )


    return (
        <div className={classes.root}>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        В галерее представлены фотоальбомы к проектам ООО Горизонт
                    </Typography>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container
                      direction="row"
                      justify="space-evenly"
                      alignItems="center"
                      spacing={10}>
                    {sets}
                </Grid>
            </Container>
        </div>
    );

}

export default Gallery;
