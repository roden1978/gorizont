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
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";

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
    butt: {
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
                    <Typography variant="body1" color="textPrimary" gutterBottom>
                        {props.text}
                    </Typography>
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
                <AdminPanelNews setLoadProjects={props.setLoadProjects} projects={props.projects} saveNews = {props.saveNews} {...props}/>
            </Card>
        </Grid>
    );
}

export default NewsItem;

const AdminPanelNews = (props) => {
    debugger
    const classes = useStyles();
    const [expandedCreate, setExpandedCreate] = React.useState(false);
    const [expandedEdit, setExpandedEdit] = React.useState(false);
    const [expandedHidden, setExpandedHidden] = React.useState(false);
    const [expandedDelete, setExpandedDelete] = React.useState(false);

    const handleCreateExpandClick = () => {
        // if(!props.id)
        setExpandedCreate(!expandedCreate);
        if (!expandedCreate){
            props.setLoadProjects(true);
            props.setCurrentNewsId(props._id);
            props.setNewsItem(true);
            setInitialData(props,true);
        }
        else{
            props.projects.length = 0;
            props.setAllNews(true);
        }

        //props.getId(null);
    };

    const handleEditExpandClick = () => {
        // if(!props.id)
        setExpandedEdit(!expandedEdit);
        if(!expandedEdit){
            props.setCurrentNewsId(props._id);
            props.setNewsItem(true);
            setInitialData(props);
        }
        else{
            props.setAllNews(true);
        }

        //props.getId(null);
    };

    const handleHiddenExpandClick = () => {
        // if(!props.id)
        setExpandedHidden(!expandedHidden);
        if(!expandedHidden){
            props.setCurrentNewsId(props._id);
            props.setNewsItem(true);
        }
        else{
            props.setAllNews(true);
        }
        //props.getId(null);
    };

    const handleDeleteExpandClick = () => {
        // if(!props.id)
        setExpandedDelete(!expandedDelete);
        if(!expandedDelete){
            props.setCurrentNewsId(props._id);
            props.setNewsItem(true);
        }
        else{
            props.setAllNews(true);
        }
        //props.getId(null);
    };

    const showResults = (values) => {
        const position = values.project.indexOf('|', 0);
        let id, title;
        if (position > 0){
            id = values.project.slice(0, position);
            title = values.project.slice(position + 1);
            values.project = id;
            values.projectTitle = title.trim();
        }

        //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        //props.saveNews(JSON.stringify(values, null, 2));
        props.saveNews(values.id, values.title, values.text, values.project, values.projectTitle, values.status, values.createAt);

        if(expandedEdit)
        handleEditExpandClick();

        if(expandedCreate)
            handleCreateExpandClick();
    };

    return (
        <>
            <CardActions>
                <Typography variant="body2" color="textPrimary">
                    Создать
                </Typography>
                <IconButton onClick={handleCreateExpandClick}
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expandedCreate,
                            })}
                            aria-expanded={expandedCreate}
                            aria-label="Показать больше"
                            disabled={expandedDelete || expandedEdit || expandedHidden}>
                    <ExpandMoreIcon/>
                </IconButton>
                <Typography variant="body2" color="textPrimary">
                    Редактировать
                </Typography>
                <IconButton onClick={handleEditExpandClick}
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expandedEdit,
                            })}
                            aria-expanded={expandedEdit}
                            aria-label="Показать больше"
                            disabled={expandedCreate || expandedDelete || expandedHidden}>
                    <ExpandMoreIcon/>
                </IconButton>
                <Typography variant="body2" color="textPrimary">
                    Скрыть
                </Typography>
                <IconButton onClick={handleHiddenExpandClick}
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expandedHidden,
                            })}
                            aria-expanded={expandedHidden}
                            aria-label="Показать больше"
                            disabled={expandedCreate || expandedEdit || expandedDelete}>
                    <ExpandMoreIcon/>
                </IconButton>
                <Typography variant="body2" color="textPrimary">
                    Удалить из БД
                </Typography>
                <IconButton onClick={handleDeleteExpandClick}
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expandedDelete,
                            })}
                            aria-expanded={expandedDelete}
                            aria-label="Показать больше"
                            disabled={expandedCreate || expandedEdit || expandedHidden}>
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expandedCreate || expandedEdit || expandedDelete || expandedHidden} timeout="auto"
                      unmountOnExit>
                <CardContent>
                    <EditNewsReduxForm onSubmit={showResults}
                                       expandedCreate={expandedCreate}
                                       expandedEdit={expandedEdit}
                                       expandedDelete={expandedDelete}
                                       expandedHidden={expandedHidden}
                                       projects={props.projects}
                                       {...props}/>
                </CardContent>
            </Collapse>
        </>
    )
}

///////////////////////////////
const validate = values => {
    const errors = {}
    const requiredFields = [
        'title',
        'text',
        'project'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Обязательное поле'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    return errors
}

const renderTextField = ({
                             label,
                             input,
                             value,
                             meta: {touched, invalid, error},
                             ...custom
                         }) => (
    <TextField
        label={label}
        value={input.value}
        fullWidth
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)

const renderCheckbox = ({input, label}) => (
    <div>
        <FormControlLabel
            control={
                <Checkbox
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                />
            }
            label={label}
        />
    </div>
)

/*
input.value ? true : false

const radioButton = ({input, ...rest}) => (
    <FormControl>
        <RadioGroup {...input} {...rest}>
            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
            <FormControlLabel value="other" control={<Radio/>} label="Other"/>
        </RadioGroup>
    </FormControl>
)*/

const renderFromHelper = ({touched, error}) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}

const renderSelectField = ({
                               input,
                               label,
                               meta: {touched, error},
                               children,
                               ...custom
                           }) => (
    <FormControl error={touched && error}>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <Select
            native
            onChange={input.onChange}
            {...input}
            {...custom}
        >
            {children}
        </Select>
        {renderFromHelper({touched, error})}
    </FormControl>
)

////////////////////////////////////////////////////////
const setInitialData = (props, reset)=>{
if(reset){
    initialData.id = null;
    initialData.title = '';
    initialData.text = '';
    initialData.project = '';
    initialData.status = true;
    initialData.projectTitle = '';
    initialData.createAt = null
}else{
    initialData.id = props._id;
    initialData.title = props.title;
    initialData.text = props.text;
    initialData.project = props.project;
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
        projectItem => <option key={projectItem._id} value={`${projectItem._id}| ${projectItem.title}`} label={projectItem.title}></option>)

    if(props.expandedEdit){
        pristine = false;
        submitting = false;
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="title"
                    component={renderTextField}
                    label="Заголовок"
                    value={props.title}
                />
            </div>
            <div>
                <Field
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
                    <option value=""/>
                    {!props.expandedEdit ? projectsItems : <option value={props.project} label={props.projectTitle}></option>}

                </Field>
            </div>

            <div>
                <Field name="status"
                       component={renderCheckbox}
                       label="Показывать на сайте"/>
            </div>
            <div>
                <Button className={classesStyle.butt} variant="contained" color="primary" type="submit" disabled={pristine || submitting}>
                    Отправить
                </Button>
                <Button className={classesStyle.butt} variant="contained" color="primary" type="button" disabled={pristine || submitting} onClick={reset}>
                    Очистить поля
                </Button>
            </div>
        </form>
    )
}
////////////////////////////


////////////////////////////
const EditNewsReduxForm = reduxForm({
    form: 'EditNewsForm', // a unique identifier for this form
    validate,
    initialValues: initialData
})(EditNewsForm)