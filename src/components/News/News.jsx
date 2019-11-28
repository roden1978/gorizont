import React from 'react'
import NewsItem from './NewsItem/NewsItem'

const News = (props) => {
    //debugger

    let newsItems = props.news.news.map(
        newsItem => <NewsItem key={newsItem.__id}  {...newsItem}/>)


    return (
        <div>
            {newsItems}
        </div>
    );
}

export default News;