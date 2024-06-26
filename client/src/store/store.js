import { createStore } from 'vuex';
import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_URL;

const store = createStore({
    state: {
        casas: [],
        searchedCasa: "",
        totalPages: null,
        curretPage: 1,
        edit: {},
        promos: [],
        maxPromos: 0,
    },
    mutations: {
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
        setPromos(state, payload) {
            state.promos = payload;
        },
        setMaxPromos(state, payload) {
            state.maxPromos = payload;
        },
    },
    actions: {
        async getAllCasas({ commit, state }) {
            try {
                const { data } = await axios.get(`${BASE_URL}casas?page=${state.curretPage}&name=${state.searchedCasa}`);
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
        async getPromos({ commit }) {
            try {
                const { data } = await axios.get(`${BASE_URL}promos/`);
                commit('setPromos', data.allPromos);
                commit('setMaxPromos', data.totalPromos);
            } catch (error) {
                console.error(error);
            }
        },
        cancelEdit({ commit }) {
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