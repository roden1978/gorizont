import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import 'moment/locale/ru'
import man01 from '../../../assets/icons/man.svg'
import man02 from '../../../assets/icons/man01.svg'
import man03 from '../../../assets/icons/man02.svg'
import man04 from '../../../assets/icons/man03.svg'
import man05 from '../../../assets/icons/man04.svg'
import man06 from '../../../assets/icons/man05.svg'
import moment from "moment";
import CardActions from "@material-ui/core/CardActions";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import {Field, reduxForm} from "redux-form";
import {renderCheckbox, renderSelectField, renderTextField} from "../../../common/renderFilds";
import Button from "@material-ui/core/Button";
import {validate} from "../../../common/validate";

const useStyles = makeStyles(theme => ({
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16,
        background:
            'linear-gradient(to bottom, #4e69a2, #3b5998 50%)', //#0d47a1 #1976d2
        color: '#ffffff'
    },
    pos: {
        marginLeft: 12,
        fontSize: 14,
        fontWeight: 'bold',
    },
    date: {
        marginLeft: 12
    },
    avatar: {
        backgroundColor: '#ffffff',
        width: 50,
        height: 50,
    },
    katok: {
        height: 45,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        minHeight: 160,
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
    wi: {
        backgroundColor: '#e9ecf4'
    },
    adminPanel: {
        border: '2px solid grey',
        backgroundColor: '#e9ecf4'
    }
}));

const Job = (props) => {
    const classes = useStyles();

    const currentDate = new Date();
    const pubDate = new Date(props.createAt);
    const days = 30 - Math.floor((currentDate - pubDate) / (24 * 60 * 60 * 1000)) + 1;
    //console.log(days);

    let createAt = moment(props.createAt);

    createAt.locale('ru');

    let titleIcon;

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    switch (getRandomInt(7)) {
        case 0: {
            titleIcon = man01;
            break;
        }
        case 1: {
            titleIcon = man02;
            break;
        }
        case 2: {
            titleIcon = man03;
            break;
        }
        case 3: {
            titleIcon = man04;
            break;
        }
        case 4: {
            titleIcon = man05;
            break;
        }
        case 5: {
            titleIcon = man06;
            break;
        }
        default:
            titleIcon = man01;
            break;
    }

    let xs = 8;
    let sm = 4;

    if (props.adminMode) {
        xs = 12;
        sm = 12;
    }
debugger
    /*if (props.adminMode && props.getJobsItem)
    {
        xs = 12;
        sm = 8;
    }*/
    return (
        <Grid item xs={xs} sm={sm}>
            <Card className={classes.card}>
                <CardHeader title={props.title}
                            className={classes.title}
                            subheader={
                                <Typography variant="body1" color="textSecondary" gutterBottom>
                                    {props.company}
                                </Typography>}
                            avatar={
                                <Avatar className={classes.avatar}>
                                    <img className={classes.katok} src={titleIcon} alt="Работа"/>
                                </Avatar>
                            }

                />
                <CardContent>
                        <>
                            {props.description.split('\n').map((i, key) => {
                                return <Typography key={key} paragraph variant="body1" color="textPrimary"
                                                   gutterBottom>{i}</Typography>;
                            })}
                        </>
                    <Typography className={classes.pos} variant="body2" color="textPrimary">
                        З/п: {props.price} руб.
                    </Typography>
                    <Typography className={classes.pos} variant="body2" color="textPrimary">
                        Электронная почта: {props.email}
                    </Typography>
                    <Typography className={classes.pos} variant="body2" color="textPrimary">
                        Телефон: {props.phone}
                    </Typography>
                </CardContent>
                <Typography className={classes.date} variant="body2" color="textSecondary">
                    {createAt.format('LL')}
                </Typography>
                <Typography className={classes.date} variant="body2" color="textSecondary">
                    Дней осталось: {days}
                </Typography>
                {props.adminMode ? <AdminPanelJobs {...props}/> : ''}
            </Card>
        </Grid>
    );
}

export default Job;

