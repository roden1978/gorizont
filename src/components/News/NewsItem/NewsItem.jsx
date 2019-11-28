import React from 'react'
import {NavLink} from "react-router-dom";

const NewsItem = (props) => {

    return (
        <div>
            <div>Title: {props.title}</div>
            <div>Text: <br/>{props.text}</div>
            <div>Project id: {props.project}</div>
            <div>Date: {props.createAt}</div>
            <div>Project Name: {props.projectTitle}</div>
            <div>Link: <NavLink to={'/projects/' + props.project}>{props.projectTitle}</NavLink></div>
        </div>
    );
}

export default NewsItem;