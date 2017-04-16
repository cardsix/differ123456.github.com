<template id="login">
    <div class="login-area">
        <h3 class="login-title">呱呱洗车承诺严格保密车主隐私</h3>
        <div class="login-form-area">
            <div class="login-form-con-row login-input-tel-warp">
                <span class="login-form-icon login-form-tel-icon">
                  <i class="icon-tel"></i>
                </span>
                <input class="login-input-tel" type="text" name="telphone" value="" placeholder="电话号码">
            </div>
            <a class="login-form-con-row login-btn-sendV" href="javascript:;">获取验证码</a>
            <div class="login-form-con-row login-input-v-warp">
                <div class="login-form-vCode-warp">
                    <span class="login-form-icon login-form-vCode-icon">
                      <i class="icon-safe"></i>
                    </span>
                    <input class="login-form-vCode" type="text" name="verification" value="" placeholder="验证码">
                </div>
                <a class="login-btn-config" href="javascript:;">登录</a>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'login'
}
</script>

<style scoped lang="less" type="text/less">
@import '../../common/less/index.less';
.login-title {
    width: 100%;
    height:62px;
    line-height:62px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
}
.login-form-area {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
}
.login-input-tel-warp {
    box-sizing: border-box;
    width: 100%;
    height: 46px;
    border: 1px solid #BABABA;
    border-radius: 2px;
}
.login-btn-sendV{
    width: 100%;
    height: 46px;
    line-height: 46px;
    border-radius: 2px;
    background-color: #f6b344;
    color: #FFF;
    font-size: 18px;
    text-align: center;
}
.login-form-con-row {
    margin-bottom: 10px;
}
/*第三行验证码框和确定 start*/
.login-input-v-warp {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
.login-form-vCode-warp {
    width: 65%;
    height: 44px;
    border: 1px solid #BABABA;
    border-radius: 2px;
}
.login-form-vCode {
    width: 100%;
    height: 100%;
}
.login-btn-config {
    width: 30%;
    height: 46px;
    line-height: 46px;
    background-color: #50ad8e;
    text-align: center;
    font-size: 14px;
    color: #FFF;
}
/*第三行验证码框和确定 end*/


/*输入框图标和输入的设置 start*/
.login-input-tel-warp,
.login-form-vCode-warp{
    display: flex;
}
.login-form-icon{
    display: block;
    flex: 0 0 50px;
    height: 100%;
}
.login-input-tel,
.login-form-vCode{
    flex: 1;
    height: 100%;
}
.login-form-tel-icon {
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-image: url(tel.svg);
    // background-size: 50% 50%;
    text-align: center;
    line-height: 46px;
    font-size: 26px;
    color: #50ad8e;
}
.login-form-vCode-icon {
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-image: url(safe.svg);
    // background-size: 50% 50%;
    text-align: center;
    line-height: 46px;
    font-size: 26px;
    color: #50ad8e;
}
</style>