const AdminPanelJobs = (props) => {
    //debugger
    const classes = useStyles();
    const [expandedCreate, setExpandedCreate] = React.useState(false);
    const [expandedEdit, setExpandedEdit] = React.useState(false);
    const [expandedDelete, setExpandedDelete] = React.useState(false);

    const handleCreateExpandClick = () => {
        // if(!props.id)
        setExpandedCreate(!expandedCreate);
        if (!expandedCreate) {
            props.setCurrentJobsId(props._id);
            props.setJobsItem(true);
            setInitialData(props, true);
        } else {
            //props.projects.length = 0;
            props.setIsAllJobs(true);
        }

        //props.getId(null);
    };

    const handleEditExpandClick = () => {

        setExpandedEdit(!expandedEdit);
        if (!expandedEdit) {
            props.setCurrentJobsId(props._id);
            props.setJobsItem(true);
            setInitialData(props, false, false);
        } else {
            props.setIsAllJobs(true);

        }

        //props.getId(null);
    };

    const handleDeleteExpandClick = () => {
        debugger
        props.setJobsCount(props.count);
        setExpandedDelete(!expandedDelete);
        if (!expandedDelete) {
            props.setCurrentJobsId(props._id);
            props.setJobsItem(true);
            setInitialData(props, false, true);
        } else {
            props.setIsAllJobs(true);

        }
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

        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        //props.saveNews(JSON.stringify(values, null, 2));


        /*if (expandedEdit) {
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
        }*/


    };

    return (
        <>
            <CardActions>
                <Typography variant="body2" color="textPrimary">
                    Создать
                </Typography>
                <Tooltip title={!expandedCreate ? "Создать объявление" : "Отмена"} placement={'top'} arrow>
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
                <Tooltip title={!expandedEdit ? "Редактировать объявление" : "Отмена"} placement={'top'} arrow>
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
                    Удалить
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
                    <EditJobsReduxForm onSubmit={showResults}
                                       expandedCreate={expandedCreate}
                                       expandedEdit={expandedEdit}
                                       expandedDelete={expandedDelete}
                                       jobsCount={props.jobsCount}
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
        initialData.company = '';
        initialData.title = '';
        initialData.description = '';
        initialData.price = '';
        initialData.email = '';
        initialData.phone = '';
        initialData.status = true;
        initialData.createAt = null;
    } else {
        initialData.id = props._id;
        initialData.company = props.company;
        initialData.title = props.title;
        initialData.description = props.description;
        initialData.price = props.price;
        initialData.email = props.email;
        initialData.phone = props.phone;
        if (expandedDelete)
            initialData.status = false;
        else
            initialData.status = props.status;
        initialData.createAt = props.createAt;
    }

}

const initialData = {
    id: null,
    company: '',
    title: '',
    description: '',
    price: '',
    email: '',
    phone: null,
    status: null,
    createAt: null
}
/*
company:{type: String, required: true},
    title:{type: String, required: true},
    description:{type: String, required: true},
    price:{type: String, required: true},
    email:{type: String},
    phone:{type: String, required: true},
    status:{type: Boolean, default: true},
    createAt:{type: Date, default: Date.now}
 */
///////////////////////////////////////////////////////

const EditJobsForm = (props) => {
    const classesStyle = useStyles();
    const {handleSubmit, reset} = props;
    let {pristine, submitting} = props;
    debugger
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
                            name="company"
                            component={renderTextField}
                            label="Работодатель"
                        />
                    </div>
                    <div>
                        <Field
                            name="title"
                            component={renderTextField}
                            label="Заголовок"
                        />
                    </div>
                    < div>
                        < Field
                            name="description"
                            component={renderTextField}
                            label="Текст объявления"
                            multiline
                            rowsMax="4"
                            margin="normal"
                        />
                    </div>
                    < div>
                        < Field
                            name="price"
                            component={renderTextField}
                            label="Зарплата"
                        />
                    </div>
                    < div>
                        < Field
                            name="email"
                            component={renderTextField}
                            label="Электронная почта"
                        />
                    </div>
                    < div>
                        < Field
                            name="phone"
                            component={renderTextField}
                            label="Телефон"
                        />
                    </div>
                </>
                : null
            }
            <div>
                <Field name="status"
                       component={renderCheckbox}
                       label={getLabel()}
                       disabled={props.jobsCount === 1 ? true : false}/>
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

const EditJobsReduxForm = reduxForm({
    form: 'EditJobsForm', // a unique identifier for this form
    validate,
    initialValues: initialData
})(EditJobsForm)

/*
    <div>
    <Field
classes={classes}
name="project"
component={renderSelectField}
label="Проект"
full="true"

    >
    {props.expandedEdit ? <>
                <option value={props.project} label={props.projectTitle}/>
                <option value=''/>
            </> :
            <option value=''/>}
{projectsItems}
</Field>
</div>*/
