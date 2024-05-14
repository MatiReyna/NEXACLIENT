import { createStore } from 'vuex';
import axios from 'axios';

export const BASE_URL = "http://localhost:3001/"
const store = createStore({
    state: {
        casas: [],
        totalPages: null,
        curretPage: 1, 
    },
    mutations: {  // Hace referencia al reducer.
        setCasas(state, payload) {
            state.casas = payload
        },
        setAllPages(state, payload){
            state.totalPages = payload;
        },
        setCurrentPage(state, payload){
            state.curretPage = payload
        }
    },
    actions: {
        async getAllCasas ({ commit }) {
            try {
                const { data } = await axios.get(`${BASE_URL}casas?page=${this.state.curretPage}`);
                commit('setCasas', data.docs);
                commit('setAllPages', data.totalPages)
            } catch (error) {
                console.error(error);
            }
        },
        changeCurrentpage({commit}, page){
            commit('setCurrentPage', page);
        }
    },
    getters: {}
}); 

export default store;