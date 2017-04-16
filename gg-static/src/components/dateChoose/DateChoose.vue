<template id="dateChoose">
  <div class="dateChoose-area">
    <div class="dateChoose-box border-top-1px">
      <div class="dateChoose-title-bar">
        <a href="javascript:;" class="dateChoose-title-back" @click="cancelServiceTimeSelected()">取消</a>
        <h3 class="dateChoose-title">选择服务时间</h3>
        <a href="javascript:;" class="dateChoose-title-sure" @click="returnDateTime({selectedService ,dateOnIndex, selectedIndex})">确定</a>
      </div>
      <!-- 显示天数 -->
      <ul class="dateChoose-dayChoose-tab">
        <li class="dateChoose-dayChoose-tab-item" :class="{ on: dateOnIndex==index }" v-for="(dateCon, index) in serviceTime.dateTab" @click="selectDateTab(index)">
          <span class="dateChoose-day-info">{{ dateCon.dateInfo.dayInfo }} {{ dateCon.dateInfo.date }}</span>
          <span class="dateChoose-isBooking-state">{{ dateCon.state }}</span>
        </li>
      </ul>

      <ul class="dateChoose-dayChoose-con" v-if="index==dateOnIndex" v-for="(dateCon, index) in serviceTime.dateTab">
        <div class="dateChoose-dayChoose-con-item">
          <ul class="dateChoose-discount-area">
            <!-- 显示特价时间段 -->
            <li class="dateChoose-area-item" :class="{ selected: index==selectedIndex }" @click="selectTimeSlot(index)" v-for="(discountTime, index) in dateCon.time" v-if="index>=0 && index<3">
              <span class="dateChoose-dayChoose-timeCut">{{ discountTime.timeSlot }}</span>
              <span class="dateChoose-dayChoose-price">￥{{(selectedService.price - discountTime.discount).toFixed(2)}} <span class="discount-text">特惠</span></span>
              <span class="selected-icon">
                <i class="icon-great"></i>
              </span>
            </li>
          </ul>
        </div>
        <div class="date-choose-ohterTime">
          <div class="date-choose-dayChoose-ohterTime-title">
            <div class="date-choose-dayChoose-ohterTime-title-line"></div>
            <div class="date-choose-dayChoose-ohterTime-title-con">
              <span>其它时间</span>
            </div>
            <div class="date-choose-dayChoose-ohterTime-title-line"></div>
          </div>
          <ul class="date-choose-dayChoose-ohterTime-list">
            <!-- 显示普通时间段 -->
            <li class="dateChoose-area-item" :class="{ selected: index==selectedIndex }" @click="selectTimeSlot(index)" v-for="(otherTime, index) in dateCon.time" v-if="index>=3 && index<9">
              <span class="dateChoose-dayChoose-timeCut">{{ otherTime.timeSlot }}</span>
              <span class="dateChoose-dayChoose-price">￥{{ parseFloat(selectedService.price).toFixed(2) }}</span>
              <span class="selected-icon">
                <i class="icon-great"></i>
              </span>
            </li>
          </ul>
        </div>
      </ul>  <!-- dateChoose-dayChoose-con end -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex'
const UTIL_TOOL = {
  toDouble: (num) => {
    return num < 10 ? '0' + num : num
  }
}
export default {
  data() {
    return {
      // 被选中（单项加class用）
      selectedIndex: 0,
      // 过期（单项加class用）
      disabledIndex: null,
      dateOnIndex: 0
    }
  },
  props: {
    'selectedService': {
      type: Object
    }
  },
  created() {
    // 这里派发了一个serviceList.js定义的action，目的是为了同样收到选择时候的服务
    // this.$store.dispatch('returnSelectedService')
    // Expects string as the type, but found undefined.
  },
  computed: {
    ...mapGetters({
      serviceTime: 'serviceTime'
    })
  },
  methods: {
    ...mapActions([
      'returnDateTime',
      'cancelServiceTimeSelected'
    ]),
    selectTimeSlot(index) {
      this.selectedIndex = index
    },
    selectDateTab(index) {
      this.dateOnIndex = index
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
@import '../../common/less/index.less';
.border-top-1px{
  .border-top-1px(#C0C0C0);
}
.discount-text{
  color: #ff7852;
  font-size: 14px;
}
.dateChoose-area{
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.dateChoose-box{
  display: flex;
  flex-direction: column;
  width: 100%;
  // height: 66%;
  // flex: 0 0 66%;
  height: 370px;
  flex: 0 0 370px;
  background-color: #FFF;
}
.dateChoose-title-bar{
  height: 42px;
  flex: 0 0 42px;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.dateChoose-title{
  font-size: 16px;
}
.dateChoose-title-sure{
  color:#f5a625;
}
/* tab start */
.dateChoose-dayChoose-tab{
  height: 50px;
  flex: 0 0 50px;
  display: flex;
}
.dateChoose-dayChoose-tab-item{
  flex: 0 0 25%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 20px;
}
.dateChoose-dayChoose-tab-item.on{
  color: #FFF;
  background-color: #50ad8e;
}
.dateChoose-dayChoose-tab-item.on .dateChoose-isBooking-state{
  color: #FFF;
}
.dateChoose-day-info{
  font-size: 14px;
}
.dateChoose-isBooking-state{
  font-size: 12px;
  color: #3B3B3B;
}
/* tab end */
/* con start */
.dateChoose-dayChoose-con{
  padding-top: 10px;
  padding-bottom: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.dateChoose-discount-area{
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  height: 67px;
  flex: 0 0 67px;
  display: flex;
  justify-content: space-between;
}
.dateChoose-area-item{
  box-sizing: border-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  width: 32%;
  height: 67px;
  flex: 0 0 32%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 22px;
  font-size: 12px;
  color: #5D5D5D;
}
.dateChoose-area-item.disable{
  color: #979797;
  border: 0 none;
  background-color: #F5F5F5;
  border-radius: 0;
}
.dateChoose-area-item.selected{
  position: relative;
  border-color: #4BAB8B;
}
.selected-icon{
  display: none;
}
.dateChoose-area-item.selected .selected-icon{
  display: block;
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  font-size: 20px;
  text-align: center;
  color: #4BAB8B;
}
/* 其它时间 start */
.date-choose-ohterTime{
  flex: 1;
  display: flex;
  flex-direction: column;
}
.date-choose-dayChoose-ohterTime-title{
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  flex: 0 0 46px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.date-choose-dayChoose-ohterTime-title-line{
  width: 37%;
  height: 1px;
  background-color: #C2C2C2;
}
.date-choose-dayChoose-ohterTime-title-con{
  color: #4BAB8B;
}
.date-choose-dayChoose-ohterTime-list{
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
/*其它时间 end*/
/* con end */
</style>
