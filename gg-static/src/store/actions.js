import * as types from './mutation-types'
import router from '../router'

export const returnVehicleInfo = ({ commit }, vehicle) => {
  // router.push('/order/bookingOrder')
  router.push('/')
  commit(types.PUSH_VEHICLE, { vehicle })
}
export const cancelServiceWindow = ({ commit }) => {
  commit(types.CANCEL_SERVICE_WINDOW)
}
