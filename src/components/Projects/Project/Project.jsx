import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import katokIcon from '../../../assets/icons/katok.svg'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from "@material-ui/core/Collapse";
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import {Link} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "../../Header/Header.module.css";

const useStyles = makeStyles(theme =>({
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        backgroundColor: '#2d7fff', //#0d47a1 #1976d2
        color: '#ffffff',
    },
    pos: {
        marginLeft: 12,
        fontSize: 14,
        fontWeight: 'bold',
    },
    avatar: {
        backgroundColor: '#f5f6f7',
        width: 50,
        height: 50,
    },
    katok: {
        width: 45,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        minHeight: 140,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        backgroundColor:'#f5f6f7',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

const Project = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        if(!props.id)
        setExpanded(!expanded);
        props.getId(null);
    };
debugger


    return(
        <Grid item xs={10}>
            <Card className={classes.card}>
                <CardHeader title={props.title}
                            className={classes.title}
                            avatar={
                                <Avatar className={classes.avatar}>
                                    <img className={classes.katok} src={katokIcon} alt="Работа"/>
                                </Avatar>
                            }

                />
                <CardContent>
                    <Typography variant="body1" color="textPrimary" gutterBottom>
                        {props.description}
                    </Typography>

                </CardContent>
                <CardActions  disableSpacing>
                    {props.albumId ? <IconButton aria-label="Фотоальбом"
                                                 component={Link} to={'/album/' + props.albumId}>
                        <PhotoLibraryOutlinedIcon />
                    </IconButton>
                    : ''}

                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded }
                        aria-label="Показать больше"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded || props.id} timeout="auto" unmountOnExit>
                    <CardContent>
                        {props.text.map(paragraph => <Typography paragraph>{paragraph}</Typography>)}
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>





      /*
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                <div className={styles.name}>{props.title}</div>
                {props.description}
            </div>

        </div>*/
    );
}

export default Project;