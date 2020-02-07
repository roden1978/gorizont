import React from "react";
import {authAPI} from '../../api/api'
import {checkUser} from "../../redux/actions/authActions";
import Spinner from "../../common/Spinner";
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import Collapse from "@material-ui/core/Collapse";
import CardContent from "@material-ui/core/CardContent";
import {Field, reduxForm} from "redux-form";
import {renderCheckbox, renderSelectField, renderTextField} from "../../common/renderFilds";
import {validate} from "../../common/validate";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import katokIcon from "../../assets/icons/katok.svg";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";

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
    },
    root: {
        flexGrow: 1,
    },
    pos: {
        paddingBottom: 20,
        paddingTop: 20,
    },
    cardGrid: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(8),
    }
}));

class Admin extends React.Component {

    componentDidMount() {
        //debugger
        //this.props.getAuthorize();
    }

    render() {
        return (<>
            {this.props.adminMode ? <Redirect to='/news'/> : <Login checkUser={this.props.checkUser}/>}
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuthorized,
        adminMode: state.auth.adminMode
    }

}

export default connect(mapStateToProps, {checkUser})(Admin)

const Login = (props) => {
    //debugger
    const classes = useStyles();
    const showResults = (values) => {

        //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);

        props.checkUser(values.email, values.password);

    };

    return (
        <div className={classes.root}>
            <Container className={classes.cardGrid} maxWidth="xl">
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    spacing={3}
                    className={classes.pos}
                >
                    <Grid item xs={6}>
                        <Card className={classes.card}>
                            <CardHeader title='Логин' className={classes.title}/>
                            <CardContent>
                                <LoginReduxForm onSubmit={showResults}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}

const initialData = {
    emailLogin: '',
    password: '',
    newUsers: false
}
///////////////////////////////////////////////////////

const LoginForm = (props) => {
    const classesStyle = useStyles();
    const {handleSubmit, reset, classes, projects} = props;
    let {pristine, submitting} = props;
    //debugger
    //console.log(props.val + " " + props.expandedEdit);

    /* let projectsItems = projects.map(
         projectItem => <option key={projectItem._id} value={`${projectItem._id}| ${projectItem.title}`}
                                label={projectItem.title}></option>)*/

    /*if (props.expandedEdit) {
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
    }*/


    return (
        <form onSubmit={handleSubmit}>

            <div>
                <Field
                    name="email"
                    component={renderTextField}
                    label="Адрес электронной почты"
                />
            </div>
            < div>
                < Field
                    name="password"
                    type="password"
                    component={renderTextField}
                    label="Пароль"
                />
            </div>
            <div>
                <Field name="newUsers"
                       component={renderCheckbox}
                       label='Создать новых пользователей'/>
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

const LoginReduxForm = reduxForm({
    form: 'LoginForm', // a unique identifier for this form
    validate,
    initialValues: initialData
})(LoginForm)
/*{console.log('Auth:' + this.props.auth)}*/


/*import React from 'react'
import {connect} from "react-redux";
//import {} from "../../redux/actions/authActions";

const Admin = (props) => {

    return (
        <div>
            <div>Login</div>
            <div>
                Admin menu
            </div>
        </div>
    );
}
let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuthorized,
        adminMode: state.auth.adminMode
    }

}

export default connect(mapStateToProps)(Admin)*/
//export default compose(withAuthRedirect)

/*
* <div className={s.div_bkg}>
                <ul>
                    <li><NavLink to='/admin/create' className={s.tc}>Create</NavLink></li>
                    <li><NavLink to='/admin/update' className={s.tc}>Update</NavLink></li>
                    <li><NavLink to='/admin/delete' className={s.tc}>Delete</NavLink></li>
                </ul>
            </div>*/