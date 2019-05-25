<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li v-for="item in namelist" :key="item.id">{{ item.id }} --- {{ item.name }}</li>
      <!-- <li>lala</li> -->
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      namelist: [1, 2, 3]
    }
  },
  created() {
    // 一定要使用箭头函数
    this.axios.get('/name/all').then(resp => {
        this.namelist = resp.data.namelist
    })

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
