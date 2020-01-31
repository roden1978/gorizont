import React from 'react';
import {getProjects, getProject, getId,
    setLoadAlbums, getAllProjects, createProject,
    deleteProject, setChangeProjectsItem, setIsAllProjects,
    updateProject, setProjectsCount} from '../../redux/actions/projectsActions';
import Projects from "./Projects";
import {connect} from "react-redux";

class ProjectsContainer extends React.Component {


    updateProjectsData() {
        if (this.props.match.params.projectId) {
            this.props.getProject(this.props.match.params.projectId);
            this.props.getId(this.props.match.params.projectId);
        } else {
            this.props.getProjects();
        }
    }


    componentDidMount() {
        //debugger
        this.updateProjectsData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.projectId !== prevProps.match.params.projectId)
            this.updateProjectsData()
    }

    componentWillUnmount() {
        this.props.getId(null);
        this.props.projects.length = 0;
    }

    render() {
        //debugger
        return (<Projects projects={this.props.projects} id={this.props.id} getId = {this.props.getId} {...this.props}/>)
    }
}

/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        projects: state.projects.projects,
        id: state.projects.id,
        loadAlbums: state.projects.loadAlbums,
        getProjectsItem: state.projects.getProjectsItem,
        isAllProjects: state.projects.isAllProjects,
        projectsCount: state.projects.projectsCount,
        adminMode: state.auth.adminMode
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getProjects, getProject, getId,setLoadAlbums,
    getAllProjects, createProject,deleteProject,
    setChangeProjectsItem, setIsAllProjects,
    updateProject, setProjectsCount})(ProjectsContainer);