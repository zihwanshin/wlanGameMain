<template>
  <div class="hello">
    <img alt="Vue logo" src='../../assets/logo.png'>
    <h1>{{ msg }}</h1>
<ol>
  <li><router-link to="/page03">훈민정음 게임</router-link></li>
</ol>
<router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
    msg : '랜선게임 test'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
