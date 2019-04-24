<template>
  <div id="app">
    <mt-header fixed title="信息管理系统"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <span class="iconfont icon-home"></span>
        <div>首页</div>
      </mt-tab-item>
      <mt-tab-item id="member">
        <span class="iconfont icon-VIP"></span>
        <div>会员</div>
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <span class="iconfont icon-shopcart"></span>
        <div>购物车</div>
      </mt-tab-item>
      <mt-tab-item id="search">
        <span class="iconfont icon-icon-search"></span>
        <div>查找</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "home"
    };
  },
  watch: {
    selected(newvalue, oldvalue) {
      this.$router.push({
        name: newvalue
      });
    }
  }
};
</script>

<style lang='scss'>
@import "assets/css/iconfont.css";
@import "assets/static/common.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
