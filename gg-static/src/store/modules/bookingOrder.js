import * as types from '../mutation-types'
import appApi from '../api/appApi'
import router from '../../router'

const state = {
  isSelected: true,
  isChooseService: false,
  isChooseTime: false,
  isChooseVehicle: false,
  isShowServiceWindow: false,
  isShowDateChoose: false,
  // 这里只是写了一个车辆信息状态，当然这个组件还有其它状态
  vehicleInfo: {},
  // 服务列表
  serviceList: [],
  // 当前选择服务
  curService: {},
  // 已选择的服务时间info
  selectedServiceInfo: {}
}

const getters = {
  // 车辆信息
  vehicleInfo: state => state.vehicleInfo,
  // order服务
  curService: state => state.curService,
  // 已选择的服务时间info
  selectedServiceInfo: state => state.selectedServiceInfo,
  isSelected: state => state.isSelected,
  isChooseService: state => state.isChooseService,
  isChooseTime: state => state.isChooseTime,
  isChooseVehicle: state => state.isChooseVehicle,
  isShowServiceWindow: state => state.isShowServiceWindow,
  isShowDateChoose: state => state.isShowDateChoose
}

const mutations = {
  [types.PUSH_VEHICLE] (state, { vehicle }) {
    state.vehicleInfo = vehicle
    state.isChooseVehicle = true
  },
  // 接收所有服务
  [types.RECIVE_SERVICES] (state, { services }) {
    state.serviceList = services
    state.isShowServiceWindow = true
  },
  [types.CHOOSE_SERVICE] (state, { service }) {
    state.curService = service
    state.isShowServiceWindow = false
  },
  // 取消，隐藏服务选择组件
  [types.CANCEL_SERVICE_WINDOW] (state) {
    state.isShowServiceWindow = false
  },
  [types.RETURN_SELECTED_SERVICES] (state, { service }) {
    state.curService = service
    state.isChooseService = true
  },
  // 显示服务时间选择窗口
  [types.SHOW_SERVICE_TIME_WINDOW] (state) {
    state.isShowDateChoose = true
  },
  // 关闭服务时间选择窗口
  [types.CANCEL_SERVICE_TIME_WINDOW] (state) {
    state.isShowDateChoose = false
  },
  // 接收已选择的服务时间info
  [types.RECIVE_SELECTED_SERVICE_TIME](state, { selectedServiceTime }) {
    console.log(selectedServiceTime)
    state.selectedServiceInfo = selectedServiceTime
    console.log(state.selectedServiceInfo) // 这个服务时间的数据结构没规划好，这里就代指了
    state.isChooseTime = true
  }
}

const actions = {
  showServiceWindow: ({ commit, state }) => {
    appApi.getServices((services) => {
      commit(types.RECIVE_SERVICES, { services })
    })
  },
  chooseVehicle: ({ commit, state }) => {
    router.push({path: '/vehicles'})
  },
  // 接收服务时间段
  reciveServiceTime({ commit, state }) {
    // state.isShowDateChoose = true
    // Do not mutate vuex store state outside mutation handlers.
    // 不要改变状态，在mutation外面
    appApi.getServiceTime((serviceTime) => {
      commit(types.RECIVE_SERVICE_TIME, { serviceTime })
      commit(types.SHOW_SERVICE_TIME_WINDOW)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
