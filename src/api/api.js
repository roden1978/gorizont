//import * as axios from "axios/index";

import axios from 'axios'

const instance = axios.create();

export const mongodbAPI = {
    getNews() {
        //debugger
        return instance.get('/api/news')
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
    getJob() {
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