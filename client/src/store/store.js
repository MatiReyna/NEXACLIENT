import { createStore } from 'vuex';
import axios from 'axios';


export const BASE_URL = "http://localhost:3001/";

const store = createStore({
    state: {
        casas: [],
        searchedCasa: "",
        totalPages: null,
        curretPage: 1,
        edit: {},
        promos: [],
    },
    mutations: {  // Hace referencia al reducer.
        setCasas(state, payload) {
            state.casas = payload;
        },
        setAllPages(state, payload) {
            state.totalPages = payload;
        },
        setCurrentPage(state, payload) {
            state.curretPage = payload;
        },
        setSearchedCasa(state, payload) {
            state.searchedCasa = payload;
        },
        setEdit(state, payload) {
            state.edit = payload;
        },
        setPromos(state, payload){
            state.promos = payload;
        },
    },
    actions: {
        async getAllCasas({ commit }) {
            try {
                const { data } = await axios.get(`${BASE_URL}casas?page=${this.state.curretPage}&name=${this.state.searchedCasa}`);
                commit('setCasas', data.docs);
                commit('setAllPages', data.totalPages);
            } catch (error) {
                console.error(error);
            }
        },
        async getEdit({ commit }, { type, id }) {
            try {
                const { data } = await axios.get(`${BASE_URL}${type}/${id}`);

                commit('setEdit', data);
            } catch (error) {
                console.error(error);
            }
        },
        async getPromos ({commit}){
            try {
                const {data} = await axios.get(`${BASE_URL}promos/`);

                commit('setPromos', data.allPromos);
            } catch (error) {
                console.error(error);
            }
        },
        cancelEdit({commit}){
            commit('setEdit', {});
        },
        changeCurrentpage({ commit }, page) {
            commit('setCurrentPage', page);
        },
        searchCasa({ commit }, casa) {
            commit('setSearchedCasa', casa);
        },

    },
    getters: {}
});

export default store;