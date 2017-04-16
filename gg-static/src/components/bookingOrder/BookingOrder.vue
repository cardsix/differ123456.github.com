<template id="bookingOrder">
  <div class="booking-order-area">
    <ul class="choose-area">
      <li class="choose-item border-bottom-1px">
        <span class="item-icon position-icon">
          <i class="icon-position"></i>
        </span>
        <div class="item-con">
          <div class="item-order-position">
            <p>通州区北苑街道新华西街395号大汉写字楼(通惠南路)</p>
          </div>
        </div>
        <div class="item-r-more">
          <i class="icon-right"></i>
        </div>
      </li>
      <li class="choose-item border-bottom-1px" @click="chooseVehicle()">
        <span class="item-icon car-icon">
          <i class="icon-car"></i>
        </span>
        <div class="item-con">
          <div class="item-order-choose" v-show="!isChooseVehicle">
            <span>请选择车辆</span>
          </div>
          <div class="item-order-car-area" v-show="isChooseVehicle">
            <span class="item-order-car-code">{{ vehicleInfo.plateNumber }}</span>
            <div class="item-order-car-info">
              {{ vehicleInfo.brand }} {{ vehicleInfo.model }} {{vehicleInfo.type}}
            </div>
          </div>
        </div>
        <div class="item-r-more">
          <i class="icon-right"></i>
        </div>
      </li>
      <li class="choose-item border-bottom-1px" @click="showServiceWindow()" style="height: 46px; margin-top: 10px;" v-show="isChooseVehicle">
        <span class="item-icon service-icon">
          <i class="icon-note01"></i>
        </span>
        <div class="item-con">
          <div class="item-order-choose" v-show="!isChooseService">
            <span>请选择服务</span>
          </div>
          <div class="item-order-service-option" v-show="isChooseService">
            <span class="service-option-name">{{ curService.name }}</span>
            <a class="service-option-detail" :href="curService.link" @click.stop="">服务介绍</a>
          </div>
        </div>
        <div class="item-r-more">
          <i class="icon-right"></i>
        </div>
      </li>
      <li class="choose-item border-bottom-1px" v-show="isChooseService" @click.stop="reciveServiceTime()">
        <span class="item-icon date-icon">
          <i class="icon-date"></i>
        </span>
        <div class="item-con">
          <div class="item-order-choose" v-show="!isChooseTime">
            <span>请选择时间</span>
          </div>
          <div class="date-time-price" v-show="isChooseTime">
            <div class="date-and-time">
              <span class="service-date">{{ selectedServiceInfo.date }}({{ selectedServiceInfo.dateDescription }})</span>
              <span class="service-time">{{ selectedServiceInfo.timeSlot }}</span>
            </div>
            <div class="service-price-box">
              <span class="service-price">{{ selectedServiceInfo.price }}</span>
            </div>
          </div>
        </div>
        <div class="item-r-more">
          <i class="icon-right"></i>
        </div>
      </li>
    </ul>
    <ul class="input-area">
      <li class="input-item border-bottom-1px">
        <span class="item-icon push-icon">
          <i class="icon-user"></i>
        </span>
        <div class="item-con">
          <input class="input-item-input" type="text" name="" value="" placeholder="如呱呱员工推荐，可输入员工号">
        </div>
      </li>
      <li class="input-item border-bottom-1px">
        <span class="item-icon req-icon">
          <i class="icon-note"></i>
        </span>
        <div class="item-con">
          <input class="input-item-input" type="text" name="" value="" placeholder="可输入注意事项或者其他需求">
        </div>
      </li>
    </ul>
    <div class="agreement-link-area">
      <span class="is-selected-icon" @click="toggleSelect()">
        <i class="icon-circle" v-show="!isSelected"></i>
        <i class="icon-great" v-show="isSelected"></i>
      </span>
      <a class="agreement-link" href="javascript:;">我已阅读并同意服务预约协议</a>
    </div>

    <!-- 底部定位的提交订单组件 -->
    <div class="push-order border-top-1px">
      <v-pushOrder></v-pushOrder>
    </div>
    <!-- 整体定位的服务列表浮层 -->
    <v-serviceList  v-show="isShowServiceWindow"></v-serviceList>

    <!-- 日期选择组件 -->
    <v-dateChoose :selected-service="curService" v-show="isShowDateChoose"></v-dateChoose>
  </div>
