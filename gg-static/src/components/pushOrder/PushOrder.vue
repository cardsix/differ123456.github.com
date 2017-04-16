<template id="pushOrder">
  <div class="pushOrder-bar">
    <span class="order-price">合计： ￥49.9</span>
    <a class="order-btn" href="javascript:;">提交订单</a>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'pushOrder'
}
</script>

<style scoped lang="less" type="text/less">
.pushOrder-bar{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: #FFF;
}
.order-price{
  flex: 1;
  padding-left: 15px;
}
.order-btn{
  flex: 0 0 110px;
  height: 100%;
  line-height: 44px;
  border-radius: 2px;
  background-color: #50ad8e;
  color: #FFF;
  text-align: center;
}
</style>
