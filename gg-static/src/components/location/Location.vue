<template id="location">
  <div class="locaition-area">
    <div class="map-api-window-area">

    </div>
    <div class="tips-area">
      <div class="tips-con">
        <h3 class="tips-title">重要提示</h3>
        <p class="tips-text">请在地图中调整并确认您的车辆位置，准确的位置有助于我们快速为您的爱车服务</p>
      </div>
      <a class="sure-pos-btn" href="javascript:;">确认位置</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style scoped lang="less" type="text/less">
.locaition-area{
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.map-api-window-area{
  width: 100%;
  flex: 1;
}
.tips-area{
  width: 100%;
  flex: 0 0 125px;
  height: 125px;
}
</style>
