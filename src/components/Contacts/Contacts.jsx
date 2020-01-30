import React from 'react'
import {Container, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import {Field, reduxForm} from "redux-form";
import {renderTextField} from "../../common/renderFilds";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        flexWrap: 'wrap'
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
        background:
            'linear-gradient(to bottom, #4e69a2, #3b5998 50%)',//#0d47a1
        color: '#FFFFFF',
    },
    adminPanel: {
        border: '2px solid grey',
        backgroundColor: '#e9ecf4'
    },
    buttonSubmit: {
        margin: 10,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        backgroundColor: '#f5f6f7',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const Contacts = (props) => {
    const classes = useStyles();
    //const info = props.contacts[0];
    //debugger
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
                        <Grid item xs={10}>
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
                                   {props.adminMode ? <AdminPanelContacts  {...props}/> : ''}
                               </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
    );
}

export default Contacts;

const AdminPanelContacts = (props) => {
    debugger
    const classes = useStyles();
    const [expandedEdit, setExpandedEdit] = React.useState(false);


    const handleEditExpandClick = () => {
        debugger
        setExpandedEdit(!expandedEdit);
        if (!expandedEdit) {
            setInitialData(props);
        } else {
            props.setIsChangedContacts(true);
        }

        //props.getId(null);
    };

    const showResults = (values) => {
        //     window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        //props.saveNews(JSON.stringify(values, null, 2));


        if (expandedEdit) {
            props.updateContacts(values.id, values.companyName, values.companyAddress, values.companyEmail
                , values.companyPhone, values.phoneOwner01, values.phone01, values.phoneOwner02
                , values.phone02, values.phoneOwner03, values.phone03, values.phoneOwner04
                , values.phone04, values.phoneOwner05, values.phone05);
            handleEditExpandClick();
        }


    };


    return (
        <>
            <CardActions>
                <Typography variant="body2" color="textPrimary">
                    Редактировать
                </Typography>
                <Tooltip title={!expandedEdit ? "Редактировать контакты" : "Отмена"} placement={'top'}
                         arrow>
                    <IconButton onClick={handleEditExpandClick}
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expandedEdit,
                                })}
                                aria-expanded={expandedEdit}
                                aria-label="Показать больше">
                        <ExpandMoreIcon/>
                    </IconButton>
                </Tooltip>

            </CardActions>
            <Collapse in={expandedEdit} timeout="auto"
                      unmountOnExit>
                <CardContent className={classes.adminPanel}>
                    <Typography variant="h6" color="textPrimary" align="center">
                        ПАНЕЛЬ АДМИНИСТРИРОВАНИЯ
                    </Typography>
                    <EditContactsReduxForm onSubmit={showResults}
                                        expandedEdit={expandedEdit}
                                        {...props}/>
                </CardContent>
            </Collapse>
        </>
    )
}
/*
* ,
        'phoneOwner01', 'phone01', 'phoneOwner02', 'phone02',
        'phoneOwner03', 'phone03', 'phoneOwner04', 'phone04',
        'phoneOwner05', 'phone05'*/

const validate = (values) => {
    const errors = {}
    const requiredFields = [
        'companyName', 'companyAddress', 'companyEmail', 'companyPhone'
    ]
    const requiredPhones = ['companyPhone','phone01', 'phone02',
        'phone03', 'phone04', 'phone05']

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Обязательное поле'
        }
    })

    requiredPhones.forEach(phone => {
        if (values[phone] &&
            !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(values[phone])) {
            errors[phone] = 'Не верный формат телефона'
        }
    })

    if (
        values.companyEmail &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.companyEmail)
    )
    {
        errors.companyEmail = 'Не верный формат электронной почты'
    }

    /*if (
        values.companyPhone &&
        !/^(0|[1-9][0-9]{9})$/i.test(values.companyPhone)
    )
    {
        errors.companyPhone = 'Не верный формат телефона'
    }*/

    return errors
}

/*
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }*/

