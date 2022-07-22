<template>
  <div id="app">
    <MyHeader title="作业案例完成"></MyHeader>
    <div class="content">
      <router-view></router-view>
      <!-- <component :is="current"></component> -->
      <MyTabBar :list="tabList" @change="changeFn"></MyTabBar>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
// import MyTable from "./components/MyTable.vue";
// import MyGoodsList from "./views/MyGoodsList.vue";
// import MyGoodsSearch from "./views/MyGoodsSearch.vue";
// import MyUserInfo from "./views/MyUserInfo.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyTabBar,
  },
  data() {
    return {
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
      current: "MyGoodsList",
    };
  },
  methods: {
    changeFn(val) {
      this.current = val;
    },
  },
};
</script>

<style>
.content {
  padding-top: 45px;
}
</style>
