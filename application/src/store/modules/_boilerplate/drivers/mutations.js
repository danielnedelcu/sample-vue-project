import { SET_DRIVER, SET_DRIVERS, SET_LOADING_STATUS } from './mutation-types';

const mutations = {

    /**
     * Adds current driver
     * 
     * @param {*} state 
     * @param {*} payload 
     */
     [SET_DRIVER](state, payload) {   
      state.driver = payload;
      console.log("state.driver ", state.driver );
   },


    /**
     * Adds drivers to drivers state list
     * 
     * @param {*} state 
     * @param {*} payload 
     */
    [SET_DRIVERS](state, payload) {   
        state.drivers = payload;
     },

    /**
     * Manages the loading status
     * 
     * @param {*} state 
     * @param {*} payload 
     */
     [SET_LOADING_STATUS](state, payload) {   
        state.loading = payload;
     },

}

export default mutations;   
