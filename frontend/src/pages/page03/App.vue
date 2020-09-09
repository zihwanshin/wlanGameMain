<template>
  <div id="app">
    <router-view name='header'></router-view> <!--router components load-->
    <router-view></router-view> <!--router components load-->
  </div>
</template>

<script>

export default {
  name:'app',
  

}
</script>

<style>
body{
  text-align : center;
  background-color: #F6f6f8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
