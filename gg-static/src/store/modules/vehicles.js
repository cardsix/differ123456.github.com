import * as types from '../mutation-types'
import appApi from '../api/appApi'

const state = {
  vehicles: []
}

const getters = {
  /*
  allvehiclesFind: state => {
    console.log(state.vehicles)
    return state.vehicles.find(function(value) {
      console.log(value.type)
      value.type === '小型车'
    })
    // 不知道为什么是undefined
  },
  */
  allvehicles: state => state.vehicles
}

const mutations = {
  [types.PUSH_VEHICLE] (state) {

  },
  [types.RECIVE_VEHICLES] (state, { vehicles }) {
    state.vehicles = [...vehicles]
  }
}

const actions = {
  getAllVehicles({commit, state}) {
    // 算是异步过程，把vehicles数据取过来 （接收所有vehicles，适合渲染vehicles组件view时候用，不适合用PUSH_VEHICLE的mutation）
    appApi.getVehicles((vehicles) => {
      // 通过载荷，把数据传到motation里面
      commit(types.RECIVE_VEHICLES, { vehicles })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
