<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">问诊系统</h2>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div class="on">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="请输入学号" v-model="studentID">
              </section>
              <section class="login_verification">
                <input type="test" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <div class="switch_button" :class="showPwd?'on' : 'off'"  @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" @click="getCaptcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>

    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"></AlertTip>
  </section>
</template>

<script>
import AlertTip from '../../components/AlertTip/AlertTip'
export default {
  data () {
    return {
      showPwd: false, // 是否显示密码
      studentID: '', // 学号
      pwd: '', // 密码
      captcha: '', // 图形验证码
      alertText: '', // 提示文本
      alertShow: false // 是否显示警告框
    }
  },
  methods: {
    showAlert (alertText) {
      this.alertShow = true
      this.alertText = alertText
    },
    // 异步登录
    login () {
      // 前台表单验证
      // eslint-disable-next-line no-unused-vars
      const {studentID, pwd, captcha} = this
      if (!this.studentID) {
        // 必须指定学号
        this.showAlert('学号不正确！')
      } else if (!this.pwd) {
        // 必须指定密码
        this.showAlert('密码不正确！')
      } else if (!this.captcha) {
        // 必须指定验证码
        this.showAlert('验证码不正确！')
      }
    },
    // 关闭警告框
    closeTip () {
      this.alertShow = false
      this.alertText = ''
    },
    // 获取一个新的图片验证码
    getCaptcha (event) {
      // 每次指定的 src 要不一样
      event.target.src = 'http://localhost:4000/captcha?time=' + Date.now()
    }
  },

  components: {
    AlertTip
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
          margin-bottom 90px
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(30px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
