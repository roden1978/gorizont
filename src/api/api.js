//import * as axios from "axios/index";

import axios from 'axios'
import auth0 from 'auth0-js'
import {connect} from "react-redux";
import {getAuthorize} from "../redux/actions/authActions";

const instance = axios.create();
let auth = new auth0.WebAuth({
    domain: 'dev-8e4ti4s2.auth0.com',
    clientID: 'bOS225UZ986RtJmRgZCZG2SzZPGPJGJZ',
    redirectUri: 'http://localhost:3000/login',
    responseType: 'token id_token',
    scope: 'email'
})
/*openid*/
export const mongodbAPI = {
    getNews() {
        //debugger
        return instance.get('/news')
            .then(response => {
                return response.data
            })
            .catch(err =>
                console.log(err)
            )
    },

    getProjects() {
        return instance.get('/api/projects')
            .then(response => {
                return response.data
            })
            .catch(err =>
                console.log(err)
            )
    },

    getProject(id) {
        return instance.get('/api/projects/' + id)
            .then(response => {
                return response.data
            })
            .catch(err =>
                console.log(err)
            )
    },
    getJobs() {
        //debugger
        return instance.get('/api/job')
            .then(response => {
                return response.data
            })
            .catch(err =>
                console.log(err)
            )
    },
    getContacts() {
        //debugger
        return instance.get('/api/contacts')
            .then(response => {
                return response.data
            })
            .catch(err =>
                console.log(err)
            )
    },
    getAbout() {
        //debugger
        return instance.get('/api/about')
            .then(response => {
                return response.data
            })
            .catch(err =>
                console.log(err)
            )
    },

}

export const flickrAPI = {
    //Получить список альбомов
    getAlbums(){
        //debugger
        return instance.get('/api/albums')
            .then(response => {
                return response.data.photosets.photoset
            })
            .catch(err =>
                console.log(err)
            )
    },
    //Получить список фотографий из альбома с ID
    getPhotos(id/*Id PhotoAlbum*/){
        return instance.get('/api/photos/' + id)
            .then(response => {
                return response.data
            })
            .catch(err =>
                console.log(err)
            )
    },
    //Получить объект со ссылками на фото по ID с разными размерами фото
    getPhoto(id/*Id Photo*/){
        return instance.get('/api/photos/photo/' + id)
            .then(response => {
                return response.data
            })
            .catch(err =>
                console.log(err)
            )
    }
}

export const authAPI = {
    authorizeAuth0(){
        auth.authorize();
    },

    handleAuthentication(){
        return new Promise((resolve, reject) => {
           auth.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken) {
                resolve(true);
            }else if(err){
                console.log(err);
            }
        })
    }
        )},
    logout(){
        auth.logout();
    }

}

