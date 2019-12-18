import React from 'react'
import s from './Contacts.module.css'
import {Container, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import katokIcon from "../../assets/icons/katok.svg";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
    },
    title: {
        fontSize: 16,
        backgroundColor: '#0d47a1',
        color: '#FFFFFF',
    },
}));

const Contacts = (props) => {
    const classes = useStyles();
    //const info = props.contacts[0];
    debugger
    return(
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
                        <Grid item xs={5}>
                               <Card>
                                   <CardHeader title={props.contacts.length === 0 ? '' : props.contacts[0].companyName}
                                   className={classes.title}/>
                                   <CardContent>
                                       <Typography variant="body1" color="textPrimary" gutterBottom>
                                           {props.contacts.length === 0 ? '' : 'Адрес:' + props.contacts[0].companyAddress}
                                       </Typography>
                                       <Typography variant="body1" color="textPrimary" gutterBottom>
                                           {props.contacts.length === 0 ? '' : 'Эл. почта: ' + props.contacts[0].companyEmail}
                                       </Typography>
                                       <Typography variant="body1" color="textPrimary" gutterBottom>
                                           {props.contacts.length === 0 ? '' : 'Телефон: ' + props.contacts[0].companyPhone}
                                       </Typography>
                                       <Typography variant="body1" color="textPrimary" gutterBottom>
                                           {props.contacts.length === 0 ? '' : props.contacts[0].phoneOwner01 + ": " + props.contacts[0].phone01}
                                       </Typography>
                                       <Typography variant="body1" color="textPrimary" gutterBottom>
                                           {props.contacts.length === 0 ? '' : props.contacts[0].phoneOwner02 + ": " + props.contacts[0].phone02}
                                       </Typography>
                                       <Typography variant="body1" color="textPrimary" gutterBottom>
                                           {props.contacts.length === 0 ? '' : props.contacts[0].phoneOwner03 + ": " + props.contacts[0].phone03}
                                       </Typography>
                                       <Typography variant="body1" color="textPrimary" gutterBottom>
                                           {props.contacts.length === 0 ? '' : props.contacts[0].phoneOwner04 + ": " + props.contacts[0].phone04}
                                       </Typography>
                                       <Typography variant="body1" color="textPrimary" gutterBottom>
                                           {props.contacts.length === 0 ? '' : props.contacts[0].phoneOwner05 + ": " + props.contacts[0].phone05}
                                       </Typography>
                                   </CardContent>
                               </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
    );
}

export default Contacts;
