import Vue from 'vue'
import Vuex from 'vuex'
import Drivers from './modules/_boilerplate/drivers';

Vue.use(Vuex);

const getters = {};

const actions = {};

export default new Vuex.Store({
    actions: actions,
    getters: getters,
    modules: {
        Drivers
    }
})