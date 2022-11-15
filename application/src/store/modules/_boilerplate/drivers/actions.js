
import * as types from './mutation-types';
import Api from '@/services/drivers';

/**
* Fetches individual Driver
 * 
 * @param {state} commit 
 * @param {*} payload 
*/
export async function fetchDriver({ commit }, payload) {
    try {	   
        const result = await Api.getDriver(payload);
        commit(types.SET_DRIVER, result);
        commit(types.SET_LOADING_STATUS, false);
    } catch (e) {
        console.log("get driver fail");
    }    
}



/**
* Fetches all drivers
 * 
 * @param {state} commit 
*/
export async function fetchDrivers({ commit }) {
    try {	   
        const results = await Api.getDrivers();
        commit(types.SET_DRIVERS, results);
        commit(types.SET_LOADING_STATUS, false);
    } catch (e) {
        console.log("get drivers fail");
    }    
}