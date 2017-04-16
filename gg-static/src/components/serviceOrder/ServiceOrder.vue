<template id="serviceOrder">
  <div class="serviceOrder-area">
    <ul class="options-list">
      <li class="option">
        <h3 class="option-title">基本信息</h3>
        <ul class="option-con-list">
          <li class="option-con-list-item border-bottom-1px">
            <span class="option-con-list-item-title">服务车辆</span>
            <span class="option-con-list-item-value">请选择车辆</span>
            <a href="javascript:;" class="r-arrow"></a>
          </li>
          <li class="option-con-list-item border-bottom-1px">
            <span class="option-con-list-item-title">服务车辆</span>
            <span class="option-con-list-item-value">请选择车辆</span>
            <a href="javascript:;" class="r-arrow"></a>
          </li>
          <li class="option-con-list-item border-bottom-1px">
            <span class="option-con-list-item-title">服务车辆</span>
            <span class="option-con-list-item-value">请选择车辆</span>
            <a href="javascript:;" class="r-arrow"></a>
          </li>
        </ul>
      </li>
      <li class="option">
        <h3 class="option-title">基本信息</h3>
        <ul class="option-con-list">
          <li class="option-con-list-item border-bottom-1px">
            <span class="option-con-list-item-title">服务车辆</span>
            <span class="option-con-list-item-value">请选择车辆</span>
            <a href="javascript:;" class="r-arrow"></a>
          </li>
          <li class="option-con-list-item border-bottom-1px">
            <span class="option-con-list-item-title">服务车辆</span>
            <span class="option-con-list-item-value">请选择车辆</span>
            <a href="javascript:;" class="r-arrow"></a>
          </li>
          <li class="option-con-list-item border-bottom-1px">
            <span class="option-con-list-item-title">服务车辆</span>
            <span class="option-con-list-item-value">请选择车辆</span>
            <a href="javascript:;" class="r-arrow"></a>
          </li>
        </ul>
      </li>
      <li class="option">
        <div class="time-tips option-con-list-item border-top-1px border-bottom-1px">
          <span>预计今日13点58分完成洗车</span>
        </div>
      </li>
      <li class="option">
        <div class="remarks-input option-con-list-item border-top-1px border-bottom-1px">
          <span class="option-con-list-item-title">填写备注</span>
          <span class="option-con-list-item-value">
            <input class=" remarks-con" type="text" name="remarks" value="" placeholder="注意事项或车辆周围环境">
          </span>
        </div>
      </li>
    </ul>
    <!-- 底部定位的提交订单组件 -->
    <div class="push-order border-top-1px">
      <v-pushOrder></v-pushOrder>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import PushOrder from '../pushOrder/PushOrder'
export default {
  components: {
    'v-pushOrder': PushOrder
  }
}
</script>

<style scoped lang="less" type="text/less">
@import '../../common/less/index.less';
.border-bottom-1px{
  .border-bottom-1px(#e0e0e0);
}
.border-top-1px{
  .border-top-1px(#e0e0e0);
}
.serviceOrder-area{
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: #e1e1e1;
}
.options-list{
  overflow: hidden;
  width: 100%;
}
.option{
  overflow: hidden;
  width: 100%;
  margin-bottom: 10px;
  background-color: #FFF;
}
.option-title{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  color: #000;
  text-indent: 10px;
  // background-color: #FFF;
}
.option-con-list{
  overflow: hidden;
  width: 100%;
  background-color: #FFF;
}
.option-con-list-item{
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  line-height: 44px;
  padding-left: 15px;
  padding-right: 15px;
}
.option-con-list-item-title{
  flex: 0 0 95px;
  width: 95px;
  height: 100%;
}
.option-con-list-item-value{
  flex: 1;
  height: 100%;
}
.time-tips{
  width: 100%;
  height: 43px;
}
.push-order{
  position: fixed;
  left: 0;
  bottom: 0;
  width:100%;
}
</style>
