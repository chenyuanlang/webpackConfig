<template>
  <div>
    <h1>我是App组件</h1>
    <router-link :to="{name:'music'}">音乐</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created() {
      console.log('呵呵，好玩');
  },
};
</script>