////////////////////////////////////////////////////////
const setInitialData = (props) => {
    debugger
    initialData.id = props.contacts[0]._id;
    initialData.companyName = props.contacts[0].companyName;
    initialData.companyAddress = props.contacts[0].companyAddress;
    initialData.companyEmail = props.contacts[0].companyEmail;
    initialData.companyPhone = props.contacts[0].companyPhone;
    initialData.phoneOwner01 = props.contacts[0].phoneOwner01;
    initialData.phone01 = props.contacts[0].phone01;
    initialData.phoneOwner02 = props.contacts[0].phoneOwner02;
    initialData.phone02 = props.contacts[0].phone02;
    initialData.phoneOwner03 = props.contacts[0].phoneOwner03;
    initialData.phone03 = props.contacts[0].phone03;
    initialData.phoneOwner04 = props.contacts[0].phoneOwner04;
    initialData.phone04 = props.contacts[0].phone04;
    initialData.phoneOwner05 = props.contacts[0].phoneOwner05;
    initialData.phone05 = props.contacts[0].phone05;
}

const initialData = {
    id: null,
    companyName: '',
    companyAddress: '',
    companyEmail: '',
    companyPhone: '',
    phoneOwner01: '',
    phone01: '',
    phoneOwner02: '',
    phone02: '',
    phoneOwner03: '',
    phone03: '',
    phoneOwner04: '',
    phone04: '',
    phoneOwner05: '',
    phone05: ''
}


///////////////////////////////////////////////////////

const EditContactsForm = (props) => {
    const classesStyle = useStyles();
    const {handleSubmit, reset} = props;
    let {pristine, submitting} = props;
    debugger


    if (props.expandedEdit) {
        pristine = false;
        submitting = false;
    }

    return (
        <form onSubmit={handleSubmit}>
           <div>
            < Field
                name="companyName" component={renderTextField} label="Название компании" margin="normal"
                inputProps={{style: {width: '50%'}}}
            />

                < Field
                    name="companyAddress" component={renderTextField} label="Адрес компании" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />
            </div>

                < Field
                    name="companyEmail" component={renderTextField} label="Электронная почта" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />


                < Field
                    name="companyPhone" component={renderTextField} label="Телефон компании" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />
            <div>
                < Field
                    name="phoneOwner01" component={renderTextField} label="Владелец телефона" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />

                < Field
                    name="phone01" component={renderTextField} label="Телефон" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />
            </div>
            <div>
                < Field
                    name="phoneOwner02" component={renderTextField} label="Владелец телефона" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />
                < Field
                    name="phone02" component={renderTextField} label="Телефон" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />
            </div>
            <div>
                < Field
                    name="phoneOwner03" component={renderTextField} label="Владелец телефона" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />
                < Field
                    name="phone03" component={renderTextField} label="Телефон" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />
            </div>
            <div>
                < Field
                    name="phoneOwner04" component={renderTextField} label="Владелец телефона" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />
                < Field
                    name="phone04" component={renderTextField} label="Телефон" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />
            </div>
            <div>
                < Field
                    name="phoneOwner05" component={renderTextField} label="Владелец телефона" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />

                < Field
                    name="phone05" component={renderTextField} label="Телефон" margin="normal"
                    inputProps={{style: {width: '50%'}}}
                />
            </div>
            <div>
                <Button className={classesStyle.buttonSubmit} variant="contained" color="primary" type="submit"
                        disabled={pristine || submitting}>
                    Отправить
                </Button>
                <Button className={classesStyle.buttonSubmit} variant="contained" color="primary" type="button"
                        disabled={pristine || submitting} onClick={reset}>
                    Очистить поля
                </Button>
            </div>
        </form>
    )
}
////////////////////////////label="Показывать на сайте"


////////////////////////////
const EditContactsReduxForm = reduxForm({
    form: 'EditAboutForm', // a unique identifier for this form
    validate,
    initialValues: initialData
})(EditContactsForm)
