<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        my-project
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      
    </div>
    <ul>
      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">About</nuxt-link></li>
      <li><nuxt-link :to="{name:'news',params:{newsId:3306}}">News</nuxt-link></li>
    </ul>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  mounted(){
    console.log(window,"window");
    let that = this;
     window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
    
  },
  methods:{
    
  }
}
</script>

<style>
.code-box {
  position: absolute;
  right: 50px;
  top: 163px;
  width: 240px;
  height: 240px;
  background-color: #fff;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

