import React from 'react'
import styles from './Content.module.css'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import ProjectsContainer from "../Projects/ProjectsContainer";
import JobsContainer from "../Jobs/JobsContainer";
import ContactsContainer from "../Contacts/ContactsContainer";
import AboutUsContainer from "../AboutUs/AboutUsContainer";
import Admin from "../Admin/Admin";
//import Login from "../Admin/Admin";
import Users from "../Users/UsersContainer";
import NewsContainer from "../News/NewsContainer";
import GalleryContainer from "../Gallery/GalleryContainer";
import PhotoAlbumContainer from "../PhotoAlbum/PhotoAlbumContainer";
//import Auth from "../Auth/Auth";
//import Login from "../Auth/Login";

const Content = (props) => {
    return (
        <div className={styles.content}>
            <Switch>
                <Route exact path='/'
                       render={() => <Redirect from='/' to='/news'/>}/>
                <Route path='/news' component={NewsContainer}/>
                <Route path='/projects/:projectId?' component={ProjectsContainer}/>
                <Route path='/gallery' component={GalleryContainer}/>
                <Route path='/album/:albumId?' component={PhotoAlbumContainer}/>
                <Route path='/contacts' component={ContactsContainer}/>
                <Route path='/about' component={AboutUsContainer}/>
                <Route path='/job' component={JobsContainer}/>
                <Route exact path='/admin' component={Admin}/>
                <Route exact path='/admin/users' component={Users}/>
                <Route path='*'
                       render={() => <div>Page not found: error 404</div>}/>
            </Switch>
        </div>
    )
}

export default withRouter(Content)

/*
                <Route exact path='/admin/create' component={Create}/>
                <Route exact path='/admin/update' component={Update}/>
                <Route exact path='/admin/delete' component={Delete}/>
                <Route path='/auth'
                       render={() => <Auth/>}/>
                <Route path='/login'
                       render={() => <Login/>}/>
* */