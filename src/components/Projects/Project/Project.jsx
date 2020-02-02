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
import moment from "moment";
import 'moment/locale/ru'
import Tooltip from "@material-ui/core/Tooltip";
import {Field, reduxForm} from "redux-form";
import {renderCheckbox, renderSelectField, renderTextField} from "../../../common/renderFilds";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme =>({
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        background:
            'linear-gradient(to bottom, #4e69a2, #3b5998 50%)', //#0d47a1 #1976d2
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
    date: {
        marginLeft: 12
    },
    expand: {
        transform: 'rotate(0deg)',
        backgroundColor:'#f5f6f7',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    wi: {
        backgroundColor: '#e9ecf4'
    },
    adminPanel: {
        border: '2px solid grey',
        backgroundColor: '#e9ecf4'
    },
    buttonSubmit: {
        marginLeft: 10,
    },
}));

const Project = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        if(!props.id)
        setExpanded(!expanded);
        props.getId(null);
    };

    const expandOver = () =>{
        setExpanded(!expanded);
        props.getId(null);
    }

    let createAt = moment(props.createAt);
    createAt.locale('ru');
//debugger
//arginLeft: 'auto',

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
                <CardActions  className={classes.card_act}>
                    {props.albumId ? <>
                    <Typography variant="body2" color="textPrimary">
                        Фотоальбом
                    </Typography>
                    <Tooltip title="Открыть фотоальбом" placement={'top'} arrow>
                            <IconButton aria-label="Фотоальбом"
                                        component={Link} to={'/album/' + props.albumId}>
                                <PhotoLibraryOutlinedIcon />
                            </IconButton>
                    </Tooltip>
                    </>
                    : ''}
                    <Typography variant="body2" color="textPrimary" >
                        Показать больше
                    </Typography>
                    <Tooltip title={!expanded ? "Показать больше" : "Свернуть"} placement={'top'} arrow>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded }
                        aria-label="Показать больше"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                    </Tooltip>
                </CardActions>
                <Collapse in={expanded || props.id} timeout="auto" unmountOnExit>
                    <CardContent>
                        <>
                            {props.text.split('\n').map((i, key) => {
                                return <Typography key={key} paragraph variant="body1" color="textPrimary" gutterBottom>{i}</Typography>;
                            })}
                        </>
                    </CardContent>
                </Collapse>
                <Typography className={classes.date} variant="body2" color="textSecondary">
                    Старт проекта: {createAt.format('LL')}
                </Typography>
                {props.adminMode ? <AdminPanelProjects expandOver = {expandOver} {...props}/> : ''}
            </Card>
        </Grid>
    );
}

export default Project;

/*
{props.adminMode ? <AdminPanelNews setLoadProjects={props.setLoadProjects} projects={props.projects}
                                                   saveNews={props.saveNews} setNewsCount={props.setNewsCount}
                                                   count={props.news.length} newsCount = {props.newsCount}
                                                   {...props}/> : ''}
 */

