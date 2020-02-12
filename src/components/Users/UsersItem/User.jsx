import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import katokIcon from '../../../assets/icons/katok.svg'
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import {renderTextField, renderCheckbox} from '../../../common/renderFilds'
import {validate} from '../../../common/validate'

const useStyles = makeStyles(theme => ({
    link: {
        color: 'coral', // blueGrey[400],
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 'lighter',
        fontSize: 14,
    },
    title: {
        fontSize: 16,
        background:
            'linear-gradient(to bottom, #4e69a2, #3b5998 50%)',
        color: '#FFFFFF',
    },
    pos: {
        marginLeft: 12,
    },
    buttonSubmit: {
        margin: 10,
    },
    avatar: {
        backgroundColor: '#e9ecf4',
        width: 50,
        height: 50,
    },
    katok: {
        width: 45,
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
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    wi: {
        backgroundColor: '#e9ecf4'
    },
    adminPanel: {
        border: '2px solid grey',
        backgroundColor: '#e9ecf4'
    }
}));

/*linear-gradient(to right, #0d47a1, #ffff #f5f6f7)
* 'linear-gradient(to right, #0d47a1 90%, coral)'
* backgroundColor: '#3b5998',//#0d47a1*/
const User = (props) => {
    const classes = useStyles();
    //debugger
    /* let createAt = moment(props.createAt);

     createAt.locale('ru');*/
    //console.log(createAt.format('LL'));
    return (
        <Grid item xs={10}>
            <Card className={classes.card}>
                <CardHeader title={`${props.firstName} ${props.lastName}`}
                            className={classes.title}
                            avatar={
                                <Avatar className={classes.avatar}>
                                    <img className={classes.katok} src={katokIcon} alt="Пользователь"/>
                                </Avatar>
                            }
                />
                <CardContent>
                    <Typography className={classes.pos} variant="body2" color="textPrimary">
                        Логин: {props.email}
                    </Typography>
                    <Typography className={classes.pos} variant="body2" color="textPrimary">
                        Пароль: {props.password}
                    </Typography>
                    <Typography className={classes.pos} variant="body2" color="textPrimary">
                        Права на создание пользователей: {props.root === true ? "Да" : "Нет"}
                    </Typography>
                </CardContent>

                {props.adminMode ? <AdminPanelUsers {...props}/> : ''}
            </Card>
        </Grid>
    );
}

export default User;

const AdminPanelUsers = (props) => {
    //debugger
    const classes = useStyles();
    const [expandedCreate, setExpandedCreate] = React.useState(false);
    const [expandedEdit, setExpandedEdit] = React.useState(false);
    const [expandedDelete, setExpandedDelete] = React.useState(false);

    const handleCreateExpandClick = () => {
        // if(!props.id)
        setExpandedCreate(!expandedCreate);
        if (!expandedCreate) {
            props.setCurrentUsersId(props._id);
            props.setUserItem(true);
            setInitialData(props, true);
        } else {
            props.setIsAllUsers(true);
        }

        //props.getId(null);
    };

    const handleEditExpandClick = () => {

        setExpandedEdit(!expandedEdit);
        if (!expandedEdit) {
            props.setCurrentUsersId(props._id);
            props.setUserItem(true);
            setInitialData(props, false, false);
        } else {
            props.setIsAllUsers(true);

        }
    };

    const handleDeleteExpandClick = () => {
        //debugger
        props.setUsersCount(props.users.length);
        setExpandedDelete(!expandedDelete);
        if (!expandedDelete) {
            props.setCurrentUsersId(props._id);
            props.setUserItem(true);
            setInitialData(props, false, true);
        } else {
            props.setIsAllUsers(true);
            props.setUsersCount(null);
        }
    };

    const handleRefreshClick = () => {
        //setExpandedRefresh(!expandedRefresh);
        props.setIsAllUsers(true);
    };

    const showResults = (values) => {
        /*const position = values.project.indexOf('|', 0);
        let id, title;
        if (position > 0) {
            id = values.project.slice(0, position);
            title = values.project.slice(position + 1);
            values.project = id;
            values.projectTitle = title.trim();
        }*/

        //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        //props.saveNews(JSON.stringify(values, null, 2));
        /*initialData.id = null;
                initialData.firstName = '';
                initialData.lastName = '';
                initialData.email = '';
                initialData.password = '';
                initialData.root = false;*/
        if (expandedEdit) {
            props.updateUser(values.id, values.firstName, values.lastName, values.email, values.password, values.root);
            handleEditExpandClick();
        }


        if (expandedCreate) {
            props.createUser(values.firstName, values.lastName, values.email, values.password, values.root);
            handleCreateExpandClick();
        }

        if (expandedDelete) {
            props.deleteUser(values.id);
            handleDeleteExpandClick();
        }
    };

    return (
        <>
            <CardActions>
                <Typography variant="body2" color="textPrimary">
                    Создать
                </Typography>
                <Tooltip title={!expandedCreate ? "Создать пользователя" : "Отмена"} placement={'top'} arrow>
                    <IconButton onClick={handleCreateExpandClick}
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expandedCreate,
                                })}
                                aria-expanded={expandedCreate}
                                aria-label="Показать больше"
                                disabled={expandedDelete || expandedEdit}>
                        <ExpandMoreIcon/>
                    </IconButton>
                </Tooltip>

                <Typography variant="body2" color="textPrimary">
                    Редактировать
                </Typography>
                <Tooltip title={!expandedEdit ? "Редактировать пользователя" : "Отмена"} placement={'top'} arrow>
                    <IconButton onClick={handleEditExpandClick}
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expandedEdit,
                                })}
                                aria-expanded={expandedEdit}
                                aria-label="Показать больше"
                                disabled={expandedCreate || expandedDelete || props._id === '0'}>
                        <ExpandMoreIcon/>
                    </IconButton>
                </Tooltip>

                <Typography variant="body2" color="textPrimary">
                    Удалить из БД
                </Typography>
                <Tooltip title={!expandedDelete ? "Удалить из БД" : "Отмена"} placement={'top'} arrow>
                    <IconButton onClick={handleDeleteExpandClick}
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expandedDelete,
                                })}
                                aria-expanded={expandedDelete}
                                aria-label="Показать больше"
                                disabled={expandedCreate || expandedEdit  || props._id === '0'}>
                        <ExpandMoreIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={"Обновить"} placement={'top'} arrow>
                    <Button className={classes.buttonSubmit} variant="outlined" size="small" type="button"
                            disabled={expandedCreate || expandedEdit || expandedDelete  || props._id === '0'}
                            onClick={handleRefreshClick}
                            startIcon={<RefreshIcon/>}>
                        Обновить
                    </Button>
                </Tooltip>
            </CardActions>
            <Collapse in={expandedCreate || expandedEdit || expandedDelete} timeout="auto"
                      unmountOnExit>
                <CardContent className={classes.adminPanel}>
                    <Typography variant="h6" color="textPrimary" align="center">
                        ПАНЕЛЬ АДМИНИСТРИРОВАНИЯ
                    </Typography>
                    <EditUsersReduxForm onSubmit={showResults}
                                        expandedCreate={expandedCreate}
                                        expandedEdit={expandedEdit}
                                        expandedDelete={expandedDelete}
                                        {...props}/>
                </CardContent>
            </Collapse>
        </>
    )
}

