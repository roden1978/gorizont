import React from 'react'
import s from './Projects.module.css'
import Project from "./Project/Project";

const Projects = (props) => {
    debugger
    let projectItems = props.projects.projects.map(
        project => <Project key={project.__id}  {...project}/>
    )
    return (
        <div>
            {projectItems}
        </div>
    );
}

export default Projects;