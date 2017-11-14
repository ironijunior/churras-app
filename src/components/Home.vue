<template>
  <div id="home">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <hr></hr>
    <br />
    <h2>Next Events</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">#1 Riachuleto - Done</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">#2 Riachuleto - Coming</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Party Hard</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">LA la LA la</a></li>
    </ul>
    <br />
    <ul>
      <li><router-link :to="'/login'">Login</router-link></li>
      <li><router-link :to="'/signUp'">Sign Up</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to ChurrasCumbras!'
    }
  }
}
</script>

<style lang="scss">
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5px;
}

h1, h2 {
  font-weight: normal;
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
