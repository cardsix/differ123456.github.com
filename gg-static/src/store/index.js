import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import vehicles from './modules/vehicles'
import bookingOrder from './modules/bookingOrder'
import serviceList from './modules/serviceList'
import dateChoose from './modules/dateChoose'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: [
    vehicles,
    bookingOrder,
    serviceList,
    dateChoose
  ],
  strict: debug
})
