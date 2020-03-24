import {
    SET_PROJECTS,
    SET_PROJECT,
    SET_ID,
    LOAD_ALBUMS,
    CHANGE_PROJECTS_ITEM,
    SET_PROJECTS_ITEM,
    IS_ALL_PROJECTS,
    SET_PROJECTS_COUNT,
    SET_DEFAULT_PROJECT,
    SET_PROJECTS_PHOTOS,
    SET_URL_TO_PROJECTS_PHOTOS,
    SET_ALBUM_ID_FOR_REDIRECT,
    SET_CURRENT_PROJECT_ID
} from "../actions/types";

let initialState = {
    projects: [],
    photos:[],
    photosWithUrl: [],
    albumsCount: 0,
    id: null,
    loadAlbums: false,
    getProjectsItem: false,
    isAllProjects: false,
    projectsCount: null,
    albumIdForRedirect: null,
    currentProjectId: ''
}

const projects_reducer = (state = initialState, action) => {
//debugger
    switch (action.type) {
        case SET_PROJECTS: {
            /*копия МАССИВОВ в КВАДРАТНЫХ СКОБКАХ
            * копия  ПРИМИТИВОВ в ФИГУРНЫХ СКОБКАХ
            * копия ОБЪЕКТОВ И ПОДОБЪЕКТОВ в ФИГУРНЫХ СКОБКАХ*/
            return {
                ...state, projects: action.payload
            };
            // break
        }
        case SET_PROJECT: {
            /*копия МАССИВОВ в КВАДРАТНЫХ СКОБКАХ
            * копия  ПРИМИТИВОВ в ФИГУРНЫХ СКОБКАХ
            * копия ОБЪЕКТОВ И ПОДОБЪЕКТОВ в ФИГУРНЫХ СКОБКАХ*/
            return {
                ...state, projects: [action.payload]
            };
            // break
        }
            case SET_ID: {
                return{
                    ...state, id: action.payload
                }
            }
        case  LOAD_ALBUMS:{
            return {
                ...state, loadAlbums: action.payload
            }
        }
        case  IS_ALL_PROJECTS:{
            return {
                ...state, isAllProjects: action.payload
            }
        }
        case  SET_PROJECTS_ITEM:{
            return {
                ...state, getProjectsItem: action.payload
            }
        }
        case CHANGE_PROJECTS_ITEM:{
            const projectsItem  = state.projects.find(item =>item._id === state.id)
            return {
                ...state, projects: [projectsItem]
            }
        }
        case SET_PROJECTS_COUNT :{
            return{
                ...state, projectsCount: action.payload
            }
        }
        case SET_DEFAULT_PROJECT :{
            return{
                ...state, projects: [{_id: '0', title: 'Войдите в панель администирования и создайте проект',
                    description:'!!!ВНИМАНИЕ!!! Если созданный проект не отобразился обновите страницу.',text: '',albumId:'',
                    albumName: '', status: true}]
            }
        }
        case SET_PROJECTS_PHOTOS:{
            let photosWithAlbumId = action.photos.photoset.photo.map(photo => {
                return {...photo, albumId: action.id}
            })

            //let count = state.albumsCount + 1
            return {
                ...state, photos: [...state.photos, ...photosWithAlbumId], albumsCount: state.albumsCount + 1
            };
        }
        case SET_URL_TO_PROJECTS_PHOTOS:{
            //debugger
            const size = action.payload.sizes.size.find(ph => ph.label === "Small")
            return {
                ...state,
                photosWithUrl: [...state.photosWithUrl, {...action.card, url: size.source}]
            }

        }
        case SET_ALBUM_ID_FOR_REDIRECT :{
            return{
                ...state, albumIdForRedirect: action.payload
            }
        }
        case SET_CURRENT_PROJECT_ID :{
            return{
                ...state, currentProjectId: action.payload
            }
        }
        default:
            return state;
    }
}

export default projects_reducer;


/*case SET_PROJECT: {
            /*копия МАССИВОВ в КВАДРАТНЫХ СКОБКАХ
            * копия  ПРИМИТИВОВ в ФИГУРНЫХ СКОБКАХ
            * копия ОБЪЕКТОВ И ПОДОБЪЕКТОВ в ФИГУРНЫХ СКОБКАХ*/
/*return {
    ...state, projects: [...state.projects, action.payload]
};
}
"Small"
"Large"
*/