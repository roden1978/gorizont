import React from 'react'
import {Container} from "@material-ui/core";
import {useStyles} from './ContactsStyles';
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
import {validate} from '../../common/validate'
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import maps from '../../assets/pictures/maps.png'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Contacts = (props) => {
    const classes = useStyles();
//debugger
    return (
        <div className={classes.root}>
            <Container className={classes.cardGrid} maxWidth={props.mobile ? 'xl' : 'lg'}>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                    spacing={3}
                    className={classes.pos}
                >
                    <Grid item xs={!props.adminMode && !props.mobile ? 5 : 10}>
                        {props.contacts.length !== 0 ?
                            <>
                                <Card>
                                    <CardHeader title="Контакты"
                                                className={classes.title}/>
                                    <CardContent>
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className={clsx('', {
                                                            [classes.fnt]: props.mobile,
                                                        })}
                                                                   align="right"
                                                                   component="th" scope="row">Наименование</TableCell>
                                                        <TableCell className={clsx('', {
                                                                       [classes.fnt]: props.mobile,
                                                                   })}
                                                                   align="left">{props.contacts.length === 0 ? '' :
                                                            props.contacts[0].companyName}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className={clsx('', {
                                                            [classes.fnt]: props.mobile,
                                                        })}
                                                                   align="right" component="th"
                                                                   scope="row">Адрес</TableCell>
                                                        <TableCell className={clsx('', {
                                                            [classes.fnt]: props.mobile,
                                                        })}
                                                                   align="left">{props.contacts.length === 0 ? '' : props.contacts[0].companyAddress}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className={clsx('', {
                                                            [classes.fnt]: props.mobile,
                                                        })}
                                                                   align="right" component="th" scope="row">Электронная
                                                            почта</TableCell>
                                                        <TableCell className={clsx('', {
                                                            [classes.fnt]: props.mobile,
                                                        })}
                                                                   align="left">{props.contacts.length === 0 ? '' : props.contacts[0].companyEmail}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className={clsx('', {
                                                            [classes.fnt]: props.mobile,
                                                        })}
                                                                   align="right" component="th"
                                                                   scope="row">Телефон</TableCell>
                                                        <TableCell className={clsx('', {
                                                            [classes.fnt]: props.mobile,
                                                        })}
                                                                   align="left">{props.contacts.length === 0 ? '' : props.contacts[0].companyPhone}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        {props.contacts.length !== 0 && props.contacts[0].phoneOwner01 !== '' && props.contacts[0].phone01 !== '' ? <>
                                                                <TableCell className={clsx('', {
                                                                    [classes.fnt]: props.mobile,
                                                                })}
                                                                           align="right" component="th"
                                                                           scope="row">{props.contacts[0].phoneOwner01}</TableCell>
                                                                <TableCell className={clsx('', {
                                                                    [classes.fnt]: props.mobile,
                                                                })}
                                                                           align="left">{props.contacts[0].phone01}</TableCell>
                                                            </>
                                                            : null}
                                                    </TableRow>
                                                    <TableRow>
                                                        {props.contacts.length !== 0 && props.contacts[0].phoneOwner02 !== '' && props.contacts[0].phone02 !== '' ? <>
                                                                <TableCell className={clsx('', {
                                                                    [classes.fnt]: props.mobile,
                                                                })}
                                                                           align="right" component="th"
                                                                           scope="row">{props.contacts[0].phoneOwner02}</TableCell>
                                                                <TableCell className={clsx('', {
                                                                    [classes.fnt]: props.mobile,
                                                                })}
                                                                           align="left">{props.contacts[0].phone02}</TableCell>
                                                            </>
                                                            : null}
                                                    </TableRow>
                                                    <TableRow>
                                                        {props.contacts.length !== 0 && props.contacts[0].phoneOwner03 !== '' && props.contacts[0].phone03 !== '' ? <>
                                                                <TableCell className={clsx('', {
                                                                    [classes.fnt]: props.mobile,
                                                                })}
                                                                           align="right" component="th"
                                                                           scope="row">{props.contacts[0].phoneOwner03}</TableCell>
                                                                <TableCell className={clsx('', {
                                                                    [classes.fnt]: props.mobile,
                                                                })}
                                                                           align="left">{props.contacts[0].phone03}</TableCell>
                                                            </>
                                                            : null}
                                                    </TableRow>
                                                    <TableRow>
                                                        {props.contacts.length !== 0 && props.contacts[0].phoneOwner04 !== '' && props.contacts[0].phone04 !== '' ? <>
                                                                <TableCell className={clsx('', {
                                                                    [classes.fnt]: props.mobile,
                                                                })}
                                                                           align="right" component="th"
                                                                           scope="row">{props.contacts[0].phoneOwner04}</TableCell>
                                                                <TableCell className={clsx('', {
                                                                    [classes.fnt]: props.mobile,
                                                                })}
                                                                           align="left">{props.contacts[0].phone04}</TableCell>
                                                            </>
                                                            : null}
                                                    </TableRow>
                                                    <TableRow>
                                                        {props.contacts.length !== 0 && props.contacts[0].phoneOwner05 !== '' && props.contacts[0].phone05 !== '' ? <>
                                                                <TableCell className={clsx('', {
                                                                    [classes.fnt]: props.mobile,
                                                                })}
                                                                           align="right" component="th"
                                                                           scope="row">{props.contacts[0].phoneOwner05}</TableCell>
                                                                <TableCell className={clsx('', {
                                                                    [classes.fnt]: props.mobile,
                                                                })}
                                                                           align="left">{props.contacts[0].phone05}</TableCell>
                                                            </>
                                                            : null}
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </CardContent>
                                    {props.adminMode ? <AdminPanelContacts  {...props}/> : ''}
                                </Card>
                            </> : null}
                    </Grid>
                    {!props.adminMode && !props.mobile ? <>
                        <Grid item xs={5}>
                            <div>
                                <img src={maps} alt="maps"/>
                            </div>
                        </Grid>
                    </> : null}
                </Grid>
            </Container>
        </div>
    );
}

