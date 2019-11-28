import React from 'react';
import {getNews} from '../../redux/actions/newsActions';
import News from "./News";
import {connect} from "react-redux";

class NewsContainer extends React.Component{

    componentDidMount() {
    //debugger
        this.props.getNews();
    }

    render() {
        return (<News news = {this.props.news}/>)
    }
}
/*функция принимает state созданный в redux при помощи reducers
* и возвращает требуемые нам данные из state*/
let mapStateToProps = (state) => {
    return {
        news: state.news
    }
};

/*Создаем контейнерную кмпоненту MyNewsContainer*/
/*Двойные скобки обозначют что мы вызвали фукцию connect, а она
* в свою очередь возвращает нам фукцию во вторых скобках*/
export default connect(mapStateToProps, {getNews})(NewsContainer);