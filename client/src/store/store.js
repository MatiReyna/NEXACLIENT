import { createStore } from 'vuex';
import axios from 'axios';

export const BASE_URL = "http://localhost:3001/"
const store = createStore({
    state: {
        casas: [],
        searchedCasa: "",
        totalPages: null,
        curretPage: 1, 
    },
    mutations: {  // Hace referencia al reducer.
        setCasas(state, payload) {
            state.casas = payload;
        },
        setAllPages(state, payload){
            state.totalPages = payload;
        },
        setCurrentPage(state, payload){
            state.curretPage = payload;
        },
        setSearchedCasa(state,payload){
            state.searchedCasa = payload;
        }
    },
    actions: {
        async getAllCasas ({ commit }) {
            try {
                const { data } = await axios.get(`${BASE_URL}casas?page=${this.state.curretPage}&name=${this.state.searchedCasa}`);
                commit('setCasas', data.docs);
                commit('setAllPages', data.totalPages)
            } catch (error) {
                console.error(error);
            }
        },
        changeCurrentpage({commit}, page){
            commit('setCurrentPage', page);
        },
        searchCasa({commit}, casa){
            commit('setSearchedCasa', casa);
        },

    },
    getters: {}
}); 

export default store;