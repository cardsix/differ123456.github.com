<template id="serviceListWindow">
  <div class="service-list-window-area">
    <ul class="service-list">
      <li class="service-list-item"  v-for="(service, index) in serviceList"  @click="returnSelectedService(index)">
        <span class="service-window-item">{{ service.name }}</span>
        <span class="service-window-price" v-show="!isOrder">￥199</span>
      </li>
    </ul>
    <a href="javascript:;" class="return-btn" @click="cancelServiceWindow()">取消</a>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.$store.dispatch('reciveService')
  },
  computed: {
    ...mapGetters({
      isOrder: 'isOrder',
      serviceList: 'serviceList'
    })
  },
  methods: mapActions([
    'cancelServiceWindow',
    'reciveService',
    'returnSelectedService'
  ])
}
</script>

<style scoped lang="less" type="text/less">
.service-list-window-area{
  box-sizing: border-box;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8px;
}
.service-list-item{
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 46px;
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}
.service-window-price{
  color: #43a886;
}
.return-btn{
  margin-top: 8px;
  width: 100%;
  height: 46px;
  line-height: 46px;
  border-radius: 4px;
  background-color: #FFF;
  text-align: center;
  color: #0076ff;
  font-size:  20px;
}
</style>
