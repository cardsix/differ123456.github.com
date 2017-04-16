import Vue from 'vue'
const VUE_INSTANCE = new Vue()

const UTIL_TOOL = {
  toDouble: (num) => {
    return num < 10 ? '' + num : num
  }
}

export default {
  generatorDateChoose(dateStr) {
    let data = []
    let oDate = new Date(dateStr)
    let year = oDate.getFullYear()
    let month = oDate.getMonth() + 1
    let day = oDate.getDate()
    var weekArr = ['日', '一', '二', '三', '四', '五', '六']
    let weekIndex = oDate.getDay()
    data = {
      'date': UTIL_TOOL.toDouble(month) + '/' + UTIL_TOOL.toDouble(day),
      'dayInfo': '周' + weekArr[weekIndex]
    }
    return data
  },
  getVehicles(cb) {
    VUE_INSTANCE.$http.get('/api/vehicles').then(response => {
      var vehicles = response.body.data
      cb(vehicles)
    }, response => {
      // error code
    })
  },
  getServices(cb) {
    VUE_INSTANCE.$http.get('/api/services').then(response => {
      var services = response.body.data
      cb(services)
    }, response => {
      // error code
    })
  },
  getServiceTime(cb) {
    VUE_INSTANCE.$http.get('/api/serviceTime').then(response => {
      var serviceTime = response.body.data
      cb(serviceTime)
    }, response => {
      // error code
    })
  }
}
