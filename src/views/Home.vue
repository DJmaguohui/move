<template>
  <div class="home">
<!--内容展示区域-->
  <div>
  <router-view></router-view>
  </div>
  <!--页脚-->
    <footer>
      <van-tabbar route>
        <van-tabbar-item replace to="/home/index" icon="wap-home"> 首页 </van-tabbar-item>
        <van-tabbar-item replace to="/home/course" icon="orders-o"> 课程 </van-tabbar-item>
        <van-tabbar-item replace to="/home/advisory" icon="column"> 咨询 </van-tabbar-item>
        <van-tabbar-item replace to="/home/book" icon="bookmark-o"> 图书 </van-tabbar-item>
        <van-tabbar-item replace to="/home/my" icon="manager"> 我的 </van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
   div{
    flex:1;
  }
  footer{
    width: 100%;
    height: 0.5rem;
  }
 
}
</style>