</template>

<script type="text/ecmascript-6">
import PushOrder from '../pushOrder/PushOrder'
import ServiceListWindow from '../serviceListWindow/ServiceListWindow'
import DateChoose from '../dateChoose/DateChoose'
import { mapGetters, mapActions } from 'vuex'
export default {
  data: function() {
    return {
      isSelected: true
    }
  },
  mounted() {
    /*
    进页面：
    请求数据(接口)过程，请求成功之前有加载动画组件，成功之后消失
    判断当前地理位置
    判断是否选择车辆
    */
    if (this.isChooseVehicle === false) {
      this.isChooseService = false
      this.isChooseTime = false
    }
  },
  components: {
    'v-pushOrder': PushOrder,
    'v-serviceList': ServiceListWindow,
    'v-dateChoose': DateChoose
  },
  computed: {
    ...mapGetters({
      vehicleInfo: 'vehicleInfo',
      curService: 'curService',
      selectedServiceInfo: 'selectedServiceInfo',
      isChooseService: 'isChooseService',
      isChooseTime: 'isChooseTime',
      isChooseVehicle: 'isChooseVehicle',
      isShowServiceWindow: 'isShowServiceWindow',
      isShowDateChoose: 'isShowDateChoose'
    })
  },
  methods: {
    ...mapActions([
      'showServiceWindow',
      'chooseVehicle',
      'reciveServiceTime'
    ]),
    // 服务介绍的点击上我需要关掉冒泡，要不然就会冒泡到上层，又打开选择服务的窗口了
    // 是否同意协议
    toggleSelect() {
      this.isSelected = !this.isSelected
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
@import '../../common/less/index.less';
.border-bottom-1px{
  .border-bottom-1px(#E6E6E6);
}
.booking-order-area{
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: #F5F5F5;
}
/*icon start*/
.item-r-more{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  color: #C4C4C4;
}
.item-icon{
  height: 100%;
  flex: 0 0 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #50ad8e;
}
.is-selected-icon{
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: #50ad8e;
}
/*icon end*/
.item-con{
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.item-r-more{
  height: 100%;
  flex: 0 0 25px;
  width: 25px;
}
.choose-area{
  margin-bottom: 10px;
  overflow: hidden;
  width: 100%;
}
.choose-item{
  box-sizing: border-box;
  width: 100%;
  height: 67px;
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #FFF;
}
.item-order-position{
  line-height: 20px;
}
.item-order-car-area{
  line-height: 20px;
}
.item-order-car-info{
  color: #7D7D7D;
}
.item-order-service-option{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.item-order-choose{
  color: #FC0007;
}
.service-price{
  color: #FC0007;
}
.service-option-detail{
  color: #51aa8c;
  text-decoration: underline;
}
.date-time-price{
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.date-and-time{
  flex: 0 0 60%;
  width: 60%;
  display: flex;
  flex-direction: column;
  line-height: 20px;
}
.input-area{
  overflow: hidden;
  width: 100%;
  background-color: #FFF;
}
.input-item{
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
}
.input-item-input{
  width: 100%;
  height: 100%;
}
.agreement-link-area{
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  height: 45px;
}
.agreement-link{
  margin-left: 16px;
  font-size: 16px;
  color: #51aa8c;
  text-decoration: underline;
}
.border-bottom-1px{
  .border-bottom-1px(#e0e0e0);
}
.border-top-1px{
  .border-top-1px(#e0e0e0);
}
.push-order{
  position: fixed;
  left: 0;
  bottom: 0;
  width:100%;
}
</style>
