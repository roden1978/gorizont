import React from 'react'
import s from './PhothoAlbum.module.css'
import GridList from "@material-ui/core/GridList";
import {makeStyles} from "@material-ui/core";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import katok from "../../assets/icons/katok.svg";

const PhotoAlbum = (props) => {
    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,

            transform:'translateY(35%)',
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
            backgroundColor: '#f5f6f7',
            alignItems:'center'
        },
        title: {
            color: theme.palette.primary.light,
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
        im:{

        }
    }));

    const classes = useStyles();

   /* let photoCards = props.cards.map(
        card => <SingleLinePhotosList key={card.id}
                                      title={card.title}
                                      url={card.url}/>
                                      backgroundColor: theme.palette.background.paper,
    )*/

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight = {'400'} cols={3.5} spacing={6}>
                {props.cards.map(card => (
                    <GridListTile cols={1} key={card.url ? card.url : katok}>
                        <img className={classes.im} src={card.url ? card.url : katok} alt={card.title} />
                        <GridListTileBar
                            title={card.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${card.title}`}>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default PhotoAlbum;

/*<Container className={classes.cardGrid} maxWidth="md">
                <GridList className={classes.gridList} cols={2.5}>
                    {photoCards}
                </GridList>
            </Container>

            */