import React from 'react';
import {getProjects, getProject} from '../../redux/actions/projectsActions';
import Projects from "./Projects";
import {connect} from "react-redux";

class ProjectsContainer extends React.Component {

 updateProject (){
     this.props.match.params.projectId ? this.props.getProject(this.props.match.params.projectId)
         : this.props.getProjects();
    }


    componentDidMount() {
   //debugger
        this.updateProject()
        /*this.props.match.params.projectId
            ? this.props.getProject(this.props.match.params.projectId)
            : this.props.getProjects();*/
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       if(this.props.match.params.projectId !== prevProps.match.params.projectId)
            this.updateProject()
    }

    render() {
        return (<Projects projects={this.props.projects}/>)
    }
}

/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getProjects, getProject})(ProjectsContainer);