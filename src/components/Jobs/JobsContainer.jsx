import React from 'react';
import {getJobs} from '../../redux/actions/jobsActions';
import Jobs from "./Jobs";
import {connect} from "react-redux";

class JobsContainer extends React.Component{

    componentDidMount() {
    //debugger
        this.props.getJobs();
    }

    render() {
        return (<Jobs jobs = {this.props.jobs}/>)
    }
}
/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        jobs: state.jobs
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getJobs})(JobsContainer);