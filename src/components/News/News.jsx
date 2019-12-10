import React from 'react'
import NewsItem from './NewsItem/NewsItem'
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";

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
    }
}));

const News = (props) => {
    //debugger
    const classes = useStyles();

    let newsItems = props.news.news.map(
        newsItem => <NewsItem key={newsItem.__id}  {...newsItem}/>)

    return (
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
                {newsItems}
            </Grid>
            </Container>
        </div>
    );
}

export default News;