export default Contacts;

const AdminPanelContacts = (props) => {
    //debugger
    const classes = useStyles();
    const [expandedEdit, setExpandedEdit] = React.useState(false);
    const [expandedCreate, setExpandedCreate] = React.useState(false);

    const handleCreateExpandClick = () => {
        // if(!props.id)
        setExpandedCreate(!expandedCreate);
        if (!expandedCreate) {
            //props.setCurrentContactsId(props._id);
            //props.setContactsItem(true);
            setInitialData(props, true);
        } else {
            props.getContacts();
        }

        //props.getId(null);
    };
    const handleEditExpandClick = () => {
        //debugger
        setExpandedEdit(!expandedEdit);
        if (!expandedEdit) {
            setInitialData(props);
        } else {
            props.setIsChangedContacts(true);
        }

        //props.getId(null);
    };
    const handleRefreshClick = () => {
        //setExpandedRefresh(!expandedRefresh);
        props.getContacts();
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
        if (expandedCreate) {
            props.createContacts(values.companyName, values.companyAddress, values.companyEmail
                , values.companyPhone, values.phoneOwner01, values.phone01, values.phoneOwner02
                , values.phone02, values.phoneOwner03, values.phone03, values.phoneOwner04
                , values.phone04, values.phoneOwner05, values.phone05);
            handleCreateExpandClick();
        }

    };


    return (
        <>
            <CardActions>
                <Typography variant="body2" color="textPrimary">
                    Создать
                </Typography>
                <Tooltip title={!expandedCreate ? "Создать контакты" : "Отмена"} placement={'top'} arrow>
                    <IconButton onClick={handleCreateExpandClick}
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expandedCreate,
                                })}
                                aria-expanded={expandedCreate}
                                aria-label="Показать больше"
                                disabled={props.contacts.length !== 0 ? props.contacts[0]._id !== '0' : null}>
                        <ExpandMoreIcon/>
                    </IconButton>
                </Tooltip>

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
                                aria-label="Показать больше"
                                disabled={expandedCreate || props.contacts.length !== 0 ? props.contacts[0]._id === '0' : null}>
                        <ExpandMoreIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={"Обновить"} placement={'top'} arrow>
                    <Button className={classes.buttonSubmit} variant="outlined" size="small" type="button"
                            disabled={expandedEdit || props.contacts.length !== 0 ? props.contacts[0]._id === '0' : null}
                            onClick={handleRefreshClick}
                            startIcon={<RefreshIcon/>}>
                        Обновить
                    </Button>
                </Tooltip>
            </CardActions>
            <Collapse in={expandedEdit || expandedCreate} timeout="auto"
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
////////////////////////////////////////////////////////
const setInitialData = (props) => {
    //debugger
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

const EditContactsForm = (props) => {
    const classesStyle = useStyles();
    const {handleSubmit, reset} = props;
    let {pristine, submitting} = props;
    //debugger

    if (props.expandedEdit) {
        pristine = false;
        submitting = false;
    }

    const rightStyle = {style: {width: '45%', marginLeft: '6%'}}
    const leftStyle = {style: {width: '45%', marginLeft: '2%'}}

    return (
        <form onSubmit={handleSubmit}>
            <div>
                < Field
                    name="companyName" component={renderTextField} label="Название компании" margin="normal"
                    inputProps={leftStyle}
                />

                < Field
                    name="companyAddress" component={renderTextField} label="Адрес компании" margin="normal"
                    inputProps={rightStyle}
                />
            </div>
            <div>
                < Field
                    name="companyEmail" component={renderTextField} label="Электронная почта" margin="normal"
                    inputProps={leftStyle}
                />
                < Field
                    name="companyPhone" component={renderTextField} label="Телефон компании" margin="normal"
                    inputProps={rightStyle}
                />
            </div>
            <div>
                < Field
                    name="phoneOwner01" component={renderTextField} label="Владелец телефона" margin="normal"
                    inputProps={leftStyle}
                />

                < Field
                    name="phone01" component={renderTextField} label="Телефон" margin="normal"
                    inputProps={rightStyle}
                />
            </div>
            <div>
                < Field
                    name="phoneOwner02" component={renderTextField} label="Владелец телефона" margin="normal"
                    inputProps={leftStyle}
                />
                < Field
                    name="phone02" component={renderTextField} label="Телефон" margin="normal"
                    inputProps={rightStyle}
                />
            </div>
            <div>
                < Field
                    name="phoneOwner03" component={renderTextField} label="Владелец телефона" margin="normal"
                    inputProps={leftStyle}
                />
                < Field
                    name="phone03" component={renderTextField} label="Телефон" margin="normal"
                    inputProps={rightStyle}
                />
            </div>
            <div>
                < Field
                    name="phoneOwner04" component={renderTextField} label="Владелец телефона" margin="normal"
                    inputProps={leftStyle}
                />
                < Field
                    name="phone04" component={renderTextField} label="Телефон" margin="normal"
                    inputProps={rightStyle}
                />
            </div>
            <div>
                < Field
                    name="phoneOwner05" component={renderTextField} label="Владелец телефона" margin="normal"
                    inputProps={leftStyle}
                />

                < Field
                    name="phone05" component={renderTextField} label="Телефон" margin="normal"
                    inputProps={rightStyle}
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
////////////////////////////
const EditContactsReduxForm = reduxForm({
    form: 'EditAboutForm', // a unique identifier for this form
    validate,
    initialValues: initialData
})(EditContactsForm)
