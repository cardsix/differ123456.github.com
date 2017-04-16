import * as types from '../mutation-types'
import appApi from '../api/appApi'

const state = {
  isOrder: true,
  serviceList: []
}

const getters = {
  isOrder: state => state.isOrder,
  serviceList: state => state.serviceList
}

const mutations = {
  [types.RECIVE_ORDER_SERVICES](state, { services }) {
    var orderServices = []
    services.map((ele) => {
      if(ele.type === 'order') {
        orderServices.push(ele)
      }
    })
    state.serviceList = orderServices
  }
}

const actions = {
  reciveService({ commit, state }) {
    appApi.getServices((services) => {
      if(state.isOrder) {
        commit(types.RECIVE_ORDER_SERVICES, { services })
      }else{
        commit(types.RECIVE_UNORDER_SERVICES, { services })
      }
    })
  },
  returnSelectedService({ commit, state }, index) {
    let service = state.serviceList[index]
    console.log(service)
    commit(types.RETURN_SELECTED_SERVICES, { service })
    // 提交选中服务到预定页之后，要把浮层关掉
    commit(types.CANCEL_SERVICE_WINDOW)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
