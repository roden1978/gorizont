import React from 'react';
import {
    getNews,
    setLoadProjects,
    setAllNews,
    setNewsItem,
    setChangeNewsItem,
    setCurrentNewsId,
    saveNews
} from '../../redux/actions/newsActions';
import {getProjects} from "../../redux/actions/projectsActions";
import News from "./News";
import {connect} from "react-redux";

class NewsContainer extends React.Component {

    componentDidMount() {
        //debugger
        this.props.getNews();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.loadProjects) {
            this.props.getProjects();
            this.props.setLoadProjects(false);
        }
        if (this.props.getNewsItem) {
            this.props.setChangeNewsItem();
            this.props.setNewsItem(false);
        }

        if (this.props.getAllNews) {
            this.props.getNews();
            this.props.setAllNews(false)
        }
    }

    render() {
        return (<News news={this.props.news}
                      setLoadProjects={this.props.setLoadProjects}
                      setNewsItem={this.props.setNewsItem}
                      setAllNews={this.props.setAllNews}
                      projects={this.props.projects}
                      setCurrentNewsId={this.props.setCurrentNewsId}
                      saveNews={this.props.saveNews}/>)
    }
}

/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        news: state.news.news,
        loadProjects: state.news.loadProjects,
        projects: state.projects.projects,
        getAllNews: state.news.getAllNews,
        getNewsItem: state.news.getNewsItem,
        currentNewsId: state.news.currentNewsId
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps,
    {
        getNews, getProjects, setLoadProjects,
        setAllNews, setNewsItem, setChangeNewsItem,
        setCurrentNewsId, saveNews
    })(NewsContainer);