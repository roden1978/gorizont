import React, {useState, useEffect} from 'react'
import s from './PhothoAlbum.module.css'
import GridList from "@material-ui/core/GridList";
import {makeStyles} from "@material-ui/core";
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import katok from "../../assets/icons/katok.svg";
import Avatar from "@material-ui/core/Avatar";
import ModalPhoto from "../../common/ModalPhoto";
import Container from "@material-ui/core/Container";
import {NavLink} from "react-router-dom";
import {blueGrey} from "@material-ui/core/colors";

const PhotoAlbum = (props) => {

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            transform: 'translateZ(0)',
        },
        gridList: {
            backgroundColor: '#f5f6f7',
            flexDirection: 'row',
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
        im: {
            width: '120%',
        },
        avatar: {
            backgroundColor: '#f5f6f7',
            width: 40,
            height: 40,
            color: 'rgba(255, 255, 255, 0.54)',
        },
        katok: {
            width: 35,
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
    }));

    const classes = useStyles();

debugger
    return (
        <div className={classes.root}>

            <Container maxWidth="md" sx = {5}>
            <GridList cellHeight={400} className={classes.gridList} >
                {props.cards.map(card => (
                    <GridListTile key={card.url ? card.url : katok} >
                        <ButtonBase   onClick={()=>{
                            props.changeClicked(true);
                            props.getUrl(card.url);
                        }}>
                            <img className={classes.im} src={card.url ? card.url : katok} alt={card.title}/>
                        </ButtonBase>
                        <GridListTileBar
                            title={card.title}
                            className={classes.titleBar}
                            actionIcon={
                                <Avatar className={classes.avatar}>
                                    <img className={classes.katok} src={katok} alt={card.title}/>
                                </Avatar>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
            </Container>
            {props.isClicked ? <ModalPhoto changeClicked = {props.changeClicked} url = {props.url}/> : null}

        </div>
    );
    //onClose()
}

export default PhotoAlbum;

/*<Container className={classes.cardGrid} maxWidth="md">
                <GridList className={classes.gridList} cols={2.5}>
                    {photoCards}
                </GridList>
            </Container>
 actionIcon={
                                <IconButton aria-label={`star ${card.title}`}>
                                    <StarBorderIcon className={classes.title}/>
                                </IconButton>
                            }
                            title={card.title}



                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">December</ListSubheader>
                </GridListTile>
            */