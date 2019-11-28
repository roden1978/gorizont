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
    }
}