const AdminPanelProjects = (props) => {
    debugger
    const classes = useStyles();
    const [expandedCreate, setExpandedCreate] = React.useState(false);
    const [expandedEdit, setExpandedEdit] = React.useState(false);
    const [expandedDelete, setExpandedDelete] = React.useState(false);

    const handleCreateExpandClick = () => {
        // if(!props.id)
        setExpandedCreate(!expandedCreate);
        if (!expandedCreate) {
            props.setLoadAlbums(true);
            props.getId(props._id);
            props.setProjectsItem(true);
            setInitialData(props, true);
        } else {
            props.expandOver();
            props.albums.length = 0;
            props.setIsAllProjects(true);
        }

        //props.getId(null);
    };

    const handleEditExpandClick = () => {

        setExpandedEdit(!expandedEdit);
        if (!expandedEdit) {
            props.setLoadAlbums(true);
            props.getId(props._id);
            props.setProjectsItem(true);
            setInitialData(props, false, false);
        } else {
            props.expandOver();
            props.setIsAllProjects(true);
        }

        //props.getId(null);
    };

    const handleDeleteExpandClick = () => {
        debugger
        props.setProjectsCount(props.count);
        setExpandedDelete(!expandedDelete);
        if (!expandedDelete) {
            props.getId(props._id);
            props.setProjectsItem(true);
            setInitialData(props, false, true);
        } else {
            props.expandOver();
            props.setIsAllProjects(true);
        }
    };

    const showResults = (values) => {
        const position = values.albumId.indexOf('|', 0);
        let id, title;
        if (position > 0) {
            id = values.albumId.slice(0, position);
            title = values.albumId.slice(position + 1);
            values.albumId = id;
            values.albumName = title.trim();
        }

        //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        //props.saveNews(JSON.stringify(values, null, 2));
        /*id: null,
    title: '',
    description: '',
    text: '',
    albumId: '',
    albumName: '',
    status: null,
    createAt: null*/


        if (expandedEdit) {
            props.updateProject(values.id, values.title, values.description, values.text, values.albumId, values.albumName, values.status, values.createAt);
            handleEditExpandClick();
        }


        if (expandedCreate) {
            props.createProject(values.title, values.description, values.text, values.albumId, values.albumName, values.status);
            handleCreateExpandClick();
        }

        if (expandedDelete) {
            props.deleteProject(values.id);
            handleDeleteExpandClick();
        }


    };

    return (
        <>
            <CardActions>
                <Typography variant="body2" color="textPrimary">
                    Создать
                </Typography>
                <Tooltip title={!expandedCreate ? "Создать новость" : "Отмена"} placement={'top'} arrow>
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
                <Tooltip title={!expandedEdit ? "Редактировать новость" : "Отмена"} placement={'top'} arrow>
                    <IconButton onClick={handleEditExpandClick}
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expandedEdit,
                                })}
                                aria-expanded={expandedEdit}
                                aria-label="Показать больше"
                                disabled={expandedCreate || expandedDelete}>
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
                                disabled={expandedCreate || expandedEdit}>
                        <ExpandMoreIcon/>
                    </IconButton>
                </Tooltip>

            </CardActions>
            <Collapse in={expandedCreate || expandedEdit || expandedDelete} timeout="auto"
                      unmountOnExit>
                <CardContent className={classes.adminPanel}>
                    <Typography variant="h6" color="textPrimary" align="center">
                        ПАНЕЛЬ АДМИНИСТРИРОВАНИЯ
                    </Typography>
                    <EditProjectsReduxForm onSubmit={showResults}
                                       expandedCreate={expandedCreate}
                                       expandedEdit={expandedEdit}
                                       expandedDelete={expandedDelete}
                                       albums={props.albums}
                                       projectsCount = {props.projectsCount}
                                       {...props}/>
                </CardContent>
            </Collapse>
        </>
    )
}

const validate = (values) => {
    const errors = {}
    const requiredFields = [
        'title',
        'text',
        'description'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Обязательное поле'
        }
    })
    return errors
}

const setInitialData = (props, reset, expandedDelete) => {
    debugger
    if (reset) {
        initialData.id = null;
        initialData.title = '';
        initialData.description = '';
        initialData.text = '';
        initialData.albumId = '';
        initialData.albumName = '';
        initialData.status = true;
        initialData.createAt = null
    } else {
        initialData.id = props._id;
        initialData.title = props.title;
        initialData.description = props.description;
        initialData.text = props.text;
        initialData.albumId = props.albumId;
        initialData.albumName = props.albumName;
        if (expandedDelete)
            initialData.status = false;
        else
            initialData.status = props.status;
        initialData.createAt = props.createAt;
    }

}

const initialData = {
    id: null,
    title: '',
    description: '',
    text: '',
    albumId: '',
    albumName: '',
    status: null,
    createAt: null
}
///////////////////////////////////////////////////////

const EditProjectsForm = (props) => {
    const classesStyle = useStyles();
    const {handleSubmit, reset, classes, albums} = props;
    let {pristine, submitting} = props;
    debugger
    //console.log(props.val + " " + props.expandedEdit);

    let albumsItem = albums.map(
        album => <option key={album.id} value={`${album.id}| ${album.description._content}`}
                               label={album.description._content}></option>)

    if (props.expandedEdit) {
        pristine = false;
        submitting = false;
    }

    let getLabel = () => {
        if (props.expandedEdit || props.expandedCreate) {
            return "Показывать на сайте"
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
                            name="title"
                            component={renderTextField}
                            label="Заголовок"
                            full="true"
                            value={props.title}
                        />
                    </div>
                    <div>
                        <Field
                            name="description"
                            component={renderTextField}
                            label="Краткое описание"
                            full="true"
                            value={props.description}
                        />
                    </div>
                    < div>
                        < Field
                            name="text"
                            component={renderTextField}
                            label="Описание проекта"
                            full="true"
                            multiline
                            rowsMax="10"
                            margin="normal"
                        />
                    </div>
                    <div>
                        <Field
                            classes={classes}
                            name="albumId"
                            component={renderSelectField}
                            label="Фотоальбом"
                            full="true"

                        >
                            {props.expandedEdit ? <>
                                    <option value={props.albumId} label={props.albumName}/>
                                    <option value=''/>
                                </> :
                                <option value=''/>}
                            {albumsItem}
                        </Field>
                    </div>
                </>
                : null
            }
            <div>
                <Field name="status"
                       component={renderCheckbox}
                       label={getLabel()}
                       disabled={props.projectsCount === 1 ? true : false}/>
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

const EditProjectsReduxForm = reduxForm({
    form: 'EditProjectsForm', // a unique identifier for this form
    validate,
    initialValues: initialData
})(EditProjectsForm)