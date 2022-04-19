import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        beards : []
    },
    mutations: {
        SET_BEARDS_TO_STATE:(state, beards) => {
            state.beards = beards;
        }
    },
    actions: {
        GET_BEARDS_FROM_API({commit}){
            return axios('http://localhost:3000/beards',    {
                method: 'GET'
            })
            .then((beards) => {
                commit('SET_BEARDS_TO_STATE', beards.data)
                return beards;
            })
        }
    },
    getters: {
        BEARDS(state){
            return state.beards;
        }
    }
})

export default store;