<template id="vehiclesList">
  <div class="vehicles-list-area">
    <ul class="vehicles-list" v-for="(vehicle, index) in vehicles">
      <li class="vehicles-list-item" @click="returnVehicleInfo(vehicle)">
        <span class="car-logo-box">
          <i class="icon-car"></i>
        </span>
        <div class="vehicles-info">
          <span class="vehicle-code">{{ vehicle.plateNumber }}</span>
          <span class="vehicle-type">{{ vehicle.model }}</span>
          <span class="vehicle-color">{{ vehicle.color }}</span>
        </div>
      </li>
    </ul>
    <a class="add-vehicles-btn" href="javascript:;">
      <i>需要一个圆形带加号的字体图标</i>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {

    }
  },
  created() {
    // 在data和event监听初始化后就派发action获取所有vehicles
    this.$store.dispatch('getAllVehicles')
  },
  computed: mapGetters({
    vehiclesFind: 'allvehiclesFind',
    vehicles: 'allvehicles'
  }),
  // 这里就把组件的methods 用vuex 的actions代理了
  // methods: mapActions([
  //   'retrunVehicleInfo'
  // ])
  methods: {
    ...mapActions([
      'returnVehicleInfo'
    ])
  }
}
</script>

<style scoped lang="less" type="text/less">
@import '../../common/less/index.less';
.vehicles-list-area{
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
}
.vehicles-list{
  overflow: hidden;
  width: 100%;
  background-color: #EEE;
}
.vehicles-list-item{
  display: flex;
  width: 100%;
  height: 108px;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #FFF;
}
.car-logo-box{
  box-sizing: border-box;
  width: 171px;
  flex: 0 0 171px;
  height: 88px;
  border: 1px solid #E8E8E8;
  border-box: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  color: #16ca9a;
}
.vehicles-info{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-indent: 10px;
  line-height: 24px;
  font-size: 16px;
}
.add-vehicles-btn{
  display: block;
  width: 60px;
  height: 60px;
  margin: 25px auto 0;
}
</style>