const setInitialData = (props, reset, expandedDelete) => {
    debugger
    if (reset) {
        initialData.id = null;
        initialData.firstName = '';
        initialData.lastName = '';
        initialData.email = '';
        initialData.password = '';
        initialData.root = false;
    } else {
        initialData.id = props._id;
        initialData.firstName = props.firstName;
        initialData.lastName = props.lastName;
        initialData.email = props.email;
        initialData.password = '';
        if (expandedDelete)
            initialData.root = false;
        else
            initialData.root = props.root;
    }

}

const initialData = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    root: null,
}
///////////////////////////////////////////////////////

const EditUsersForm = (props) => {
    const classesStyle = useStyles();
    const {handleSubmit, reset} = props;
    let {pristine, submitting} = props;
    //debugger
    //console.log(props.val + " " + props.expandedEdit);

    /*let projectsItems = projects.map(
        projectItem => <option key={projectItem._id} value={`${projectItem._id}| ${projectItem.title}`}
                               label={projectItem.title}></option>)*/

    if (props.expandedEdit) {
        pristine = false;
        submitting = false;
    }

    let getLabel = () => {
        if (props.expandedEdit || props.expandedCreate) {
            return "Права на создание и изменение пользователей"
        }
        if (props.expandedDelete) {
            return "Удалить из базы данных навсегда"
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            {!props.expandedDelete ? <>
                    <div>
                        <Field
                            name="firstName"
                            component={renderTextField}
                            label="Имя"
                        />
                    </div>
                    < div>
                        < Field
                            name="lastName"
                            component={renderTextField}
                            label="Фамилия"
                        />
                    </div>
                    < div>
                        < Field
                            name="email"
                            component={renderTextField}
                            label="Адрес электронной почты"
                        />
                    </div>
                    < div>
                        < Field
                            name="password"
                            component={renderTextField}
                            label="Пароль"
                            type="password"
                        />
                    </div>
                    < div>
                        < Field
                            name="confPassword"
                            component={renderTextField}
                            type="password"
                            label="Подтвердить пароль"
                        />
                    </div>
                </>
                : null
            }
            <div>
                <Field name="root"
                       component={renderCheckbox}
                       label={getLabel()}
                       disabled={props.usersCount === 1}/>
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

const EditUsersReduxForm = reduxForm({
    form: 'EditUsersForm', // a unique identifier for this form
    validate,
    initialValues: initialData
})(EditUsersForm)


/*
 || props.expandedCreate? true : false
* <>
                        {props.text.split('\n').map((i, key) => {
                            return <Typography key={key} paragraph variant="body1" color="textPrimary"
                                               gutterBottom>{i}</Typography>;
                        })}
                    </>
                    *
                    *
                    * <div>
                        <Field
                            classes={classes}
                            name="project"
                            component={renderSelectField}
                            label="Проект"
                        >
                            {props.expandedEdit ? <>
                                    <option value={props.project} label={props.projectTitle}/>
                                    <option value=''/>
                                </> :
                                <option value=''/>}
                            {projectsItems}
                        </Field>
                    </div>*/