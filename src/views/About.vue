<template>
  <div class="about">
   <img src="/img/38.png" alt="">
   <img src="/img/40.png" alt="">
   <img src="/img/39.png" alt="">
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push("/home/index");
    }, 2000);
  },
};
</script>
<style lang="scss" scoped>
.about{
  width: 100%;
  height: 100%;
  background-color: #fff0cc;
  display:flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 4rem;
  }
  img:nth-of-type(1){
    margin-top: 3rem;
  }
  img:nth-of-type(2){
    margin-top: 1.1rem;
    margin-bottom: 0.12rem;
  }
}
</style>
