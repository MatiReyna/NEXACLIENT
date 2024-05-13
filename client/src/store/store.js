import { createStore } from 'vuex';
import axios from 'axios';

export const BASE_URL = "http://localhost:3001/"
const store = createStore({
    state: {
        casas: [], 
    },
    mutations: {  // Hace referencia al reducer.
        setCasas(state, payload) {
            state.casas = payload
        }
    },
    actions: {
        async getAllCasas ({ commit }) {
            try {
                const { data } = await axios.get(`${BASE_URL}casas`);
                commit('setCasas', data.docs);
            } catch (error) {
                console.error(error);
            }
        }
    },
    getters: {}
}); 

export default store;