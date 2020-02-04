import React from 'react'
import {NavLink} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";
import 'moment/locale/ru'
import katokIcon from '../../../assets/icons/katok.svg'
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import {renderTextField, renderCheckbox, renderSelectField} from '../../../common/renderFilds'
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
const NewsItem = (props) => {
    const classes = useStyles();
    debugger
    let createAt = moment(props.createAt);

    createAt.locale('ru');
    //console.log(createAt.format('LL'));
    return (
        <Grid item xs={10}>
            <Card className={classes.card}>
                <CardHeader title={props.title}
                            className={classes.title}
                            avatar={
                                <Avatar className={classes.avatar}>
                                    <img className={classes.katok} src={katokIcon} alt="Новости"/>
                                </Avatar>
                            }
                />
                <CardContent>
                    <>
                        {props.text.split('\n').map((i, key) => {
                            return <Typography key={key} paragraph variant="body1" color="textPrimary"
                                               gutterBottom>{i}</Typography>;
                        })}
                    </>
                </CardContent>
                <CardActions>
                    <Typography className={classes.pos} variant="body2" color="textPrimary">
                        Проект:
                    </Typography>

                    <NavLink to={'/projects/' + props.project}
                             className={classes.link}>{props.projectTitle}</NavLink>
                </CardActions>
                <Typography className={classes.pos} variant="body2" color="textSecondary" gutterBottom>
                    {createAt.format('LL')}
                </Typography>
                {props.adminMode ? <AdminPanelNews setLoadProjects={props.setLoadProjects} projects={props.projects}
                                                   saveNews={props.saveNews} setNewsCount={props.setNewsCount}
                                                   count={props.news.length} newsCount = {props.newsCount}
                                                   {...props}/> : ''}
            </Card>
        </Grid>
    );
}

export default NewsItem;

const AdminPanelNews = (props) => {
    //debugger
    const classes = useStyles();
    const [expandedCreate, setExpandedCreate] = React.useState(false);
    const [expandedEdit, setExpandedEdit] = React.useState(false);
    /*const [expandedHidden, setExpandedHidden] = React.useState(false);*/
    const [expandedDelete, setExpandedDelete] = React.useState(false);

    const handleCreateExpandClick = () => {
        // if(!props.id)
        setExpandedCreate(!expandedCreate);
        if (!expandedCreate) {
            props.setLoadProjects(true);
            props.setCurrentNewsId(props._id);
            props.setNewsItem(true);
            setInitialData(props, true);
        } else {
            props.projects.length = 0;
            props.setIsAllNews(true);
        }

        //props.getId(null);
    };

    const handleEditExpandClick = () => {

        setExpandedEdit(!expandedEdit);
        if (!expandedEdit) {
            props.setLoadProjects(true);
            props.setCurrentNewsId(props._id);
            props.setNewsItem(true);
            setInitialData(props, false, false);
        } else {
            props.setIsAllNews(true);

        }

        //props.getId(null);
    };

    const handleDeleteExpandClick = () => {
        debugger
        props.setNewsCount(props.count);
        setExpandedDelete(!expandedDelete);
        if (!expandedDelete) {
            props.setCurrentNewsId(props._id);
            props.setNewsItem(true);
            setInitialData(props, false, true);
        } else {
            props.setIsAllNews(true);

        }
    };

    const showResults = (values) => {
        const position = values.project.indexOf('|', 0);
        let id, title;
        if (position > 0) {
            id = values.project.slice(0, position);
            title = values.project.slice(position + 1);
            values.project = id;
            values.projectTitle = title.trim();
        }

        //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        //props.saveNews(JSON.stringify(values, null, 2));


        if (expandedEdit) {
            props.updateNews(values.id, values.title, values.text, values.project, values.projectTitle, values.status, values.createAt);
            handleEditExpandClick();
        }


        if (expandedCreate) {
            props.createNews(values.title, values.text, values.project, values.projectTitle, values.status);
            handleCreateExpandClick();
        }

        if (expandedDelete) {
            props.deleteNews(values.id);
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
                    <EditNewsReduxForm onSubmit={showResults}
                                       expandedCreate={expandedCreate}
                                       expandedEdit={expandedEdit}
                                       expandedDelete={expandedDelete}
                                       projects={props.projects}
                                       newsCount = {props.newsCount}
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
        initialData.title = '';
        initialData.text = '';
        initialData.project = '';
        initialData.status = true;
        initialData.projectTitle = '';
        initialData.createAt = null
    } else {
        initialData.id = props._id;
        initialData.title = props.title;
        initialData.text = props.text;
        initialData.project = props.project;
        if (expandedDelete)
            initialData.status = false;
        else
            initialData.status = props.status;
        initialData.projectTitle = props.projectTitle;
        initialData.createAt = props.createAt;
    }

}

const initialData = {
    id: null,
    title: '',
    text: '',
    project: '',
    projectTitle: '',
    status: null,
    createAt: null
}
///////////////////////////////////////////////////////

const EditNewsForm = (props) => {
    const classesStyle = useStyles();
    const {handleSubmit, reset, classes, projects} = props;
    let {pristine, submitting} = props;
    debugger
    //console.log(props.val + " " + props.expandedEdit);

    let projectsItems = projects.map(
        projectItem => <option key={projectItem._id} value={`${projectItem._id}| ${projectItem.title}`}
                               label={projectItem.title}></option>)

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
                        />
                    </div>
                    < div>
                        < Field
                            name="text"
                            component={renderTextField}
                            label="Текст новости"

                            multiline
                            rowsMax="4"
                            margin="normal"
                        />
                    </div>
                    <div>
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
                    </div>
                </>
                : null
            }
            <div>
                <Field name="status"
                       component={renderCheckbox}
                       label={getLabel()}
                       disabled={props.newsCount === 1 ? true : false}/>
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

const EditNewsReduxForm = reduxForm({
    form: 'EditNewsForm', // a unique identifier for this form
    validate,
    initialValues: initialData
})(EditNewsForm)