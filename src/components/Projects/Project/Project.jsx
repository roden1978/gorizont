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

const useStyles = makeStyles(theme =>({
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16,
        backgroundColor: '#1976d2', //#0d47a1
        color: '#ffffff'
    },
    pos: {
        marginLeft: 12,
        fontSize: 14,
        fontWeight: 'bold',
    },
    avatar: {
        backgroundColor: '#ffffff',
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
        minHeight: 160,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        backgroundColor:'coral',
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
        setExpanded(!expanded);
    };

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
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Показать больше"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>{props.description}</Typography>
                        <Typography paragraph>{props.description}</Typography>
                        <Typography paragraph>{props.description}</Typography>
                        <Typography paragraph>{props.description}</Typography>
                        <Typography paragraph>{props.description}</Typography>
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