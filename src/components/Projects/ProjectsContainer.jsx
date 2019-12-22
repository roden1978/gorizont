import React from 'react';
import {getProjects, getProject, getId} from '../../redux/actions/projectsActions';
import Projects from "./Projects";
import {connect} from "react-redux";

class ProjectsContainer extends React.Component {


    updateProject() {
        if (this.props.match.params.projectId) {
            this.props.getProject(this.props.match.params.projectId);
            this.props.getId(this.props.match.params.projectId);
        } else {
            this.props.getProjects();
        }
    }


    componentDidMount() {
        //debugger
        this.updateProject()
        /*this.props.match.params.projectId
            ? this.props.getProject(this.props.match.params.projectId)
            : this.props.getProjects();*/
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.projectId !== prevProps.match.params.projectId)
            this.updateProject()
    }

    componentWillUnmount() {
        this.props.getId(null);
        this.props.projects.length = 0;
    }

    render() {
        debugger
        return (<Projects projects={this.props.projects} id={this.props.id} getId = {this.props.getId}/>)
    }
}

/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        projects: state.projects.projects,
        id: state.projects.id
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getProjects, getProject, getId})(ProjectsContainer);