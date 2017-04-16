import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Pay from '@/components/pay/Pay'
import ServiceOrder from '@/components/serviceOrder/ServiceOrder'
import BookingOrder from '@/components/bookingOrder/BookingOrder'
import Location from '@/components/location/Location'
import VehiclesList from '@/components/vehiclesList/VehiclesList'

Vue.use(Router)
let ORDER = 'order'
let MY_INFO = 'my_info'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/vehicles',
      name: 'VehiclesList',
      component: VehiclesList
    },
    {
      path: '/' + ORDER + '/serviceOrder',
      name: 'ServiceOrder',
      component: ServiceOrder
    },
    {
      // path: '/' + ORDER + '/bookingOrder',
      path: '/',
      name: 'BookingOrder',
      component: BookingOrder
    }
  ]
})
