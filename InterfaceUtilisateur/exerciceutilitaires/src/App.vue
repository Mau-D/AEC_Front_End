<template>
  <div id="app">
    <signup></signup>
    <login></login>
  </div>
</template>

<script>
import signup from './components/SignUp'
import login from './components/Login'


export default {
  name: 'App',
  components: {
    signup,
    login
  
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
