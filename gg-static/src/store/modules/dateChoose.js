import * as types from '../mutation-types'
import appApi from '../api/appApi'
import router from '../../router'

const state = {
  // 服务时间段列表
  serviceTime: {},
  // 也接收orderService
  curOrderService: {}
}

const getters = {
  serviceTime: state => state.serviceTime,
  curOrderService: state => state.curOrderService
}

const mutations = {
  // 接收上一步选择的curService，这里bookingOrder也用了这个mutation，不知道同时用可不可行
  [types.CHOOSE_SERVICE] (state, { service }) {
    state.curOrderService = service
  },
  [types.RECIVE_SERVICE_TIME](state, { serviceTime }) {
    state.serviceTime = serviceTime
    state.serviceTime.dateTab.map((item) => {
      let dateStr = item.date
      item.dateInfo = appApi.generatorDateChoose(dateStr)
    })
    console.log(state.serviceTime)
  }
}

const actions = {
  returnDateTime({ commit, state }, {selectedService, dateOnIndex, selectedIndex}) {
    console.log(dateOnIndex)
    // 不知道这种在action里做数据结构中转对不对
    let discount = state.serviceTime.dateTab[dateOnIndex].time[selectedIndex].discount
    let price = parseFloat(selectedService.price)
    let selectedServiceTime = {
      date: state.serviceTime.dateTab[dateOnIndex].date,
      dateDescription: state.serviceTime.dateTab[dateOnIndex].dateInfo.dayInfo,
      timeSlot: state.serviceTime.dateTab[dateOnIndex].time[selectedIndex].timeSlot,
      price: (discount) ? (price - discount).toFixed(2) : price.toFixed(2)
    }
    commit(types.RECIVE_SELECTED_SERVICE_TIME, { selectedServiceTime })
    commit(types.CANCEL_SERVICE_TIME_WINDOW)
  },
  reciveSelectedService() {

  },
  cancelServiceTimeSelected({ commit }) {
    commit(types.CANCEL_SERVICE_TIME_WINDOW)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
