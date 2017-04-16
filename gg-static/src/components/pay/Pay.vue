<template id="pay">
  <div class="pay-area">
    <div class="pay-timeout-tips">
      <span>请在20分钟内完成支付</span>
    </div>
    <ul class="pay-items-list">
      <li class="pay-item">
        <span class="item-title">订单编号</span>
        <span class="item-value">A0123456789</span>
      </li>
      <li class="pay-item">
        <span class="item-title">服务项目</span>
        <span class="item-value">A0123456789</span>
      </li>
      <li class="pay-item">
        <span class="item-title">订单金额</span>
        <span class="item-value">A0123456789</span>
      </li>
      <li class="pay-item">
        <span class="item-title">还需支付</span>
        <span class="item-value">A0123456789</span>
      </li>
    </ul>
    <ul class="pay-mod">
      <li class="pay-mod-item">
        <div class="pay-mod-item-inner">
          <i class="pay-mod-icon alipay-icon"></i>
          <span class="pay-mod-text">支付宝支付</span>
        </div>
      </li>
      <li class="pay-mod-item">
        <div class="pay-mod-item-inner">
          <i class="pay-mod-icon wechatpay-icon"></i>
          <span class="pay-mod-text">微信支付</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'pay'
}
</script>

<style scoped lang="less" type="text/less">
.pay-area{
  overflow: hidden;
  width: 100%;
}
.pay-timeout-tips{
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 44px;
  line-height: 44px;
  border-top: 1px solid #ECECEC;
  border-bottom: 1px solid #ECECEC;
  font-size:15px;
  text-align: center;
  color: #000;
}
.pay-items-list{
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #ECECEC;
}
.pay-item{
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 0 0 44px;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid #ECECEC;
}
.item-title{
  height: 100%;
  flex: 0 0 100px;
  width: 100px;
  text-align: center;
  font-size: 16px;
  color: #6D6D6D;
}
.item-value{
  height: 100%;
  flex: 1;
  color: #000;
  font-size: 15px;
  text-indent: 5px;
}
.pay-mod{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #50ad8e;
}
.pay-mod-item{
  height: 100%;
  // flex: 0 0 50%;
  flex: 1;
  display: flex;
  justify-content: center; /* 设置在容器上 */
}
.pay-mod-item-inner{
  color: #FFF;
  display: flex;
  align-items: center;
}
.pay-mod-icon{
  display: block;
  height: 35px;
  width: 35px;
  margin-right: 8px;
  background-repeat: no-repeat;
  background-position: center center;
}
.alipay-icon{
  background-image: url(alipay-icon.jpg);
  background-size: 100%;
}
.wechatpay-icon{
  background-image: url(wechatpay-icon.jpg);
  background-size: 100%;
}
</style>
