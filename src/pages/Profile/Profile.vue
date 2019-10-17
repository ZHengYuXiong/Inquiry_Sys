<template>
  <section class="profile">
    <!--我的信息头部-->
    <HeaderTop title="个人中心"/>
    <!--个人中心内容-->
    <section class="profile-number">
      <router-link to="/login" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data border-1px">
      <!-- 学号信息 -->
      <a href="javascript:" class="my_info">
        <div class="my_info_div">
          <span>学号</span>
          <span class="my_info_icon">
          </span>
        </div>
      </a>
      <!-- 班级信息 -->
      <a href="javascript:" class="my_info">
        <div class="my_info_div">
          <span>班级</span>
          <span class="my_info_icon">
          </span>
        </div>
      </a>
      <!-- 性别 -->
      <a href="javascript:" class="my_info">
        <div class="my_info_div">
          <span>性别</span>
          <span class="my_info_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!-- 联系方式 -->
      <a href="javascript:" class="my_info">
        <div class="my_info_div">
          <span>联系方式</span>
          <span class="my_info_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="profile_conventional_data border-1px">
      <!-- 诊断心得 -->
      <a href="javascript:" class="conventional_info">
        <div class="conventional_div">
          <span>诊断心得</span>
          <span class="conventional_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!-- 关于我们 -->
      <a href="javascript:" class="conventional_info">
        <div class="conventional_div">
          <span>关于我们</span>
          <span class="conventional_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="profile_remaining border-1px"></section>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .profile //我的
    width 100%
    background-color #e4e4e4
    overflow hidden
    .profile-number
      margin-top 45.5px
      .profile-link
        clearFix()
        position relative
        display block
        background #02a774
        padding 45px 10px
        .profile_image
          float left
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          vertical-align top
          margin-top -30px
          .icon-person
            background #e4e4e4
            font-size 62px
        .user-info
            float left
            margin-left 15px
            margin-top -10px
          p
            font-weight: 700
            font-size 18px
            color #fff
        .arrow
          width: 23px;
          height: -21px;
          float: right;
          margin-top: -10px;
          .icon-jiantou1
            color #fff
            font-size 5px
    .profile_info_data
      top-border-1px(#e4e4e4)
      margin-top 20px
      background #fff
      .my_info
        display flex
        align-items center
        padding-left 15px
        >span
          display flex
          align-items center
          width 20px
          height 20px
          >.iconfont
            margin-left -10px
            font-size 30px
          .icon-order-s
            color #02a774
          .icon-jifen
            color #ff5f3e
          .icon-vip
            color #f90
          .icon-fuwu
            color #02a774
        .my_info_div
          width 92%
          border-bottom 1px solid #f1f1f1
          padding 18px 10px 18px 0
          font-size 16px
          color #333
          display flex
          justify-content space-between
          span
            display block
          .my_info_icon
            width 10px
            height 10px
            .icon-jiantou1
              color #bbb
              font-size 10px
    .profile_conventional_data
      top-border-1px(#e4e4e4)
      margin-top 20px
      background #fff
      .conventional_info
        display flex
        align-items center
        padding-left 15px
        >span
          display flex
          align-items center
          width 20px
          height 20px
          >.iconfont
            margin-left -10px
            font-size 30px
          .icon-order-s
            color #02a774
          .icon-jifen
            color #ff5f3e
          .icon-vip
            color #f90
          .icon-fuwu
            color #02a774
        .conventional_div
          width 92%
          border-bottom 1px solid #f1f1f1
          padding 18px 10px 18px 0
          font-size 16px
          color #333
          display flex
          justify-content space-between
          span
            display block
          .conventional_icon
            width 10px
            height 10px
            .icon-jiantou1
              color #bbb
              font-size 10px
    .profile_remaining
      background #e4e4e4
      height 154px
      width 100%
</style>
