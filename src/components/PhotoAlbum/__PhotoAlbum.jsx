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

const PhotoAlbum = (props) => {

   /* const [isClicked, setClicked] = useState(false);
    const [open, setOpen] = useState(true)
    const onButtonClickOpen = () =>{
        debugger
        setClicked(true);
        //setOpen(false);
    }*/

   /* useEffect(()=>{
        debugger
        if(open){
            setClicked(false);
        }
            setOpen(true);

    }, [open])*/

    /*const onClose = () =>{
        setClicked(false);
    }*/

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,

            transform: 'translateY(35%)',
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
            backgroundColor: '#f5f6f7',
            alignItems: 'center'
        },
        title: {
            color: theme.palette.primary.light,
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
        im: {
            width: '120%',
        },
        avatar: {
            backgroundColor: '#f5f6f7',
            width: 40,
            height: 40,
        },
        katok: {
            width: 35,
        },
    }));

    const classes = useStyles();

    /* let photoCards = props.cards.map(
         card => <SingleLinePhotosList key={card.id}
                                       title={card.title}
                                       url={card.url}/>
                                       backgroundColor: theme.palette.background.paper,
     )*/
debugger
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight={'400'} cols={3.5} spacing={6}>
                {props.cards.map(card => (
                    <GridListTile cols={1} key={card.url ? card.url : katok}>
                        <ButtonBase   onClick={()=>{
                            props.changeClicked(true);
                            props.getUrl(card.url);
                        }}>
                            <img className={classes.im} src={card.url ? card.url : katok} alt={card.title}/>
                        </ButtonBase>
                        <GridListTileBar
                            title={card.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <Avatar className={classes.avatar}>
                                    <img className={classes.katok} src={katok} alt={card.title}/>
                                </Avatar>
                            }
                        />
                    </GridListTile>
                ))}

            </GridList>
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
            */